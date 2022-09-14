<script lang="ts">
import { setContext } from 'svelte';

import Chips from './Chips.svelte';
import { getTag } from './context.const';
import Input from './Input.svelte';
import { getStore } from './store';

export let deletable = true;
export let id = 'default';

const svelteChipTag = getTag(id);

const storeConfig = getStore();

setContext(svelteChipTag, storeConfig);

</script>
    
    <slot name="input">
        <Input id={id} />
    </slot>
    <slot name="chips" deletable={deletable} id={id}>
        <Chips deletable={deletable} id={id} />
    </slot>
