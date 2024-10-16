import { CustomWebSocket } from "./types";

class WSServerManager {
	private routes: Map<string, () => void> = new Map();

    registerRoute(path: string, handler: () => void) {
        this.routes.set(path, handler);
    }

    handleRequest(ws: CustomWebSocket, path: string) {
		
		const routeHandler = this.routes.get(path);
		
		if (!routeHandler) {
			const reasonForClosure = JSON.stringify({type: 'error', message: 'Соединение разорвано по причине: "неверный url"'})
			ws.close(1008, reasonForClosure)
			return 
		}

		routeHandler();
		
    }
}

export default WSServerManager;
