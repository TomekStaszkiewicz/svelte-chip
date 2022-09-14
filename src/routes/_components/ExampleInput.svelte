<script lang="ts">
import { getContext } from 'svelte';
import type { StoreContext } from '$lib/types';
import { getTag } from '$lib/context.const';

	const {addChip} = getContext<StoreContext>(getTag('customInput'));
	let currentValue = '';
	const onChangeInput = (e) => {
		currentValue = e.target.value + ' ';
	}

	const onAddChip = () => {
		addChip(currentValue);
		currentValue = '';
	}
</script>
<input bind:value={currentValue} on:input={onChangeInput} on:change={onAddChip} />
