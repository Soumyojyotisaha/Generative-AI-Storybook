import { Doc } from "./_generated/dataModel";
import { DatabaseWriter, mutation, query } from "./_generated/server";
async function bumpVersion(db:DatabaseWriter){
  const versionDoc=await db.query("version").first()!;
  await db.patch(versionDoc!._id,{
    version:versionDoc!.version +1,
  })
}
export const updateChapterContents = mutation(
  async (
    { db },
    { pageNumber, content }: { pageNumber: number; content: string }
  ) => {
    let existing = await db
      .query("chapters")
      .withIndex("by_pageNumber", q => q.eq("pageNumber", pageNumber))
      .first();
    if (existing !== null) {
      await db.patch(existing._id, {
        content,
      });
    } else {
      await db.insert("chapters", {
        pageNumber,
        content,
        image: null,
      });
    }
    await bumpVersion(db);
    }
);

export const getBookState = query(
  async ({ db }): Promise<Doc<"chapters">[]> => {
    const pages = await db
      .query("chapters")
      .withIndex("by_pageNumber")
      .collect();
    return pages;
  }
);