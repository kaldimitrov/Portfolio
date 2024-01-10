<script>
	import ThemeSwitcher from '$lib/theme/ThemeSwitcher.svelte';
	import { setSectionIndex } from '$lib/globalStore';
</script>

<div class="navbar bg-base-100 w-full rounded-b-2xl shadow-2xl">
	<div class="w-1/2 md:w-1/3 justify-start">
		<div class="dropdown">
			<div tabindex="0" role="button" class="btn btn-ghost md:hidden">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"
					><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg
				>
			</div>
			<ul class="menu menu-sm dropdown-content mt-3 p-2 bg-base-100 rounded-box w-64 shadow-2xl">
				<li><a href="#about" on:click={() => setSectionIndex(1)}>About</a></li>
				<li><a href="#skills" on:click={() => setSectionIndex(2)}>Skills</a></li>
				<li><a href="#projects" on:click={() => setSectionIndex(3)}>Projects</a></li>
				<li><a href="#contact" on:click={() => setSectionIndex(4)}>Contact</a></li>
			</ul>
		</div>
		<a href="/" on:click={() => setSectionIndex(1)} class="hidden md:flex btn btn-ghost text-3xl font-bold">KDimitrov</a>
	</div>
	<a href="/" class="md:hidden btn btn-ghost text-3xl font-bold" on:click={() => setSectionIndex(1)}>KDimitrov</a>
	<div class="w-1/2 md:w-2/3 justify-end">
		<div class="hidden md:flex">
			<ul class="menu menu-horizontal px-1">
				<li><a class="hover:text-primary" href="#about" on:click={() => setSectionIndex(1)}>About</a></li>
				<li><a class="hover:text-primary" href="#skills" on:click={() => setSectionIndex(2)}>Skills</a></li>
				<li><a class="hover:text-primary" href="#projects" on:click={() => setSectionIndex(3)}>Projects</a></li>
				<li><a class="hover:text-primary" href="#contact" on:click={() => setSectionIndex(4)}>Contact</a></li>
			</ul>
		</div>
		<ThemeSwitcher />
	</div>
</div>
