/*
  Warnings:

  - You are about to drop the `BodyRecord` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "BodyRecord" DROP CONSTRAINT "BodyRecord_userId_fkey";

-- DropTable
DROP TABLE "BodyRecord";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "USER" (
    "id" VARCHAR(36) NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "email" VARCHAR(254) NOT NULL,

    CONSTRAINT "USER_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BODY_RECORD" (
    "id" VARCHAR(36) NOT NULL,
    "user_id" VARCHAR(36) NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL,
    "fat_late" DOUBLE PRECISION NOT NULL,
    "recorded_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BODY_RECORD_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "USER_email_key" ON "USER"("email");

-- AddForeignKey
ALTER TABLE "BODY_RECORD" ADD CONSTRAINT "BODY_RECORD_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "USER"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
