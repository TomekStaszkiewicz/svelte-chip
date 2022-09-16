export const customInput = `
<script>
    import SvelteChip, {getStore} from 'svelte-chip';
    const {chipsStore: chipsStore1, addChip: addChip1} = getStore('customInput');
    let currentValue = '';
    const onChangeInput = (e) => {
        currentValue = e.target.value + ' ';
    }

const onAddChip = () => {
    addChip1(currentValue);
    currentValue = '';
}
</script>
<SvelteChip id="customInput">
    <input slot="input" bind:value={currentValue} on:input={onChangeInput} on:change={onAddChip} />
</SvelteChip>
`;

export const customChip = `
<script lang="ts">
import SvelteChip, { getStore } from '$lib/store';
import CustomInput from './_components/CustomInput.svelte';

const {chipsStore: chipsStore2} = getStore('customChips');

</script>
<SvelteChip id="customChips">
    <table slot="chips">
        <tr>
            <th>Tag</th>
            <th>Color</th>
        </tr>
        {#each $chipsStore2 as chip}
            <tr>
                <td>{chip.tag}</td>
                <td>{chip.bgColor}</td>
            </tr>
        {/each}
    </table>
</SvelteChip>
`;

export const basicUsage = `
<script>
    import SvelteChip from 'svelte-chip';
</script>
<SvelteChip />
`;

export const customColors = `
<script lang="ts">
   import SvelteChip from "$lib/SvelteChip.svelte";

    const customColors = ['green', 'grey', 'black', 'white'];
</script>


<SvelteChip id="customColors" colors={customColors} />
`;