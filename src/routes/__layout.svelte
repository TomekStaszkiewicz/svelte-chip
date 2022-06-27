<script lang="ts">
	import '../app.css';
	import Rwd from './_components/RWD.svelte';
	import Icon from '@iconify/svelte';

</script>
<Rwd>
	<nav slot="xl">
		<a href="/">Home</a>
		<a href="examples">Examples</a>
	</nav>
	<nav class="nav-small" slot="sm">
		<a href="/"><Icon icon="akar-icons:github-fill" /></a>
		<a href="examples">🔍</a>
	</nav>
</Rwd>
<main>
	<slot />
</main>

<footer>
	<p>Visit <a href="https://github.com/TomekStaszkiewicz/svelte-chip"><Icon icon="akar-icons:github-fill" /></a> to learn SvelteKit</p>
</footer>

<style>
	nav {
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		padding: 30px;
		position: sticky;
    	top: 0;
	}
	nav a {
		font-weight: 800;
    	font-size: larger;
	}

	.nav-small a {
		font-size: 50px;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
