import { mutation } from "./_generated/server";

const updateChapterContents = mutation(async ({ db }, { pageNumber, content }: { pageNumber: number; content: string }) => {
  await db.insert("chapters", {
    pageNumber,
    content,
    image: null, // Assuming you have an 'image' field in your 'chapters' table
  });
});

export default updateChapterContents;
