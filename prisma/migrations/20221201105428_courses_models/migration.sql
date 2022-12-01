-- CreateTable
CREATE TABLE "courses_models" (
    "id" TEXT NOT NULL,
    "fk_courses_id" TEXT NOT NULL,
    "fk_modules_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "courses_models_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "courses_models" ADD CONSTRAINT "courses_models_fk_courses_id_fkey" FOREIGN KEY ("fk_courses_id") REFERENCES "courses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "courses_models" ADD CONSTRAINT "courses_models_fk_modules_id_fkey" FOREIGN KEY ("fk_modules_id") REFERENCES "modules"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
