import { useState } from 'react';
import IconSend from '@/assets/icons/IconSend.svg';
import { PROFILE } from '@/shared/constants';
import {
    IMessage,
    ISupportOpenedTopicInput,
    MessageType,
} from '@/modules/Suppport/SupportOpenedTopic/types';

function SupportOpenedTopicInput({
    isLoadingPage,
    connectionForChat,
    selectedChat,
    connectionForAllChats,
}: ISupportOpenedTopicInput) {
    const [message, setMessage] = useState('');
    const [profile, setProfile] = useState<PROFILE>(PROFILE.CLIENT);

    const sendMessage = () => {
        if (isLoadingPage || message.trim().length < 1) return;

        const messageItem: IMessage = {
            chatId: selectedChat?.id,
            sender: profile,
            text: message,
            type: MessageType.MESSAGE,
        };

        connectionForChat.sendMessage(messageItem);
        connectionForAllChats.sendMessage({ type: MessageType.MESSAGE });
        setMessage('');
    };

    const handleClick = () => {
        sendMessage();
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') sendMessage();
    };

    return (
        <div className="relative">
            <input
                className="h-12 w-full py-3 pl-4 pr-48 outline-none"
                placeholder="Написать сообщение..."
                disabled={isLoadingPage}
                value={message}
                onInput={(e) => setMessage(e.currentTarget.value)}
                onKeyDown={handleKeyDown}
            />
            <select
                value={profile}
                className="bg-blue-3 absolute right-16 h-12 outline-none"
                onChange={(e) => setProfile(e.target.value as PROFILE)}
            >
                <option value={PROFILE.CLIENT}>{PROFILE.CLIENT}</option>
                <option value={PROFILE.MANAGER}>{PROFILE.MANAGER}</option>
            </select>
            <button
                className={`absolute right-3 top-4 h-4 w-4 outline-none ${message.trim().length >= 1 ? 'text-blue-1' : 'text-gray-2'}`}
                disabled={message.trim().length < 1 || isLoadingPage}
                onClick={handleClick}
            >
                <IconSend />
            </button>
        </div>
    );
}

export default SupportOpenedTopicInput;
