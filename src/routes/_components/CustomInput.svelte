<script lang="ts">
    import CodeSnippet from 'carbon-components-svelte/src/CodeSnippet/CodeSnippet.svelte';
    import SvelteChip from "$lib/SvelteChip.svelte";
	import { customInput } from './examples.const';
	import ExampleInput from './ExampleInput.svelte';
</script>

<h2>Custom Input renderer</h2>
<CodeSnippet type="multi" expanded code={customInput} />

	<SvelteChip id="customInput">
		<ExampleInput slot="input" />
	</SvelteChip>
