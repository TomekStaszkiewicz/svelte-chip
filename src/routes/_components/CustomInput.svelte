<script lang="ts">
    import CodeSnippet from 'carbon-components-svelte/src/CodeSnippet/CodeSnippet.svelte';
    import SvelteChip from "$lib/SvelteChip.svelte";
	import { getStore } from '$lib/store';
import { customInput } from './examples.const';

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

<h2>Custom Input renderer</h2>
<CodeSnippet type="multi" expanded code={customInput} />

	<SvelteChip id="customInput">
		<input slot="input" bind:value={currentValue} on:input={onChangeInput} on:change={onAddChip} />
	</SvelteChip>
