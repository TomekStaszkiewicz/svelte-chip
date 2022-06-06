<script lang="ts">
import Input from "./Input.svelte";
let inputValue = 'aaa';

</script>

<main>
	<Input bind:inputValue={inputValue} />
	<h1>{inputValue}</h1>
</main>