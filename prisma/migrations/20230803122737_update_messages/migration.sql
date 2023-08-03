-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_messages" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "id_user" TEXT NOT NULL,
    "to" TEXT NOT NULL,
    "from" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    CONSTRAINT "messages_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users" ("email") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_messages" ("body", "from", "id", "id_user", "to") SELECT "body", "from", "id", "id_user", "to" FROM "messages";
DROP TABLE "messages";
ALTER TABLE "new_messages" RENAME TO "messages";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
