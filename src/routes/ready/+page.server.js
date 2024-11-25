import { getEntireCollection } from '../../db/collections';

export async function load() {
	const questions = await getEntireCollection('questions');
	return {
		data: {
			questions
		}
	};
}
