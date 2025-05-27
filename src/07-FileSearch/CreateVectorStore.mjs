import OpenAI from "openai";
const openai = new OpenAI();


const vectorStore = await openai.vectorStores.create({
    name: "knowledge_base",
});
console.log(vectorStore.id);