/*
  Warnings:

  - You are about to drop the column `title` on the `tasks` table. All the data in the column will be lost.
  - Made the column `text` on table `tasks` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "tasks" DROP COLUMN "title",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "text" SET NOT NULL;
