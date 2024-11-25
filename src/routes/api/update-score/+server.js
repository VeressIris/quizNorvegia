import { updateDocument } from '../../../db/collections.js';

export async function POST({ request }) {
	try {
		const body = await request.json();
		const { username, score } = body;

		if (!username || !score) {
			return new Response(JSON.stringify({ error: 'Invalid input' }), { status: 400 });
		}

		const filter = { name: username };
		const update = { $set: { score: score } };

		const result = await updateDocument('users', filter, update);

		return new Response(JSON.stringify({ success: true, result }), { status: 200 });
	} catch (error) {
		console.error('Error updating document:', error);
		return new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500 });
	}
}
