-- AlterTable
ALTER TABLE "JobApplication" ADD COLUMN     "reply" TEXT,
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'pending';
