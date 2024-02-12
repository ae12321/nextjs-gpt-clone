"use server";

import OpenAI from "openai";
import { generateRecipeContext } from "./prompt";

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
      // model: "gpt-3.5-turbo",
      model: "gpt-3.5-turbo-1106",
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

export const getExistingRecipes = async ({ food1, food2 }) => {
  //
};

export const generateRecipeResponse = async ({ food1, food2 }) => {
  //
  const prompt = generateRecipeContext(food1, food2);
  try {
    const response = await openai.chat.completions.create({
      messages: [
        { role: "system", content: prompt.instructions },
        { role: "user", content: prompt.question },
      ],
      model: "gpt-3.5-turbo",
      temperature: 0,
    });

    const parsed = JSON.parse(response.choices[0].message.content);
    if (!parsed.recipe) return null;

    return parsed.recipe;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const createNewRecipe = async ({ food1, food2 }) => {
  //
};
