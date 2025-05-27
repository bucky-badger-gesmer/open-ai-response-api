import OpenAI from "openai";

const openai = new OpenAI();

const response = await openai.responses.create({
    model: "gpt-4o-mini",
    input: "who is the greatest basketball player of all time?",
    store: true,
});

console.log(response);

const secondResponse = await openai.responses.create({
    model: "gpt-4o-mini",
    previous_response_id: response.id,
    input: [
        {
            "role": "developer",
            "content": "Talk like Jerry Seinfeld"
        },
        {
            "role": "user",
            "content": "explain why this is the greatest basketball player of all time."
        }
    ],
    store: true,
});

console.log(secondResponse.output_text);