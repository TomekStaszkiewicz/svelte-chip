<script lang="ts">
import Chip from './Chip.svelte';
import { chipsStore } from './store';
import type { IChip } from './types';

let chips: IChip[] = [];
chipsStore.subscribe((newChips) => {
  chips = newChips;
});
</script>
<div class="chips-wrapper">
{#each chips as chip}
    <Chip {chip} />
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