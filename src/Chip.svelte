<script lang="ts">
import { IChip } from "./types";
import Button from '@smui/button';

export let chip: IChip;

</script>

<span 
    class="default_chip" 
    style="--bg-color: {chip.bgColor}"
    >
    {chip.tag}
</span>
<Button />


<style>
    .default_chip {
        border-radius: 5px;
        background: var(--bg-color, "grey");
        margin: 2px;
        padding: 4px 15px;
    }
</style>