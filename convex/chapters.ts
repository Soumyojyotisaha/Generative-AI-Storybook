import { version } from "os";
import { api } from "./_generated/api";
import { Doc } from "./_generated/dataModel";
import { DatabaseWriter, internalQuery, mutation, query } from "./_generated/server";
async function bumpVersion(db:DatabaseWriter):Promise<number>
{
  const versionDoc=await db.query("version").first()!;
  const newVersion=versionDoc!.version +1;
  await db.patch(versionDoc!._id,{
    version:newVersion,
  });
  return newVersion;
}
export const updateChapterContents = mutation(
  async (
    { db,scheduler },
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
  const version= await bumpVersion(db);
  const pages=await db.query("chapters").collect();
  for (let i=0;i<pages.length;i++)
  {
    await scheduler.runAfter(5000, api.ai.populatePageimage, { pageNumber: i,version});
  }

  });

export const getBookState = query(
  async ({ db }): Promise<Doc<"chapters">[]> => {
    const pages = await db
      .query("chapters")
      .withIndex("by_pageNumber")
      .collect();
    return pages;
  });

  export const getBookStateWithVersion = internalQuery({
    handler: async (ctx): Promise<[number, Doc<"chapters">[]]> => {
      const pages = await ctx.db
        .query("chapters")
        .withIndex("by_pageNumber")
        .collect();
      const versionDoc = await ctx.db.query("version").first();
      return [versionDoc?.version ?? 0, pages];
    },
  });
