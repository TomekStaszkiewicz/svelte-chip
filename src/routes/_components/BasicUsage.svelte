<script lang="ts">
    import CodeSnippet from 'carbon-components-svelte/src/CodeSnippet/CodeSnippet.svelte';
    import SvelteChip from "$lib/SvelteChip.svelte";
import { basicUsage } from './examples.const';

</script>

<h2>Basic usage</h2>
<CodeSnippet type="multi" code={basicUsage} />

<SvelteChip />

