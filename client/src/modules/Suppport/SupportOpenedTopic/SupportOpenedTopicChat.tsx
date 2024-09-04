import IconMessageTailLeft from '@/assets/IconMessageTailLeft.svg';
import { ITopicsItem } from '@/modules/Suppport/types';
import { PROFILE } from '@/shared/constants';
import { getShortName } from '@/utils/getShortName';
import IconSpinner from '@/assets/IconSpinner.svg';

interface SupportOpenedTopicChatProps {
    selectedChat: ITopicsItem;
    isLoadingPage: boolean;
}

function SupportOpenedTopicChat({
    selectedChat,
    isLoadingPage,
}: SupportOpenedTopicChatProps) {
    const shortName = getShortName(
        selectedChat.client.name,
        selectedChat.client.surname,
    );

    return (
        <div
            className={`scrollbar flex max-h-[calc(100vh-var(--input-height)-var(--header-height))] flex-col overflow-auto pl-3`}
        >
            {isLoadingPage ? (
                <div className="flex h-[calc(100vh-var(--input-height)-var(--header-height)-1rem)] items-center justify-center">
                    <IconSpinner className="text-white" />
                </div>
            ) : (
                selectedChat.messages.map((message, index) => {
                    const isLastInGroup =
                        index === selectedChat.messages.length - 1 ||
                        selectedChat.messages[index + 1].sender !==
                            message.sender;

                    return (
                        <div
                            key={message.id}
                            className={`flex items-end gap-[0.188rem] ${isLastInGroup ? 'mb-3' : 'mb-1'}`}
                        >
                            <div
                                className={`text-black-0 flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-semibold ${message.sender === PROFILE.CLIENT ? 'bg-blue-3' : 'bg-blue-4'} ${!isLastInGroup ? 'opacity-0' : ''}`}
                            >
                                {shortName}
                            </div>
                            <div className="relative">
                                {isLastInGroup && (
                                    <IconMessageTailLeft
                                        className={`absolute -left-[0.45rem] bottom-0 ${message.sender === PROFILE.CLIENT ? 'text-blue-3' : 'text-blue-4'} `}
                                    />
                                )}
                                <div
                                    className={`${isLastInGroup ? 'rounded-bl-none' : ''} flex min-h-9 max-w-[22.5rem] items-center rounded-[0.25rem] px-3 py-2 text-sm font-normal leading-[1.125rem] ${message.sender === PROFILE.CLIENT ? 'bg-blue-3' : 'bg-blue-4'}`}
                                >
                                    {message.text}
                                </div>
                            </div>
                        </div>
                    );
                })
            )}
        </div>
    );
}

export default SupportOpenedTopicChat;
