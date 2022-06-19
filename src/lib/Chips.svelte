<script lang="ts">
import Chip from './Chip.svelte';
import { chipsStore } from './store';
import type { IChip } from './types';

export let deletable = true;

let chips: IChip[] = [];
chipsStore.subscribe((newChips) => {
  chips = newChips;
});
</script>

<div class="chips-wrapper">
{#each chips as chip}
    <Chip {chip} deletable={deletable} />
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