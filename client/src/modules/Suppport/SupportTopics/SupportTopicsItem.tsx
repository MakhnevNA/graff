import { ITopicsItem } from '@/modules/Suppport/types';
import { getShortName } from '@/utils/getShortName';

interface ISupportTopicsItemProps {
    chatItem: ITopicsItem;
    selectedChat: ITopicsItem | undefined;
    onSelectChat: (chat: ITopicsItem) => void;
}

function SupportTopicsItem({
    chatItem,
    selectedChat,
    onSelectChat,
}: ISupportTopicsItemProps) {
    const shortName = getShortName(
        chatItem.client.name,
        chatItem.client.surname,
    );

    const handleSelectChat = (chat: ITopicsItem) => {
        onSelectChat(chat);
    };

    return (
        <li className="h-16">
            <button
                className={`flex w-full items-stretch gap-2 p-3 outline-none transition-colors duration-200 ${selectedChat?.id === chatItem.id ? 'bg-blue-3' : 'hover:bg-gray-1'}`}
                onClick={() => handleSelectChat(chatItem)}
            >
                <div className="bg-gray-4 text-black-0 flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold">
                    {shortName}
                </div>
                <div className="text-left">
                    <span className="text-sm font-semibold leading-3">
                        {chatItem.client.name} {chatItem.client.surname}
                    </span>
                    <p className="text-gray-3 max-w-[280px] overflow-hidden text-ellipsis whitespace-nowrap text-sm leading-3">
                        {chatItem.messages[chatItem.messages.length - 1].text}
                    </p>
                </div>
            </button>
        </li>
    );
}

export default SupportTopicsItem;
