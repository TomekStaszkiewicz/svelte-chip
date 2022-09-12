<script lang="ts">
    export let id: string;
</script>

<section {id} class="docs-section">
<slot></slot>
</section>

<style>
    .docs-section {
        margin: 15px 0;
    }
</style>