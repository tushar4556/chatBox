
import {useRef} from "react";

interface MessageInputProps {
  onSend: (message: string) => void;
}

export default function MessageInput({ onSend }: MessageInputProps) {

  const inputRef = useRef(null);

  const handleSend = () => {
    //@ts-ignore
    const value = inputRef.current.value;
    if (value) {
      onSend(value);
      //@ts-ignore
      if (inputRef.current) inputRef.current.value = "";
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="flex p-2 bg-gray-800">
      <input
        className="flex-1 p-2 rounded-l bg-gray-700 text-white outline-none"
        type="text"
        placeholder="Type your message..."
        ref={inputRef}
        onKeyDown={handleKeyDown}
      />
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-700"
        onClick={handleSend}
        disabled={!inputRef.current || !inputRef.current.value.trim()}
        type="button"
      >
        Send
      </button>
    </div>
  );
}