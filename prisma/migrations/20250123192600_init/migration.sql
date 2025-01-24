-- CreateTable
CREATE TABLE "tasks" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(6) DEFAULT '2025-01-23 19:04:00.661975'::timestamp without time zone,
    "text" TEXT,

    CONSTRAINT "tasks_pkey" PRIMARY KEY ("id")
);
