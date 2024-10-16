import express from 'express';
import cors from 'cors';
import router from './src/routes/router';
import { WSServerInit } from './src/services/websocketServer/WSServerInit';

const PORT = parseInt(process.env.PORT!);

const app = express();

WSServerInit();

app
	.use(cors())
	.use(express.json())
	.use('/api', router)
	.listen(PORT, () => console.log(`Server started on port ${PORT}`));
	
