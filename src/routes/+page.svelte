<script>
	import { onMount } from 'svelte';
	import { capitalizeFirstLetter } from '../utils';

	let nume = '';
	let prenume = '';

	onMount(() => {
		localStorage.clear();
	});
</script>

<div class="flex flex-col items-center justify-center">
	<h1 class="mb-8 text-2xl font-bold">Introdu numele pentru a intra în joc</h1>
	<form method="POST" class="flex flex-col items-center justify-center">
		<label for="nume" class="mb-1 block text-lg font-medium text-gray-900"
			>Nume

			<input
				type="text"
				id="nume"
				name="nume"
				required
				bind:value={nume}
				class="text-md block h-8 w-36 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
			/>
		</label>
		<label for="prenume" class="mb-1 block text-lg font-medium text-gray-900"
			>Prenume

			<input
				type="text"
				id="prenume"
				name="prenume"
				required
				bind:value={prenume}
				class="text-md block h-8 w-36 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
			/>
		</label>
		<button
			type="submit"
			onclick={() => {
				console.log(nume, prenume);
				localStorage.setItem(
					'username',
					capitalizeFirstLetter(nume) + ' ' + capitalizeFirstLetter(prenume)
				);
			}}
			class="mt-6 rounded-md bg-green-600 px-2 py-1 font-bold text-white hover:bg-green-700 active:bg-green-800"
			>Intră în joc</button
		>
	</form>
</div>
