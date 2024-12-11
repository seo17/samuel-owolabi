"use server";

export async function sendMessageByEmailAction(data: {
  name: string;
  email: string;
  message: string;
}) {
  console.log("hi");
}
