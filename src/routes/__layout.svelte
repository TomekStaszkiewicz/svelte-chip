<script lang="ts">
	import '../app.css';
	import Rwd from './_components/RWD.svelte';
	import Icon from '@iconify/svelte';

</script>
<Rwd>
	<div slot="xl" class="wrapper-big">
		<nav class="nav-big">
			<a href="#gettingStarted">Getting started</a>
			<a href="#basicUsage">Basic usage</a>
			<a href="#customInput">Custom input</a>
			<a href="#customChip">Custom chip</a>
			<a href="#customColors">Custom colors</a>
		</nav>
		<main>
			<slot />
			<footer>
				<a href="https://github.com/TomekStaszkiewicz/svelte-chip"><Icon icon="akar-icons:github-fill" /></a>
			</footer>
		</main>
	</div>
	<div slot="sm" class="wrapper-small">
		<main>
			<slot />
			<footer>
				<a href="https://github.com/TomekStaszkiewicz/svelte-chip"><Icon icon="akar-icons:github-fill" /></a>
			</footer>
		</main>
	</div>
</Rwd>


<style>
	.nav-big {
		display: flex;
		flex-direction: column;
		width: 25%;
		justify-content: flex-start;
		padding-top: 30px;
		background-color: var(--accent-color);
		color: var(--secondary-color);
	}

	.nav-big a {
		padding: 20px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--primary-color);
	}

	nav a {
		font-weight: 800;
    	font-size: larger;
	}

	.nav-small a {
		font-size: 50px;
	}

	.wrapper-big {
		display: flex;
		min-height: 100vh;
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
		font-size: 45px;
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
