<script>
	import AnswerCard from '$lib/answerCard.svelte';

	let { data } = $props();

	let answers = [
		{
			answer: 'Answer 1',
			isCorrect: false
		},
		{
			answer: 'Answer 2',
			isCorrect: true
		},
		{
			answer: 'Answer 3',
			isCorrect: false
		},
		{
			answer: 'Answer 4',
			isCorrect: false
		}
	];
</script>

<div class="flex flex-col items-center justify-center">
	<h1 class="text-2xl font-bold">{data.questionID}. Question title</h1>
	<div class="my-8 grid grid-cols-2 grid-rows-2 gap-4">
		{#each answers as answer, index}
			<AnswerCard answer={answer.answer} isCorrect={answer.isCorrect} {index} />
		{/each}
	</div>
	<button
		class="rounded-xl bg-purple-500 px-6 py-2 text-xl font-bold text-white hover:bg-purple-600 active:bg-purple-800"
		onclick={() => {
			window.location = `/quiz/${Number(data.questionID) + 1}`;
		}}>Next</button
	>
</div>
