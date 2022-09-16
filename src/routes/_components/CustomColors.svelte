<script lang="ts">
   import SvelteChip from "$lib/SvelteChip.svelte";
    import CodeSnippet from "carbon-components-svelte/src/CodeSnippet/CodeSnippet.svelte";
    import { customColors } from "./examples.const";

    const colors = ['green', 'grey', 'black', 'white'];
</script>

<h2>Custom Input renderer</h2>
<CodeSnippet type="multi" expanded code={customColors} />
<SvelteChip id="customColors" colors={colors} />