"use server";

import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const generateChatResponse = async (messages) => {
  try {
    const response = await openai.chat.completions.create({
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        ...messages,
      ],
      model: "gpt-3.5-turbo",
      temperature: 0,
    });
    //   console.log(response.choices[0].message);
    // console.log(response);
    console.warn(response.usage);
    return response.choices[0].message;
  } catch (error) {
    console.error(error.message);
    return null;
  }
};
