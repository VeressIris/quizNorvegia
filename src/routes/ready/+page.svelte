<script>
	import { onMount } from 'svelte';

	let { data } = $props();

	const questions = data.data.questions;

	onMount(() => {
		console.log(localStorage.getItem('username'));
		console.log(JSON.parse(localStorage.getItem('questions')));

		if (localStorage.getItem('questions')) {
			return;
		}
		localStorage.setItem('questions', JSON.stringify(questions));
		// JSON.parse(localStorage.getItem('questions'));
	});
</script>

<div class="flex flex-col items-center justify-center">
	<h1 class="mb-3 text-3xl font-bold">Ești pregătit(ă)?</h1>
	<p class="text-lg">Apasă butonul de mai jos pentru a începe quiz-ul.</p>
	<a
		class="mt-4 rounded-lg bg-green-600 px-4 py-2 text-xl font-bold text-white hover:bg-green-700 active:bg-green-800"
		href="/quiz/1">ÎNCEPE</a
	>
</div>
