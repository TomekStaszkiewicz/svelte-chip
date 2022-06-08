<script lang="ts">
import type { IChip } from './types';

export let chip: IChip;
</script>

<span 
    class="default_chip" 
    style="--bg-color: {chip.bgColor}"
    >
    {chip.tag}
</span>

<style>
    .default_chip {
        border-radius: 5px;
        background: var(--bg-color, "grey");
        margin: 2px;
        padding: 4px 15px;
    }
</style>