<script>
	import AnswerCard from '$lib/answerCard.svelte';
	import { onMount } from 'svelte';

	let { data } = $props();

	let answers = $state([]);
	let currentQuestion = $state({});

	onMount(() => {
		const questions = JSON.parse(localStorage.getItem('questions'));
		currentQuestion = questions[Number(data.questionID) - 1];
		answers = currentQuestion.answers;
	});
</script>

{#if answers.length > 0}
	<div class="flex flex-col items-center justify-center">
		<h1 class="text-2xl font-bold">{data.questionID}. {currentQuestion.title}</h1>
		<div class="my-8 grid grid-cols-2 grid-rows-2 gap-4">
			{#each answers as answer, index}
				<AnswerCard answer={answer.text} isCorrect={answer.isCorrect} {index} />
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
