import { GoogleGenAI } from "@google/genai";
import { MessageRole, ChatMessage, Language } from "../types";

// Initialize Gemini Client
// The API key must be obtained exclusively from the environment variable process.env.API_KEY.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are 'Cyber Sahayak', an expert AI cybersecurity volunteer for the 'Cyber Rakshak' platform.
Your goal is to help Indian users stay safe from cybercrimes.
1. Answer strictly in the user's requested language. If the user asks in Hindi, reply in Hindi. If in Punjabi, reply in Punjabi. If in English, reply in English.
2. Be concise, empathetic, and actionable.
3. If a user reports a crime, immediately guide them to dial 1930 or visit cybercrime.gov.in.
4. Do not provide legal advice, but provide safety guidelines.
5. Topics: UPI fraud, Sextortion, Investment scams, Password safety, Digital Arrest, etc.
`;

export const getGeminiResponse = async (
    history: ChatMessage[], 
    newMessage: string,
    language: Language
): Promise<string> => {
    try {
        const model = 'gemini-2.5-flash';
        
        let prompt = newMessage;
        if (language === 'hi') {
            prompt = `(Please reply in Hindi) ${newMessage}`;
        } else if (language === 'pa') {
            prompt = `(Please reply in Punjabi) ${newMessage}`;
        } else {
            prompt = `(Please reply in English) ${newMessage}`;
        }

        const response = await ai.models.generateContent({
            model: model,
            contents: prompt,
            config: {
                systemInstruction: SYSTEM_INSTRUCTION,
                temperature: 0.7,
            }
        });

        return response.text || "माफ़ करें, मैं अभी उत्तर देने में असमर्थ हूँ। कृपया बाद में प्रयास करें।";
    } catch (error) {
        console.error("Gemini API Error:", error);
        throw new Error("AI सेवा में त्रुटि। कृपया इंटरनेट कनेक्शन की जाँच करें।");
    }
};