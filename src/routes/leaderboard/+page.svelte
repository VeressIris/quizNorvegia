<script>
	let users = [
		{
			name: 'Alin Ancuta',
			score: 100
		},
		{
			name: 'Maranescu Vlad',
			score: 400
		},
		{
			name: 'Varga Toma',
			score: 800
		},
		{
			name: 'Gheorgiu Silvia',
			score: 500
		},
		{
			name: 'Andreas munteanu',
			score: 200
		}
	];

	users.sort((a, b) => b.score - a.score);
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
