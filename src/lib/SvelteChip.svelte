<script lang="ts">
import Chips from './Chips.svelte';
import Input from './Input.svelte';

export let deletable = true;
export let id = 'default';

</script>
    
    <slot name="input">
        <Input id={id} />
    </slot>
    <slot name="chips" deletable={deletable} id={id}>
        <Chips deletable={deletable} id={id} />
    </slot>
