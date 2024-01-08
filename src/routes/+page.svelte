<script>
	import Contact from '$lib/sections/Contact.svelte';
	import Landing from '$lib/sections/Landing.svelte';
	import Projects from '$lib/sections/Projects.svelte';
	import Skills from '$lib/sections/Skills.svelte';
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
