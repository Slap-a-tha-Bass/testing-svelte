<script>
	import Episodes from './Episodes.svelte';
	import './styles.css';
	export let data;
	$: ({ all_episodes } = data);
</script>

<header>
	<h1>Header</h1>
	<nav>
		<a href="/">Home</a>
		<a href="/about">About</a>
	</nav>
</header>

<main>
	<div class="main">
		<slot />
	</div>
	<aside>
		<Episodes episodes={all_episodes} />
	</aside>
</main>

<footer>
	<a href="/contact">Contact</a>
	<h2>Footer</h2>
</footer>

<style>
	main {
		display: grid;
		grid-template-columns: 300px 1fr;
		gap: 2rem;
	}
	aside {
		order: -1;
	}
</style>
