SELECT
    chats.id,
    json_build_object(
        'name', users.name,
        'surname', users.surname
    ) AS client,
    jsonb_build_array(
        json_build_object(
            'id', last_message.id,
            'text', last_message.text,
            'sender', last_message.sender
        )
    ) AS messages
FROM chats
JOIN users ON chats.user_id = users.id
LEFT JOIN (
    SELECT DISTINCT ON (messages.chat_id)
        messages.id,
        messages.text,
        messages.sender,
        messages.chat_id
    FROM messages
    ORDER BY messages.chat_id, messages.id DESC
) AS last_message ON last_message.chat_id = chats.id
ORDER BY last_message.id DESC;
