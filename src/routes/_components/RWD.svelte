<script lang="ts">
    let width: number;
    const XS = 576;
    const SM = 768;
    const MD = 992;
    const LG = 1200;
</script>

<svelte:window bind:innerWidth={width} />
{#if width <= XS && $$slots.xs}
    <slot name="xs"></slot>
{:else if width <= SM && $$slots.sm}
    <slot name="sm"></slot>
{:else if width <= MD && $$slots.md}
    <slot name="md"></slot>
{:else if width <= LG && $$slots.lg}
    <slot name="lg"></slot>
{:else if $$slots.xl}
    <slot name="xl"></slot>
{/if}