/*
  Warnings:

  - You are about to drop the column `id_user` on the `messages` table. All the data in the column will be lost.
  - Added the required column `email_user` to the `messages` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_messages" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email_user" TEXT NOT NULL,
    "to" TEXT NOT NULL,
    "from" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    CONSTRAINT "messages_email_user_fkey" FOREIGN KEY ("email_user") REFERENCES "users" ("email") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_messages" ("body", "from", "id", "to") SELECT "body", "from", "id", "to" FROM "messages";
DROP TABLE "messages";
ALTER TABLE "new_messages" RENAME TO "messages";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
