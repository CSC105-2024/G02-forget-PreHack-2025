-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_FoodPost" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "location" TEXT NOT NULL,
    "phoneNumber" TEXT,
    "resNumber" TEXT,
    "image" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "FoodPost_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_FoodPost" ("id", "image", "location", "name", "phoneNumber", "price", "rating", "resNumber", "userId") SELECT "id", "image", "location", "name", "phoneNumber", "price", "rating", "resNumber", "userId" FROM "FoodPost";
DROP TABLE "FoodPost";
ALTER TABLE "new_FoodPost" RENAME TO "FoodPost";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
