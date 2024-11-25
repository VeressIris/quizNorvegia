<script>
	let { answer, isCorrect, index } = $props();

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

	// TODO: change this later
	function handleClick() {
		if (isCorrect) {
			alert('Correct!');
		} else {
			alert('Incorrect!');
		}
	}

	let color = pickColor();
</script>

<button
	type="button"
	class={`${color} flex items-center justify-center rounded-xl p-6 text-xl font-bold text-white`}
	onclick={handleClick}
	aria-label={answer}
>
	{answer}
</button>
