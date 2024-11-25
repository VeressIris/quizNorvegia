<script>
	import '../app.css';
	let { children } = $props();
</script>

<div class="mx-6 my-12">
	{@render children()}
</div>
