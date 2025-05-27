import fs from "fs/promises";
import OpenAI from "openai";
const client = new OpenAI();

const instructions = await fs.readFile("prompt.txt", "utf-8");

const response = await client.responses.create({
    model: "gpt-4.1",
    instructions,
    input: "How would I declare a variable for a last name?",
});

console.log(response.output_text);