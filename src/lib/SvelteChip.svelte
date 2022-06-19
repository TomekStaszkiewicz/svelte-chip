<script lang="ts">
import Chips from './Chips.svelte';
import Input from './Input.svelte';

export let deletable = true;

</script>
    
<main>
    <slot name="input">
        <Input />
    </slot>
    <slot name="chips" deletable={deletable}>
        <Chips deletable={deletable} />
    </slot>
</main>