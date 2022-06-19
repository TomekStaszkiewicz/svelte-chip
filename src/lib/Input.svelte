<script lang="ts">
    import { inputStore, addChip } from './store';
    let currentInput = '';
    inputStore.subscribe((newInput) => {
      currentInput = newInput;
    });
    const onInputChange = (event) => {
      inputStore.set(event.target.value);
    };
</script>

<input class="chipInput" bind:value={currentInput} on:input={onInputChange} on:change={addChip} />

<style>
    .chipInput {
        padding: 5px;
        border: 1px solid black;
        border-radius: 5px;
        width: 80%;
    }
</style>