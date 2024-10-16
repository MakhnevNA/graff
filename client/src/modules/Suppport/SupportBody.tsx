import { useEffect, useState, memo, useCallback } from 'react';
import SupportOpenedTopic from '@/modules/Suppport/SupportOpenedTopic/components/SupportOpenedTopic';
import SupportTopics from '@/modules/Suppport/SupportTopics/components/SupportTopics';
import { IMessages, ITopicsItem } from '@/modules/Suppport/types';
import { isITopicItem } from '@/utils/typeGuard/isITopicItem';
import {
    connectionForAllChats,
    connectionForChat,
} from '@/core/services/webSocketService/WebSocketService';
import { MessageType } from '@/modules/Suppport/SupportOpenedTopic/types';

const SupportBody = () => {
    const [selectedChat, setSelectedChat] = useState<ITopicsItem>();
    const [allChats, setAllChats] = useState<ITopicsItem[]>();
    const [isLoadingPage, setLoadingPage] = useState(true);

    const getMessageFromWS = useCallback((message: ITopicsItem | IMessages) => {
        setSelectedChat((prevChat) => {
            if (isITopicItem(message)) {
                return message;
            }

            const { chat_id, ...newMessage } = message;

            if (prevChat && !prevChat?.messages?.length) {
                return {
                    ...prevChat,
                    messages: [newMessage],
                };
            }

            if (prevChat && prevChat.messages?.length) {
                return {
                    ...prevChat,
                    messages: [...prevChat.messages, newMessage],
                };
            }
        });

        if (!isITopicItem(message)) {
            setAllChats((prevChats) => {
                return prevChats?.map((chat) =>
                    chat.id === message?.chat_id
                        ? {
                              ...chat,
                              messages: [
                                  {
                                      id: message.chat_id,
                                      text: message.text,
                                      sender: message.sender,
                                  },
                              ],
                          }
                        : chat,
                );
            });
        }

        // setSelectedChat((prev) => {
        //     // при выборе чата мы получаем все данные о чате
        //     if (isITopicItem(message)) {
        //         return message;
        //     }

        //     // если есть чат, но в нем нет сообщений, то отправленное сообщение будет первым и единственным
        //     if (prev && !prev?.messages?.length) {
        //         return {
        //             ...prev,
        //             messages: [message],
        //         };
        //     }

        //     // если есть чат и в нем уже есть сообщения
        //     if (prev && prev.messages?.length) {
        //         return {
        //             ...prev,
        //             // messages: [...prev.messages, message],
        //         };
        //     }
        // });

        // if (!isITopicItem(message)) {
        //     setAllChats((prevChats) => {
        //         return prevChats?.map((chat) =>
        //             chat.id === message?.chatId
        //                 ? {
        //                       ...chat,
        //                       messages: [
        //                           {
        //                               id: message.chatId,
        //                               text: message.text,
        //                               sender: message.sender,
        //                           },
        //                       ],
        //                   }
        //                 : chat,
        //         );
        //     });
        // }
    }, []);

    useEffect(() => {
        connectionForAllChats.setConnection(
            { type: MessageType.CONNECTION },
            (message) => {
                setAllChats(message);
                setLoadingPage(false);
            },
        );

        return () => {
            connectionForAllChats.closeConnection();
        };
    }, []);

    return (
        <div className="flex">
            <SupportTopics
                connectionForChat={connectionForChat}
                getMessageFromWS={getMessageFromWS}
                allChats={allChats}
                selectedChat={selectedChat}
                isLoadingPage={isLoadingPage}
            />
            <SupportOpenedTopic
                connectionForChat={connectionForChat}
                selectedChat={selectedChat}
                connectionForAllChats={connectionForAllChats}
            />
        </div>
    );
};

export default memo(SupportBody);
