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
	<div class="fixed top-0 z-40 flex justify-center w-full max-w-[64rem] rounded-b-md">
		<Navbar />
	</div>
	<main class="mx-auto w-full max-w-[64rem] box-border flex flex-col pt-16 px-4">
		<slot />
	</main>
</div>
