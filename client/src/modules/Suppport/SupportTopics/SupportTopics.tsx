import SupportTopicsItem from '@/modules/Suppport/SupportTopics/SupportTopicsItem';
import { itemChatMock } from '@/mocks/itemChatMock';
import { ITopicsItem } from '@/modules/Suppport/types';
import IconSpinner from '@/assets/IconSpinner.svg';

interface ISupportTopicsProps {
    selectedChat: ITopicsItem | undefined;
    setSelectedChat: (chat: ITopicsItem) => void;
}

function SupportTopics({ selectedChat, setSelectedChat }: ISupportTopicsProps) {
    const isLoadingPage = false;

    return (
        <div className="border-gray-1 scrollbar ali h-[calc(100vh-var(--header-height))] w-[360px] overflow-y-auto border-r">
            {isLoadingPage ? (
                <div className="flex h-full items-center justify-center">
                    <IconSpinner className="text-blue-2" />
                </div>
            ) : (
                <ul>
                    {itemChatMock.map((chat) => {
                        return (
                            <SupportTopicsItem
                                key={chat.id}
                                chatItem={chat}
                                selectedChat={selectedChat}
                                onSelectChat={setSelectedChat}
                            />
                        );
                    })}
                </ul>
            )}
        </div>
    );
}

export default SupportTopics;
