import SupportOpenedTopicChat from '@/modules/Suppport/SupportOpenedTopic/SupportOpenedTopicChat';
import SupportOpenedTopicInput from '@/modules/Suppport/SupportOpenedTopic/SupportOpenedTopicInput';
import { ITopicsItem } from '@/modules/Suppport/types';

interface ISupportOpenedTopicProps {
    selectedChat: ITopicsItem | undefined;
}

function SupportOpenedTopic({ selectedChat }: ISupportOpenedTopicProps) {
    const isLoadingPage = false;

    if (!selectedChat) {
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
            <SupportOpenedTopicInput isLoadingPage={isLoadingPage} />
        </div>
    );
}

export default SupportOpenedTopic;
