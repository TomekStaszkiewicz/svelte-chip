<script lang="ts">
import { getContext } from 'svelte';
import { getTag } from './context.const';

import type { StoreContext, IChip } from './types';

export let deletable = true;
export let chip: IChip;
export let id: string;

const {deleteChip} = getContext<StoreContext>(getTag(id));

</script>

<span 
    class="default_chip" 
    style="--bg-color: {chip.bgColor}"
    >
    {chip.tag}
    {#if deletable}
        <button class="default_chipdelete" on:click={() => deleteChip(chip.tag)}>x</button>
    {/if}
</span>

<style>
    .default_chip {
        border-radius: 5px;
        background: var(--bg-color, "grey");
        margin: 2px;
        padding: 4px 0px 4px 15px;
    }

    .default_chipdelete {
        border: none;
        background: inherit;
        cursor: pointer;
    }
</style>