import SupportOpenedTopic from '@/modules/Suppport/SupportOpenedTopic/SupportOpenedTopic';
import SupportTopics from '@/modules/Suppport/SupportTopics/SupportTopics';
import { ITopicsItem } from '@/modules/Suppport/types';
import { useState } from 'react';

function SupportBody() {
    const [selectedChat, setSelectedChat] = useState<ITopicsItem>();

    return (
        <div className="flex">
            <SupportTopics
                selectedChat={selectedChat}
                setSelectedChat={setSelectedChat}
            />
            <SupportOpenedTopic selectedChat={selectedChat} />
        </div>
    );
}

export default SupportBody;
