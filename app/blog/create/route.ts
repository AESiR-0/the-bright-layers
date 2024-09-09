export const dynamic = "force-dynamic"; // defaults to auto
import fs from "fs/promises";
import type { NextApiRequest, NextApiResponse } from "next";

async function getRequestBody(request: NextApiRequest) {
  const requestClone = request.clone();
  const body = await requestClone.json();

  return body;
}

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  const dat = await req.json();
  console.log(dat, " : Recieved Data ");

  const data = JSON.stringify(dat);
  fs.appendFile(
    process.cwd() + "/app/data/blogs.json",
    `Hey there! ${data} \n`
  );

  return new Response(data, { status: 200 });
}
