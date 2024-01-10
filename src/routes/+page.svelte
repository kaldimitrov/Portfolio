<script lang="ts">
	import { onMount } from 'svelte';
	import Contact from '$lib/sections/Contact.svelte';
	import Landing from '$lib/sections/Landing.svelte';
	import Projects from '$lib/sections/Projects.svelte';
	import Skills from '$lib/sections/Skills.svelte';
	import { sectionIndex, setSectionIndex } from '$lib/globalStore';

	let sections: NodeListOf<Element>;

	onMount(() => {
		sections = document.querySelectorAll('.section-containers > section');
		window.addEventListener('wheel', handleWheel, { passive: false });
	});

	function handleWheel(event: WheelEvent) {
		event.preventDefault();

		const deltaY = event.deltaY;
		if (deltaY > 0 && $sectionIndex < sections.length - 1) {
			setSectionIndex($sectionIndex + 1);
			scrollToSection($sectionIndex);
		} else if ($sectionIndex > 0) {
			setSectionIndex($sectionIndex - 1);
			scrollToSection($sectionIndex);
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
