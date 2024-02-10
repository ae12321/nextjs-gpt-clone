"use server";

import { revalidatePath } from "next/cache";
import prisma from "../../../utils/db";
import { redirect } from "next/navigation";
import { z } from "zod";

export const getTasks = async () => {
  return await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const addTask = async (formData) => {
  const content = formData.get("content");
  await prisma.task.create({
    data: {
      content,
    },
  });
  revalidatePath("/query");
};

export const addTaskCustom = async (prevState, formData) => {
  const content = formData.get("content");

  const schema = z.object({
    content: z.string().min(2).max(10),
  });

  try {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    schema.parse({ content });
    await prisma.task.create({
      data: {
        content,
      },
    });
    revalidatePath("/query");
    return { message: "success" };
  } catch (error) {
    console.error(error.message);
    return { message: "error" };
  }
};

export const deleteTask = async (formData) => {
  //
  const id = formData.get("id");
  // console.log(id);
  await prisma.task.delete({
    where: { id },
  });
  revalidatePath("/query");
};

export const getTask = async (id) => {
  const data = await prisma.task.findUnique({
    where: { id },
  });
  return data;
};
export const updateTask = async (formData) => {
  console.log(formData);
  const id = formData.get("id");
  const content = formData.get("content");
  const completed = formData.get("completed") === "on" ? true : false;

  console.log({ id, content, completed });
  await prisma.task.update({
    where: { id },
    data: {
      content,
      completed,
    },
  });

  redirect("/query");
};
