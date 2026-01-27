
import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { PROJECTS, INTERESTS, SKILLS, USER_NAME, USER_ROLE, USER_BIO } from '../constants';

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

// Format context data for the prompt
const projectContext = PROJECTS.map(p => `- ${p.title}: ${p.description} (Tech: ${p.tags.join(', ')})`).join('\n');
const interestContext = INTERESTS.map(i => i.label).join(', ');
const skillsContext = SKILLS.map(s => `${s.category}: ${s.items.join(', ')}`).join('\n');

const SYSTEM_INSTRUCTION = `
You are an AI assistant embedded in ${USER_NAME}'s portfolio website. 
${USER_NAME} is a ${USER_ROLE}.
About ${USER_NAME}: ${USER_BIO}

Here is a list of ${USER_NAME}'s projects that you can discuss:
${projectContext}

Here are ${USER_NAME}'s technical skills:
${skillsContext}

Here are ${USER_NAME}'s personal interests:
${interestContext}

Your primary goals are:
1. Represent ${USER_NAME} professionally and answer questions about their work, skills, projects, and interests based STRICTLY on the information provided above.
2. If asked about something not in the provided information, politely state that you don't have that information.
3. Keep responses concise, friendly, and helpful. 
4. Do not make up facts about projects that are not listed.
5. **Format your responses using Markdown.** Use bold text for emphasis (e.g., project titles, key skills), bullet points for lists, and code blocks if sharing code snippets. This makes the text easier to read in a chat interface.
`;

let chatSession: Chat | null = null;

export const initializeChat = () => {
  chatSession = ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
    }
  });
  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<{ text: string }> => {
  if (!chatSession) {
    initializeChat();
  }

  if (!chatSession) throw new Error("Failed to initialize chat");

  try {
    const response = await chatSession.sendMessage({ message });
    return { text: response.text || "" };
  } catch (error) {
    console.error("Gemini Error:", error);
    return { text: "I'm having trouble connecting right now. Please try again later." };
  }
};

export const streamMessageToGemini = async function* (message: string) {
  if (!chatSession) {
    initializeChat();
  }

  if (!chatSession) throw new Error("Failed to initialize chat");

  const result = await chatSession.sendMessageStream({ message });
  
  for await (const chunk of result) {
    const c = chunk as GenerateContentResponse;
    const text = c.text;
    if (text) {
      yield text;
    }
  }
};
