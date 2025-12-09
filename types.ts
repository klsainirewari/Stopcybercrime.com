export enum MessageRole {
    USER = 'user',
    MODEL = 'model'
}

export interface ChatMessage {
    role: MessageRole;
    text: string;
    timestamp: Date;
    isError?: boolean;
}

export interface FraudType {
    id: string;
    title: string;
    description: string;
    prevention: string;
    icon: 'qr' | 'screen' | 'video' | 'alert';
}

export interface SafetyTip {
    id: string;
    title: string;
    content: string[];
    icon: 'lock' | 'shield' | 'link';
}

export type Language = 'hi' | 'en' | 'pa';
