import RedisStore from "connect-redis";
import { createClient } from "redis";

// initialize redis session client
const redisSessionClient = createClient({
	socket: {
		host: "redis-sessions",
		port: 6379,
		// todo: protect with passphrase?
	}
})
redisSessionClient.connect().catch(console.error)

const redisSessionStore = new RedisStore({
	client: redisSessionClient,
});

// initialize redis ephemeral client
const redisEphemeralClient = createClient({
	socket: {
		host: "redis-ephemeral",
		port: 6379,
		// todo: protect with passphrase?
	}
});
redisEphemeralClient.connect().catch(console.error);

export {
	redisEphemeralClient,
	redisSessionStore
};
