<script lang="ts">
import { getContext } from 'svelte';

import Chip from './Chip.svelte';
import { getTag } from './context.const';
import type { StoreContext } from './types';

export let deletable = true;
export let id: string;

const {chipsStore} = getContext<StoreContext>(getTag(id));

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