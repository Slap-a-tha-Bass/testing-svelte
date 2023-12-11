<script>
	import Test from '$lib/Test.svelte';
	import '$db/start';
	export let data;
	$: ({ latest_episode } = data);
</script>

<h1>{latest_episode.title}</h1>

<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<Test />
