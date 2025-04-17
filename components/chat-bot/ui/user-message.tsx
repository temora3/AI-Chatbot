"use client";

import React from "react";

interface UserMessageProps {
  message: string;
}

const UserMessage: React.FC<UserMessageProps> = ({ message }) => {
  return (
    <div className="bg-blue-100 p-4 rounded shadow w-fit max-w-md self-end">
      <p className="text-sm text-gray-900">
        <strong>You:</strong> {message}
      </p>
    </div>
  );
};

export default UserMessage;
