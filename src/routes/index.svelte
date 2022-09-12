<script context="module" lang="ts">
	import Section from './_components/Section.svelte';
	import "carbon-components-svelte/css/all.css";
	import GettingStarted from './_components/GettingStarted.svelte';
	import BasicUsage from './_components/BasicUsage.svelte';
	import CustomInput from './_components/CustomInput.svelte';
	import CustomChip from './_components/CustomChip.svelte';

	export const prerender = true;
</script>

<svelte:head>
	<title>Svelte-chip</title>
</svelte:head>


<h1>Svelte-chip</h1>
<Section id="gettingStarted">
	<GettingStarted />
</Section>

<Section id="basicUsage">
	<BasicUsage />
</Section>

<Section id="customInput">
	<CustomInput />
</Section>


<Section id="customChip">
	<CustomChip />
</Section>

