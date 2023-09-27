/*
  Warnings:

  - You are about to drop the `Content` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Discipline` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Content" DROP CONSTRAINT "Content_disciplineId_fkey";

-- DropForeignKey
ALTER TABLE "Discipline" DROP CONSTRAINT "Discipline_userId_fkey";

-- DropTable
DROP TABLE "Content";

-- DropTable
DROP TABLE "Discipline";

-- CreateTable
CREATE TABLE "discipline" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "userId" TEXT,

    CONSTRAINT "discipline_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "content" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "disciplineId" TEXT,

    CONSTRAINT "content_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "discipline_name_key" ON "discipline"("name");

-- CreateIndex
CREATE UNIQUE INDEX "content_name_key" ON "content"("name");

-- AddForeignKey
ALTER TABLE "discipline" ADD CONSTRAINT "discipline_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "content" ADD CONSTRAINT "content_disciplineId_fkey" FOREIGN KEY ("disciplineId") REFERENCES "discipline"("id") ON DELETE SET NULL ON UPDATE CASCADE;
