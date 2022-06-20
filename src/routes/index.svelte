<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import SvelteChip from '$lib/SvelteChip.svelte';
	import { addChip, chipsStore } from '$lib/store';
	import type { IChip } from '$lib/types';

	let currentValue = '';
	let chips: IChip[] = [];
	chipsStore.subscribe((newChips) => {
		chips = newChips;
	});

	const onChangeInput = (e) => {
		currentValue = e.target.value + ' ';
	}

	const onAddChip = () => {
		addChip(currentValue);
		currentValue = '';
	}
</script>

<section>
	<h2>Basic usage</h2>
	<SvelteChip />
</section>


<section>
	<h2>Custom input renderer</h2>
	<SvelteChip>
		<input slot="input" bind:value={currentValue} on:input={onChangeInput} on:change={onAddChip} />
	</SvelteChip>
</section>


<section>
	<h2>Custom chip renderer</h2>
	<SvelteChip>
		<table slot="chips">
			<tr>
				<th>Tag</th>
				<th>Color</th>
			</tr>
			{#each chips as chip}
				<tr>
					<td>{chip.tag}</td>
					<td>{chip.bgColor}</td>
				</tr>
			{/each}
		</table>
	</SvelteChip>
</section>
