import ws from 'ws';
import { CustomWebSocket} from './types';
import { WSServerRoutes } from './WSServerRoutes';

export const WSServerInit = () => {

	const WS_PORT = parseInt(process.env.WS_PORT!);
	
	const wss = new ws.Server({
		port: WS_PORT,
	}, () => console.log(`Websocket server started on port ${WS_PORT}`));


	wss.on('connection', (ws: CustomWebSocket, request) => {

	
		const url = new URL(request.url!, `ws://localhost:5000/${request.headers.url}`);

		WSServerRoutes(wss, ws, url)

	})
}