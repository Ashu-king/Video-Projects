import { PrismaClient } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";
const prisma = new PrismaClient();

export async function POST(request: any, response: any) {
  const body = await request.json();
  const { title, userId, isArchived, isPublished } = body;
  const document = await prisma.document.create({
    data: {
      title,
      userId,
      isArchived,
      isPublished,
    },
  });

  console.log(document);
  return NextResponse.json("Doc is created");
}
