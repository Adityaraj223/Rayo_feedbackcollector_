import NewProjBtn from "@/components/new-proj";
import { db } from "@/db";
import { projects } from "@/db/schema";
import { eq } from "drizzle-orm";
import { auth } from "@clerk/nextjs/server";
import Projectslist from "./projects-list";

export default async function page() {
  const { userId } = auth();
  if (!userId) {
    return null;
  }

  const userProjects = await db.select().from(projects);

  return (
    <div>
      <div className="flex items-center justify-center gap-3">
        <h1 className="text-3xl font-bold text-center my-4">Projects List</h1>
        <NewProjBtn />
      </div>
      <Projectslist projects={userProjects} />
    </div>
  );
}
