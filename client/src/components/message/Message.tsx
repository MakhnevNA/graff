import IconMessageTailLeft from '@/assets/icons/IconMessageTailLeft.svg';
import { PROFILE } from '@/shared/constants';
import { getShortName } from '@/utils/getShortName';
import { IMessageProps } from '@/components/message/types';

const Message = ({ selectedChat, messageSize = 'big' }: IMessageProps) => {
    const shortName = getShortName(
        selectedChat.client?.name,
        selectedChat.client?.surname,
    );

    return selectedChat.messages?.map((message, index) => {
        const isLastInGroup =
            index === selectedChat.messages.length - 1 ||
            selectedChat.messages[index + 1]?.sender !== message.sender;

        const isClientSender = message.sender === PROFILE.CLIENT;

        // console.log('111');
        // TODO: часто перерисовывается компонент
        return (
            <div
                key={message.id}
                className={`${isLastInGroup ? 'mb-3' : 'mb-1'} flex items-end gap-[0.188rem]`}
            >
                <div
                    className={`${isClientSender ? 'bg-blue-3' : 'bg-blue-4'} ${isLastInGroup ? '' : 'opacity-0'} text-black-0 flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-semibold`}
                >
                    {isClientSender ? shortName : 'AA'}
                </div>
                <div className="relative">
                    {isLastInGroup && (
                        <IconMessageTailLeft
                            className={`${isClientSender ? 'text-blue-3' : 'text-blue-4'} absolute -left-[0.45rem] bottom-0`}
                        />
                    )}
                    <div
                        className={`${isLastInGroup ? 'rounded-bl-none' : ''} ${messageSize === 'big' ? 'max-w-[22.5rem]' : 'max-w-[18.75rem]'} ${isClientSender ? 'bg-blue-3' : 'bg-blue-4'} flex min-h-9 items-center break-all rounded-[0.25rem] px-3 py-2 text-sm font-normal leading-[1.125rem]`}
                    >
                        {message.text}
                    </div>
                </div>
            </div>
        );
    });
};

export default Message;
