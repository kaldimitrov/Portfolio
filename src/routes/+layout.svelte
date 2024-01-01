<script lang="ts">
	import { onMount } from 'svelte';
	import Navbar from '../lib/components/Navbar.svelte';
	import Notification from '$lib/components/Notifications/Notification.svelte';
	import { theme } from '$lib/theme/themeStore';
	import './styles.css';

	onMount(() => {
		theme.subscribe((value) => {
			document.documentElement.setAttribute('data-theme', value);
		});
	});
</script>

<div class="flex flex-col items-center min-h-screen">
	<Notification />

	<div class="flex justify-center w-full max-w-[64rem] rounded-b-md fixed top-0 z-40">
		<Navbar />
	</div>

	<main class="min-h-screen flex flex-col pt-16 px-4 py-0">
		<slot />
	</main>
</div>

<style>
	main {
		flex: 1;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
