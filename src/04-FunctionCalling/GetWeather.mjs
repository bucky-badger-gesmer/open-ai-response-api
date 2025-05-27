import { OpenAI } from "openai";

const openai = new OpenAI();

const tools = [{
    "type": "function",
    "name": "get_weather",
    "description": "Get current temperature for a given location.",
    "parameters": {
        "type": "object",
        "properties": {
            "location": {
                "type": "string",
                "description": "City and country e.g. Bogotá, Colombia"
            }
        },
        "required": [
            "location"
        ],
        "additionalProperties": false
    }
}];

const response = await openai.responses.create({
    model: "gpt-4.1",
    input: [{ role: "user", content: "What is the weather like in Paris today?" }],
    tools,
});

console.log(response.output);