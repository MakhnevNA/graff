import ChatControllers from "../../core/chats/chatControllers";
import { CustomWebSocket, TWssType, WS_ROUTES } from "./types";
import WebSocketRouter from "./WSServerManager";


export const WSServerRoutes = (wss: TWssType, ws: CustomWebSocket, url: URL) => {
	
	const wsRouter = new WebSocketRouter();
	const chatCont = new ChatControllers(wss, ws);
	
	wsRouter.registerRoute(WS_ROUTES.allChats, () => chatCont.getAllChats());
	wsRouter.registerRoute(WS_ROUTES.chat, () => chatCont.getChat());
	
				
	wsRouter.handleRequest(ws, url.pathname)
}


