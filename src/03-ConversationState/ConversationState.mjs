import OpenAI from "openai";

const openai = new OpenAI();

const response = await openai.responses.create({
    model: "gpt-4o-mini",
    input: "tell me a joke",
    store: true,
});

console.log(response.output_text);

const secondResponse = await openai.responses.create({
    model: "gpt-4o-mini",
    previous_response_id: response.id,
    input: [
        {
            "role": "developer",
            "content": "Talk like a pirate"
        },
        {
            "role": "user",
            "content": "explain why this is funny."
        }
    ],
    store: true,
});

console.log(secondResponse.output_text);



// let history = [
//     {
//         role: "user",
//         content: "tell me a joke",
//     },
// ];

// const response = await openai.responses.create({
//     model: "gpt-4o-mini",
//     input: history,
//     store: true,
// });

// console.log(response.output_text);

// // Add the response to the history
// history = [
//     ...history,
//     ...response.output.map((el) => {
//         // TODO: Remove this step
//         delete el.id;
//         return el;
//     }),
// ];

// history.push({
//     role: "user",
//     content: "tell me another",
// });

// const secondResponse = await openai.responses.create({
//     model: "gpt-4o-mini",
//     input: history,
//     store: true,
// });

// console.log(secondResponse.output_text);



// const response = await openai.responses.create({
//     model: "gpt-4o-mini",
//     input: [
//         { role: "user", content: "knock knock." },
//         { role: "assistant", content: "Who's there?" },
//         { role: "user", content: "Orange." },
//     ],
// });

// console.log(response.output_text);