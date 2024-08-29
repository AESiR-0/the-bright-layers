export const dynamic = "force-dynamic"; // defaults to auto
import fs from "fs/promises";
import type { NextApiRequest, NextApiResponse } from "next";

export async function POST(response: NextApiResponse, request: NextApiRequest) {
  if (request.method !== "POST") {
    return response.status(405).json({ error: "Method not allowed" });
  }
  const dat = request.body;
  console.log(dat);

  const data = JSON.stringify(dat);
  fs.appendFile(process.cwd() + "/app/data/blogs.json", `Hey there! ${data} \n`);

  return new Response("Success", { status: 200 });
}
