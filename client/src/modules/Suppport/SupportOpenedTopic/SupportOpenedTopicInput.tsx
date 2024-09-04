import { useState } from 'react';
import IconSend from '@/assets/IconSend.svg';

interface ISupportOpenedTopicInputProps {
    isLoadingPage: boolean;
}

function SupportOpenedTopicInput({
    isLoadingPage,
}: ISupportOpenedTopicInputProps) {
    const [message, setMessage] = useState('');

    const handleSendMessage = () => {
        if (!message || isLoadingPage) return;
        console.log(message);
        setMessage('');
    };

    return (
        <div className="relative">
            <input
                className="h-12 w-full py-3 pl-4 pr-10 outline-none"
                placeholder="Написать сообщение..."
                disabled={isLoadingPage}
                value={message}
                onInput={(e) => setMessage(e.currentTarget.value)}
            />
            <button
                className={`absolute right-3 top-4 h-4 w-4 outline-none ${message ? 'text-blue-1' : 'text-gray-2'}`}
                disabled={!message || isLoadingPage}
                onClick={handleSendMessage}
            >
                <IconSend />
            </button>
        </div>
    );
}

export default SupportOpenedTopicInput;
