import fs from "fs/promises";
import OpenAI from "openai";
const client = new OpenAI();

const instructions = await fs.readFile("few_shot_prompt.txt", "utf-8");

const response = await client.responses.create({
    model: "gpt-4.1",
    instructions,
    input: "Holy smokes, Brian Griffin's book 'Faster at the speed of love' is god awful. I wanted to gauge my eyes out.",
});

console.log(response.output_text);