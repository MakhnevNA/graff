SELECT
    chats.id,
    json_build_object(
        'name', users.name,
        'surname', users.surname
    ) AS client,
    json_agg(
        json_build_object(
            'id', messages.id,
            'text', messages.text,
            'sender', messages.sender
        ) ORDER BY messages.id
    ) AS messages
FROM chats
JOIN users ON chats.user_id = users.id
LEFT JOIN messages ON messages.chat_id = chats.id
WHERE chats.id = $1
GROUP BY chats.id, users.name, users.surname;
