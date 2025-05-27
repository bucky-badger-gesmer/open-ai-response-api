import OpenAI from "openai";
const openai = new OpenAI();

const response = await openai.responses.create({
    model: "gpt-4.1",
    tools: [{
        type: "web_search_preview",
        user_location: {
            type: "approximate",
            country: "US",
            city: "Mendota Heights",
        }
    }],
    input: "What are the best restaurants around Mendota Heights?",
});
console.log(response.output_text);