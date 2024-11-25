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
	<h1 class="mb-8 text-2xl font-bold">{data.questionID}. Question title</h1>
	<div class="grid grid-cols-2 grid-rows-2 gap-4">
		{#each answers as answer, index}
			<AnswerCard answer={answer.answer} isCorrect={answer.isCorrect} {index} />
		{/each}
	</div>
</div>
