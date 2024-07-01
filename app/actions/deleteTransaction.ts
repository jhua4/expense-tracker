"use server";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

async function deleteTransaction(transactionId: string): Promise<{
  error?: string;
}> {
  const { userId } = auth();
  if (!userId) {
    return { error: "User not found." };
  }

  try {
    await db.transaction.delete({ where: { id: transactionId, userId } });
    revalidatePath("/");
    return {};
  } catch (error) {
    return { error: "Could not delete transaction." };
  }
}

export default deleteTransaction;
