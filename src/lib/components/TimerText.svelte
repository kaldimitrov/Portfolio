<script lang="ts">
	import { onMount } from 'svelte';

	export let additionalClasses: string = '';
	export let startTime: number;
	let timeDifference = '';

	function calculateTimeDiff() {
		const now = new Date();
		const difference = Math.abs(now.getTime() - startTime * 1000);

		const days = Math.floor((difference / (1000 * 60 * 60 * 24)) % 30.44);
		const months = Math.floor((difference / (1000 * 60 * 60 * 24 * 30.44)) % 12);
		const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365.25));

		timeDifference = `${years} years, ${months} months and ${days} days`;
	}

	onMount(() => {
		calculateTimeDiff();
		setInterval(() => {
			calculateTimeDiff();
		}, 60000);
	});
</script>

<p class={`${additionalClasses}`}>
	{timeDifference}
</p>
