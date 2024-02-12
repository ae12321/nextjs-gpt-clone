/*
  Warnings:

  - A unique constraint covering the columns `[food1,food2]` on the table `Recipe` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Recipe_food1_food2_key" ON "Recipe"("food1", "food2");
