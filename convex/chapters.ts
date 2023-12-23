import { mutation, query} from "./_generated/server";
import {Doc} from "./_generated/dataModel";

export const updateChapterContents = mutation(async ({ db }, { pageNumber, content }: { pageNumber: number; content: string }) => {
  await db.insert("chapters", {
    pageNumber,
    content,
    image: null, // Assuming you have an 'image' field in your 'chapters' table
  });
});

export const getBookState = query(async ({ db }): Promise<Doc<"chapters">[]> => {
  const pages = await db.query("chapters").withIndex("by_pageNumber").collect();
  return pages;
});
