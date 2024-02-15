/*
  Warnings:

  - You are about to drop the column `userId` on the `document` table. All the data in the column will be lost.
  - Added the required column `userMail` to the `Document` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `document` DROP FOREIGN KEY `Document_userId_fkey`;

-- AlterTable
ALTER TABLE `document` DROP COLUMN `userId`,
    ADD COLUMN `userMail` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Document` ADD CONSTRAINT `Document_userMail_fkey` FOREIGN KEY (`userMail`) REFERENCES `User`(`email`) ON DELETE RESTRICT ON UPDATE CASCADE;
