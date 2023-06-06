/*
  Warnings:

  - You are about to drop the column `value` on the `Finance` table. All the data in the column will be lost.
  - Added the required column `amount` to the `Finance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Finance` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Finance" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "amount" REAL NOT NULL,
    "category" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Finance" ("category", "createdAt", "id", "title") SELECT "category", "createdAt", "id", "title" FROM "Finance";
DROP TABLE "Finance";
ALTER TABLE "new_Finance" RENAME TO "Finance";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
