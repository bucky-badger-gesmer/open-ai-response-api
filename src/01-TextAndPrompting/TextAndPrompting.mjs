import OpenAI from "openai";
const client = new OpenAI();

// instructions will override input
const response = await client.responses.create({
    model: "gpt-4.1",
    // instructions: "Talk like a you are a flamboyant thesbian.",
    // input: "Are semicolons optional in JavaScript?"
    input: [
        {
            role: 'system',
            content: "Talk like George Castanza from Seinfeld."
        },
        {
            role: 'developer',
            content: "Are semicolons optional in JavaScript?"
        },
        // {
        //     role: 'user',
        //     content: "Are semicolons optional in JavaScript?"
        // }
    ]
});


console.log(response);