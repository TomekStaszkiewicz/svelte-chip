<script lang="ts">
import { getContext } from 'svelte';
import { getTag } from '$lib/context.const';
import type { StoreContext } from '$lib/types';
	
    const {chipsStore} = getContext<StoreContext>(getTag('customChips'));

</script>
<table>
    <tr>
        <th>Tag</th>
        <th>Color</th>
    </tr>
    {#each $chipsStore as chip}
        <tr>
            <td>{chip.tag}</td>
            <td>{chip.bgColor}</td>
        </tr>
    {/each}
</table>