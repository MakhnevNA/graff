import express from 'express';
import router from './src/routes/router';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT;

const app = express();

app
	.use('/api', router)
	.listen(PORT, () => console.log(`Server started on port ${PORT}`));
