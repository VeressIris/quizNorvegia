<script>
	import { onMount } from 'svelte';

	let users = [];

	let { data } = $props();

	users = data.data.users;

	users.sort((a, b) => b.score - a.score);

	console.log(users);
</script>

<div class="flex flex-col items-center justify-center">
	<h1 class="mb-8 text-2xl font-bold">Leaderboard</h1>
	<table>
		<thead>
			<tr>
				<th class="border-2 px-7 text-xl">Rank</th>
				<th class="border-2 px-7 text-xl">Nume</th>
				<th class="border-2 px-7 text-xl">Scor</th>
			</tr>
		</thead>
		<thead>
			{#each users as user, i}
				<tr class="text-center">
					<td class="border-2 px-7 text-lg font-medium">{i + 1}.</td>
					<td class="border-2 px-7 text-lg font-medium">{user.name}</td>
					<td class="border-2 px-7 text-lg font-semibold">{user.score}</td>
				</tr>
			{/each}
		</thead>
	</table>
</div>
