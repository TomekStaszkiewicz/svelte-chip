<script lang="ts">
import { getContext } from 'svelte';
import { getTag } from './context.const';
import type { StoreContext } from './types';
    
    export let id: string;

    const {inputStore, addChip} = getContext<StoreContext>(getTag(id));
    const onInputChange = (event) => {
      inputStore.set(event.target.value);
    };
</script>

<input class="chipInput" bind:value={$inputStore} on:input={onInputChange} on:change={addChip} />

<style>
    .chipInput {
        padding: 5px;
        border: 1px solid black;
        border-radius: 5px;
        width: 80%;
    }
</style>