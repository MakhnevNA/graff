// import { motion, AnimatePresence } from 'framer-motion';
import SupportTopicsItem from '@/modules/Suppport/SupportTopics/components/SupportTopicsItem';
import IconSpinner from '@/assets/icons/IconSpinner.svg';
import { ISupportTopicsProps } from '@/modules/Suppport/SupportTopics/types';

function SupportTopics({
    connectionForChat,
    getMessageFromWS,
    allChats,
    selectedChat,
    isLoadingPage,
}: ISupportTopicsProps) {
    // TODO: анимацию на перемещению чата добавить

    return (
        <div className="border-gray-1 scrollbar h-[calc(100vh-var(--header-height))] w-[360px] overflow-y-auto border-r">
            {isLoadingPage ? (
                <div className="flex h-full items-center justify-center">
                    <IconSpinner className="text-blue-2" />
                </div>
            ) : (
                <ul>
                    {allChats
                        ?.sort((a, b) => +b.messages[0].id - +a.messages[0].id)
                        .map((chat) => {
                            return (
                                <SupportTopicsItem
                                    key={chat.id}
                                    chatItem={chat}
                                    connectionForChat={connectionForChat}
                                    getMessageFromWS={getMessageFromWS}
                                    selectedChat={selectedChat}
                                />
                            );
                        })}
                </ul>
            )}
        </div>
    );
}

export default SupportTopics;
