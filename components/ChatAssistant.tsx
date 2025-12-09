import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Loader2 } from 'lucide-react';
import { getGeminiResponse } from '../services/geminiService';
import { ChatMessage, MessageRole } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

const ChatAssistant: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { language, t } = useLanguage();
    
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Initialize messages when language changes or on first load
    useEffect(() => {
        setMessages([
            {
                role: MessageRole.MODEL,
                text: t.chat.initialMessage,
                timestamp: new Date()
            }
        ]);
    }, [language, t.chat.initialMessage]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;

        const userMsg: ChatMessage = {
            role: MessageRole.USER,
            text: input.trim(),
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsLoading(true);

        try {
            // Pass the current message, history, and current language to the service
            const responseText = await getGeminiResponse(messages, userMsg.text, language);
            
            const botMsg: ChatMessage = {
                role: MessageRole.MODEL,
                text: responseText,
                timestamp: new Date()
            };
            setMessages(prev => [...prev, botMsg]);
        } catch (error) {
            const errorMsg: ChatMessage = {
                role: MessageRole.MODEL,
                text: t.chat.error,
                timestamp: new Date(),
                isError: true
            };
            setMessages(prev => [...prev, errorMsg]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <>
            {/* Floating Action Button */}
            <button
                onClick={() => setIsOpen(true)}
                className={`fixed bottom-6 right-6 z-40 bg-brand-blue text-white p-4 rounded-full shadow-2xl hover:bg-blue-800 transition-all transform hover:scale-110 ${isOpen ? 'hidden' : 'flex'}`}
                aria-label="Chat with Cyber Sahayak"
            >
                <MessageSquare size={28} />
                <span className="absolute -top-2 -right-2 flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-yellow opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-brand-yellow"></span>
                </span>
            </button>

            {/* Chat Modal */}
            {isOpen && (
                <div className="fixed bottom-0 right-0 sm:bottom-6 sm:right-6 z-50 w-full sm:w-[400px] h-[500px] sm:h-[600px] bg-white sm:rounded-2xl shadow-2xl flex flex-col border border-slate-200 overflow-hidden font-sans">
                    {/* Header */}
                    <div className="bg-brand-blue p-4 flex justify-between items-center text-white shrink-0">
                        <div className="flex items-center gap-2">
                            <div className="bg-white/20 p-1.5 rounded-full">
                                <Bot size={20} />
                            </div>
                            <div>
                                <h3 className="font-bold">Cyber Sahayak</h3>
                                <p className="text-xs text-blue-200">AI Safety Assistant</p>
                            </div>
                        </div>
                        <button 
                            onClick={() => setIsOpen(false)}
                            className="hover:bg-white/20 p-1 rounded transition"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 overflow-y-auto p-4 bg-slate-50 space-y-4">
                        {messages.map((msg, index) => (
                            <div 
                                key={index} 
                                className={`flex ${msg.role === MessageRole.USER ? 'justify-end' : 'justify-start'}`}
                            >
                                <div 
                                    className={`max-w-[85%] rounded-2xl p-3 shadow-sm ${
                                        msg.role === MessageRole.USER 
                                            ? 'bg-brand-blue text-white rounded-br-none' 
                                            : msg.isError 
                                                ? 'bg-red-100 text-red-800 border border-red-200 rounded-bl-none'
                                                : 'bg-white text-slate-800 border border-slate-200 rounded-bl-none'
                                    }`}
                                >
                                    <p className="text-sm whitespace-pre-wrap leading-relaxed">{msg.text}</p>
                                    <p className={`text-[10px] mt-1 text-right ${msg.role === MessageRole.USER ? 'text-blue-200' : 'text-slate-400'}`}>
                                        {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                    </p>
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="bg-white border border-slate-200 rounded-2xl rounded-bl-none p-4 shadow-sm">
                                    <div className="flex gap-1">
                                        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                                        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-75"></div>
                                        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-150"></div>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <div className="p-4 bg-white border-t border-slate-200 shrink-0">
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleKeyPress}
                                placeholder={t.chat.placeholder}
                                disabled={isLoading}
                                className="flex-1 border border-slate-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent text-sm"
                            />
                            <button
                                onClick={handleSend}
                                disabled={!input.trim() || isLoading}
                                className="bg-brand-blue text-white p-2.5 rounded-full hover:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition"
                            >
                                {isLoading ? <Loader2 size={20} className="animate-spin" /> : <Send size={20} />}
                            </button>
                        </div>
                        <p className="text-[10px] text-center text-slate-400 mt-2">
                            {t.chat.disclaimer}
                        </p>
                    </div>
                </div>
            )}
        </>
    );
};

export default ChatAssistant;