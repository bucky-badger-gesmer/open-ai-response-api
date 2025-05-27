import OpenAI from "openai";
const client = new OpenAI();

const response = await client.responses.create({
    model: "gpt-4.1",
    tools: [ { type: "web_search_preview" } ],
    input: "What restaurant has the best cheese burger in the Twin Cities?",
});

console.log(response.output_text);