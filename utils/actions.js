"use server";

import OpenAI from "openai";
import { generateRecipeContext } from "./prompt";
import prisma from "./db";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// ----------------- Actions -----------------

// /chatのレスポンス
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

    // show usage token info
    console.warn(response.usage);
    return response.choices[0].message;
  } catch (error) {
    console.error(error.message);
    return null;
  }
};

// /recipeのレスポンス
export const generateRecipeResponse = async ({ food1, food2 }) => {
  //
  const prompt = generateRecipeContext(food1, food2);
  try {
    const response = await openai.chat.completions.create({
      messages: [
        { role: "system", content: prompt.instructions },
        { role: "user", content: prompt.question },
      ],
      model: "gpt-3.5-turbo-1106",
      temperature: 0,
    });

    // show usage token info
    console.warn(response.usage);

    const parsed = JSON.parse(response.choices[0].message.content);
    if (!parsed.data) return null;

    return parsed.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// /recipeで生成済みのレシピを取得
export const getExistingRecipe = async ({ food1, food2 }) => {
  return prisma.recipe.findUnique({
    where: {
      food1_food2: {
        food1,
        food2,
      },
    },
  });
};

// /recipeで新しいレシピを生成
export const createNewRecipe = async (recipeData) => {
  return prisma.recipe.create({
    data: {
      ...recipeData,
      // 文字列型の配列をなんとか文字列にして保存
      steps: JSON.stringify(recipeData.steps),
    },
  });
};
