<script lang="ts">
	import { onMount } from 'svelte';
	import Navbar from '../lib/components/Navbar.svelte';
	import './styles.css';
	import { theme } from '$lib/theme/themeStore';
	onMount(() => {
		theme.subscribe((value) => {
			document.documentElement.setAttribute('data-theme', value);
		});
	});
</script>

<div class="flex flex-col items-center min-h-screen">
	<div class="flex justify-center w-full max-w-[64rem] rounded-b-md">
		<Navbar />
	</div>

	<main>
		<slot />
	</main>
</div>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
