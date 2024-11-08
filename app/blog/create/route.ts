import fs from "fs/promises";
import type { NextApiRequest, NextApiResponse } from "next";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Access the parsed JSON body directly from req.body
  const dat = req.body;
  console.log(dat, " : Received Data");

  const data = JSON.stringify(dat);

  try {
    // Ensure the file appending is done asynchronously with proper error handling
    await fs.appendFile(process.cwd() + "/app/data/blogs.json", `Hey there! ${data} \n`);
    return res.status(200).json({ message: "Data successfully written" });
  } catch (error) {
    console.error("Error writing to file", error);
    return res.status(500).json({ error: "Failed to write data to file" });
  }
}
