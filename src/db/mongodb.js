import { MONGO_PASSWORD } from '$env/static/private';
import { MONGO_USER } from '$env/static/private';
import { MongoClient } from 'mongodb';

const MONGO_URI = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@cluster0.rowjk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(MONGO_URI);

export async function connect() {
	await client.connect();
}

export async function getDB(name) {
	return client.db(name);
}

export async function disconnect() {
	await client.close();
}
