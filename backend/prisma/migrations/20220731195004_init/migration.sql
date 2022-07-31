-- CreateEnum
CREATE TYPE "status" AS ENUM ('new', 'open', 'closed');

-- CreateTable
CREATE TABLE "answers" (
    "vote_id" INTEGER NOT NULL,
    "user_id" UUID NOT NULL,
    "answer" INTEGER NOT NULL,
    "submitted_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "answers_pk" PRIMARY KEY ("vote_id","user_id")
);

-- CreateTable
CREATE TABLE "votes" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "options" JSON NOT NULL,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "opened_at" TIMESTAMP(6),
    "closed_at" TIMESTAMP(6),
    "status" "status" DEFAULT 'new',

    CONSTRAINT "votes_pk" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "answers_vote_id_index" ON "answers"("vote_id");

-- AddForeignKey
ALTER TABLE "answers" ADD CONSTRAINT "answers_votes_id_fk" FOREIGN KEY ("vote_id") REFERENCES "votes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
