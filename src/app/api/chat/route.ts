import { streamText,Message } from 'ai';
import {createGoogleGenerativeAI} from "@ai-sdk/google"
const google = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
})
export const runtime = "edge"

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: google('gpt-4o'),
    messages,
  });

  return result.toDataStreamResponse();
}