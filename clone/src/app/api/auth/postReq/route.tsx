import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request: any, response: NextApiResponse) {
  const body = await request.json();
  const { name, email } = body;
  try {
    if (!name || !email) {
      console.log("you are not loged in");
      return new NextResponse("missing name or email or password");
    }
    const exist = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (exist) {
      console.log("you are loged in as user ", exist.id);
      return new NextResponse("you are loged in", {
        status: 200,
      });
    } else {
      console.log("user do not exist");
    }
    const user = await prisma.user.create({
      data: {
        name,
        email,
      },
    });

    return NextResponse.json(body);
  } catch (error) {
    console.log(error);
  }
}
