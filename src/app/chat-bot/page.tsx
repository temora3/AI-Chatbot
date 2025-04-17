"use client";
import { useState, useEffect, useRef } from "react";
import BotMessage from "../../../components/chat-bot/ui/bot-message";
import ChatInput from "../../../components/chat-bot/ui/chat-input";
import UserMessage from "../../../components/chat-bot/ui/user-message";

interface ChatMessage {
  role: "user" | "bot";
  text: string;
}

export default function ChatBot() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const chatContainerRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    if (!chatContainerRef.current) return;
    const container = chatContainerRef.current;
    container.style.scrollBehavior = 'smooth';
    if (container.scrollHeight > container.clientHeight) {
      requestAnimationFrame(() => {
        container.scrollTop = container.scrollHeight;
      });
    }
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.style.scrollBehavior = 'auto';
      scrollToBottom();
    }
  }, []); 
  useEffect(() => {
    scrollToBottom();
  
    const timeoutId = setTimeout(() => {
      if (chatContainerRef.current) {
        chatContainerRef.current.style.scrollBehavior = 'auto';
      }
    }, 500); 
    
    return () => clearTimeout(timeoutId);
  }, [messages, isLoading]);

  const handleSendMessage = async (userText: string) => {
    if (!userText.trim()) return;

    setMessages((prev) => [...prev, { role: "user", text: userText }]);
    setIsLoading(true);

    try {
      const response = await fetch("https://hot-water-bot-398579054211.us-central1.run.app/run", {
        method: "POST",
        mode: "cors",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          app_name: "SWH",
          user_id: "user_123",
          session_id: "session_abc",
          new_message: {
            role: "user",
            parts: [{ text: userText }],
          },
        }),
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      const botReply = data[0]?.content?.parts?.[0]?.text || "No response.";
      setMessages((prev) => [...prev, { role: "bot", text: botReply }]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "Sorry, something went wrong. Please try again later." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-screen h-screen bg-gray-100 flex flex-col pt-20">
      {/* Header */}
      <div className="bg-blue-600 text-white px-6 py-4 shadow-md">
        <h2 className="text-2xl font-semibold">
          Davis & Shirtliff AI Solar Hot Water Assistant
        </h2>
      </div>

      {/* Chat window */}
      <div
        className="flex-1 overflow-y-auto p-6 space-y-4 scroll-pt-4"
        ref={chatContainerRef}
      >
        {messages.length === 0 && (
          <div className="text-center text-gray-500 py-10">
            Send a message to start the conversation
          </div>
        )}
        {messages.map((msg, index) =>
          msg.role === "user" ? (
            <UserMessage key={index} message={msg.text} />
          ) : (
            <BotMessage key={index} message={msg.text} />
          )
        )}
        {isLoading && (
          <div className="flex items-center text-gray-500">
            <div className="animate-pulse">Thinking...</div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      {/* Input */}
      <ChatInput onSend={handleSendMessage} />
    </div>
  );
}