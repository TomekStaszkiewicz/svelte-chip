<script lang="ts">
import Chip from './Chip.svelte';
import { getStore } from './store';

export let deletable = true;
export let id: string;

const {chipsStore} = getStore(id);

</script>

<div class="chips-wrapper">
{#each $chipsStore as chip}
    <Chip {chip} deletable={deletable} id={id} />
{/each}
</div>

<style>
    .chips-wrapper {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-wrap: wrap;
    }
</style>