<script lang="ts">
	import { onMount } from 'svelte';
	import Contact from '$lib/sections/Contact.svelte';
	import Landing from '$lib/sections/Landing.svelte';
	import Projects from '$lib/sections/Projects.svelte';
	import Skills from '$lib/sections/Skills.svelte';

	let sections: NodeListOf<Element>;
	let isScrolling: boolean = false;
	let currentSectionIndex = 0;

	onMount(() => {
		sections = document.querySelectorAll('.section-containers > section');
		window.addEventListener('wheel', handleWheel, { passive: false });
	});

	function handleWheel(event: WheelEvent) {
		event.preventDefault();

		const deltaY = event.deltaY;
		if (deltaY > 0 && currentSectionIndex < sections.length - 1) {
			currentSectionIndex++;
			scrollToSection(currentSectionIndex);
		} else if (currentSectionIndex > 0) {
			currentSectionIndex--;
			scrollToSection(currentSectionIndex);
		}
	}

	function scrollToSection(index: number) {
		sections[index].scrollIntoView({ behavior: 'smooth' });
	}
</script>

<svelte:head>
	<title>KDimitrov Portfolio</title>
	<meta name="description" content="Portfolio" />
</svelte:head>

<div class="section-containers">
	<section id="about">
		<Landing />
	</section>
	<section id="skills">
		<Skills />
	</section>
	<section id="projects">
		<Projects />
	</section>
	<section id="contact">
		<Contact />
	</section>
</div>

<style>
	.section-containers > section {
		@apply h-screen min-h-full mx-auto;
	}
</style>
