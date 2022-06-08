<script lang="ts">
import Chips from "./Chips.svelte";
import Input from "./Input.svelte";
</script>
    
<main>
    <slot name="input">
        <Input />
    </slot>
    <slot name="chips">
        <Chips />
    </slot>
</main>