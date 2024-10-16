import SupportOpenedTopicChat from '@/modules/Suppport/SupportOpenedTopic/components/SupportOpenedTopicChat';
import SupportOpenedTopicInput from '@/modules/Suppport/SupportOpenedTopic/components/SupportOpenedTopicInput';
import { ISupportOpenedTopicCommon } from '@/modules/Suppport/SupportOpenedTopic/types';

function SupportOpenedTopic({
    connectionForChat,
    selectedChat,
    connectionForAllChats,
}: ISupportOpenedTopicCommon) {
    const isLoadingPage = false;

    if (!selectedChat?.id) {
        return (
            <div className="bg-gray-2 normal flex flex-1 items-center justify-center text-2xl font-medium">
                Выберите чат, чтобы начать общение
            </div>
        );
    }

    return (
        <div className="bg-gray-2 flex flex-1 flex-col justify-end">
            <SupportOpenedTopicChat
                selectedChat={selectedChat}
                isLoadingPage={isLoadingPage}
            />
            <SupportOpenedTopicInput
                isLoadingPage={isLoadingPage}
                connectionForChat={connectionForChat}
                selectedChat={selectedChat}
                connectionForAllChats={connectionForAllChats}
            />
        </div>
    );
}

export default SupportOpenedTopic;
