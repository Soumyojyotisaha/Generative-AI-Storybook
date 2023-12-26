"use node";
import {action} from "./_generated/server";
export const populatePageimage=action(async ({},{pageNumber,version}:{pageNumber:number,version:number}) => {
console.log(`Hello from populateimage for page ${pageNumber} at book version ${version}`);
})