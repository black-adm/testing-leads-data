/*
  Warnings:

  - Added the required column `cep` to the `Lead` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Lead" ADD COLUMN     "cep" TEXT NOT NULL,
ADD COLUMN     "status" BOOLEAN;
