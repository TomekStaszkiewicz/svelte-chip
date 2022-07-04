<script context="module" lang="ts">
	import SvelteChip from "$lib/SvelteChip.svelte";
	import Section from './_components/Section.svelte';
	import GettingStarted from './_components/GettingStarted.svelte';
	
	export const prerender = true;
	const code = `
		<SvelteChip />
	`;

</script>

<script lang="ts">
	import { getStore } from '$lib/store';

	const {chipsStore: chipsStore1, addChip: addChip1} = getStore('customInput');
	const {chipsStore: chipsStore2} = getStore('customChips');

	let currentValue = '';
	const onChangeInput = (e) => {
		currentValue = e.target.value + ' ';
	}

	const onAddChip = () => {
		addChip1(currentValue);
		currentValue = '';
	}
</script>

<svelte:head>
	<title>Svelte-chip</title>
</svelte:head>


<Section id="home">
	<h1>Svelte-chip</h1>
	<code lang="svelte">
		{@html code}
	</code>
</Section>

<Section id="gettingStarted">
	<GettingStarted />
</Section>

<Section id="basicUsage">
	<h2>Basic usage</h2>
	<SvelteChip />
</Section>

<Section id="customInput">
	<h2>Custom input renderer</h2>
	<SvelteChip id="customInput">
		<input slot="input" bind:value={currentValue} on:input={onChangeInput} on:change={onAddChip} />
	</SvelteChip>
</Section>


<Section id="customChip">
	<h2>Custom chip renderer</h2>
	<SvelteChip id="customChips">
		<table slot="chips">
			<tr>
				<th>Tag</th>
				<th>Color</th>
			</tr>
			{#each $chipsStore2 as chip}
				<tr>
					<td>{chip.tag}</td>
					<td>{chip.bgColor}</td>
				</tr>
			{/each}
		</table>
	</SvelteChip>
</Section>

