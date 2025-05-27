import OpenAI from "openai";

const openai = new OpenAI();

const response = await openai.responses.create({
    model: "gpt-4.1-mini",
    input: [{
        role: "user",
        content: [
            { type: "input_text", text: "what's in this image?" },
            {
                type: "input_image",
                image_url: "https://i.ytimg.com/vi/yOeEVZFDJnQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC26Ta4GwAWwBAmo8Py05tK7-kbtA",
                detail: "high"
            },
        ],
    }],
});

console.log(response.output_text);