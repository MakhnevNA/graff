import IconSpinner from '@/assets/icons/IconSpinner.svg';
import Message from '@/components/message/Message';
import { useEffect, useRef } from 'react';
import { SupportOpenedTopicChatProps } from '@/modules/Suppport/SupportOpenedTopic/types';

function SupportOpenedTopicChat({
    selectedChat,
    isLoadingPage,
}: SupportOpenedTopicChatProps) {
    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (messagesEndRef.current) {
            const chatContainer = messagesEndRef.current;
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }
    }, [selectedChat.messages]);

    return (
        <div
            className={`scrollbar flex max-h-[calc(100vh-var(--input-height)-var(--header-height))] flex-col overflow-auto pl-3`}
            ref={messagesEndRef}
        >
            {isLoadingPage ? (
                <div className="flex h-[calc(100vh-var(--input-height)-var(--header-height)-1rem)] items-center justify-center">
                    <IconSpinner className="text-white" />
                </div>
            ) : (
                <Message selectedChat={selectedChat} />
            )}
        </div>
    );
}

export default SupportOpenedTopicChat;
