// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path';

type Data = {
  message: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    // Check if the request method is valid
    if (req.method !== "POST") {
      return res.status(405).json({
        message: "Method not allowed"
      });
    }

    // Ensure that the request body is a binary audio file
    if (req.headers["content-type"] !== "audio/webm") {
      return res.status(415).json({
        message: "Unsupported media type"
      });
    }

    // Create a local directory to store the audio file
    const uploadDir = path.join(__dirname, "uploads");
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
    }

    // Save the audio file to the local repository
    const audioFile = path.join(uploadDir, `audio-${Date.now()}.webm`);
    fs.writeFileSync(audioFile, req.body);

    console.log(`New audio file saved at ${audioFile}`);
    // Return a success response
    return res.status(200).json({
      message: "Audio file saved successfully"
    });
  } catch (error: any) {
    // Return an error response
    return res.status(500).json({
      message: error.message
    })
  }
}
