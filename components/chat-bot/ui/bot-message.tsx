"use client";

import React from "react";

interface BotMessageProps {
  message: string;
}

const BotMessage: React.FC<BotMessageProps> = ({ message }) => {
  return (
    <div className="bg-white p-4 rounded shadow w-fit max-w-md">
      <p className="text-sm text-gray-800">
        <strong>Bot:</strong> {message}
      </p>
    </div>
  );
};

export default BotMessage;
