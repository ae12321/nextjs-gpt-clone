"use server";

import { revalidatePath } from "next/cache";
import prisma from "../../../utils/db";
import { redirect } from "next/navigation";

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
