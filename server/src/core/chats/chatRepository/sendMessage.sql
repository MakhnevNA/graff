INSERT INTO messages (chat_id, text, sender)
VALUES ($1, $2, $3)
RETURNING *
