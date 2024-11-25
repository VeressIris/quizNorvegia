import { getDB } from './mongodb.js';

const db = await getDB('test-db');

export async function getEntireCollection(name) {
	const data = await db.collection(name).find({}).toArray();

	return JSON.parse(JSON.stringify(data));
}
