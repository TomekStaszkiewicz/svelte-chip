<script lang="ts">
    import { getStore } from './store';
    export let id: string;

    const {inputStore, addChip} = getStore(id);
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