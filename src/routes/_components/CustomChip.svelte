<script lang="ts">
    import CodeSnippet from 'carbon-components-svelte/src/CodeSnippet/CodeSnippet.svelte';
    import SvelteChip from "$lib/SvelteChip.svelte";
	import { getStore } from '$lib/store';
	import CustomInput from './CustomInput.svelte';
import { customChip } from './examples.const';
	
    const {chipsStore: chipsStore2} = getStore('customChips');
	const {chipsStore: chipsStore1, addChip: addChip1} = getStore('customInput');
	let currentValue = '';
	const onChangeInput = (e) => {
		currentValue = e.target.value + ' ';
	}

	const onAddChip = () => {
		addChip1(currentValue);
		currentValue = '';
	}
</script>
	<h2>Custom Chip renderer</h2>
    <CodeSnippet type="multi" expanded code={customChip} />
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