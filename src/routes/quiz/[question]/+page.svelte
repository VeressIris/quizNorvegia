<script>
	import AnswerCard from '$lib/answerCard.svelte';
	import { onMount } from 'svelte';

	let { data } = $props();

	let answers = $state([]);
	let currentQuestion = $state({});
	let length = $state(0);
	const startTime = new Date();
	onMount(async () => {
		length = JSON.parse(localStorage.getItem('questions')).length;
		if (data.questionID > length) {
			window.location = `/leaderboard`;

			const response = await fetch('/api/update-score', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					username: localStorage.getItem('username'),
					score: Number(localStorage.getItem('score'))
				})
			});

			if (!response.ok) {
				console.error('Failed to update the score:', await response.text());
			}

			return;
		}

		const questions = JSON.parse(localStorage.getItem('questions'));
		currentQuestion = questions[Number(data.questionID) - 1];
		answers = currentQuestion.answers;

		localStorage.setItem('startTime', startTime);

		if (localStorage.getItem('score') === null) {
			localStorage.setItem('score', 0);
		}
	});
</script>

{#if data.questionID <= length}
	<div class="flex flex-col items-center justify-center">
		<h1 class="text-2xl font-bold">{data.questionID}. {currentQuestion.title}</h1>
		<div class="my-8 grid grid-cols-2 grid-rows-2 gap-4">
			{#each answers as answer, index}
				<AnswerCard
					answer={answer.text}
					isCorrect={answer.isCorrect}
					{index}
					redirectIndex={data.questionID}
				/>
			{/each}
		</div>
		<button
			class="rounded-xl bg-purple-500 px-6 py-2 text-xl font-bold text-white hover:bg-purple-600 active:bg-purple-800"
			onclick={() => {
				window.location = `/quiz/${Number(data.questionID) + 1}`;
			}}>Next</button
		>
	</div>
{/if}
