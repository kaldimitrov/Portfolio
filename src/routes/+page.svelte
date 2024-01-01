<script>
	import Contact from '$lib/sections/Contact.svelte';
	import Landing from '$lib/sections/Landing.svelte';
	import Projects from '$lib/sections/Projects.svelte';
	import Skills from '$lib/sections/Skills.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section id="about" class="h-screen mx-auto">
	<Landing />
</section>
<!-- <section id="skills" class="h-screen">
	<Skills />
</section> -->
<section id="projects" class="h-screen min-h-full mx-auto">
	<Projects />
</section>
<section id="contact" class="h-screen min-h-full mx-auto">
	<Contact />
</section>
