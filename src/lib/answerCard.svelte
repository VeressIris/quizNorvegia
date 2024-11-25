<svelte:options customElement="answer-card" />

<script>
	let { answer, isCorrect, index, redirectIndex } = $props();

	function givePoints(responseTime) {
		return Math.trunc(Math.min(1000, (1 / responseTime) * 1000000));
	}

	function pickColor() {
		switch (index) {
			case 0:
				return 'bg-red-500 hover:bg-red-600';
			case 1:
				return 'bg-blue-500 hover:bg-blue-600';
			case 2:
				return 'bg-yellow-500 hover:bg-yellow-600';
			case 3:
				return 'bg-green-500 hover:bg-green-600';
			default:
				return 'bg-gray-500 hover:bg-gray-600';
		}
	}

	function dispatch(type) {
		$host().dispatchEvent(new CustomEvent(type));
	}

	function handleClick() {
		const stopTime = new Date();
		const startTime = new Date(localStorage.getItem('startTime'));
		const time = stopTime - startTime;

		if (isCorrect) {
			const score = givePoints(time);
			localStorage.setItem('score', Number(localStorage.getItem('score')) + score);
			console.log(localStorage.getItem('score'));
		}

		window.location = `/quiz/${Number(redirectIndex) + 1}`;
	}

	let color = pickColor();
</script>

<button
	type="button"
	class={`${color} flex max-w-80 items-center justify-center rounded-xl p-6 text-xl font-bold text-white`}
	onclick={handleClick}
	aria-label={answer}
>
	{answer}
</button>
