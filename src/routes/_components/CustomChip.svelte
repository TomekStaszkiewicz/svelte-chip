<script lang="ts">
    import CodeSnippet from 'carbon-components-svelte/src/CodeSnippet/CodeSnippet.svelte';
    import SvelteChip from "$lib/SvelteChip.svelte";
	import { customChip } from './examples.const';
	import ChipsTable from './ChipsTable.svelte';
	
</script>
	<h2>Custom Chip renderer</h2>
    <CodeSnippet type="multi" expanded code={customChip} />
	<SvelteChip id="customChips">
		<ChipsTable slot="chips" />
	</SvelteChip>