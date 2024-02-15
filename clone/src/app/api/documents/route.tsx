import { PrismaClient } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";
const prisma = new PrismaClient();

export async function GET(request: any) {
  const id = 1;

  const documents: any = await prisma.document.findMany({
    where: {
      userId: id,
    },
  });

  return NextResponse.json(documents);
}
