<script>
	import ThemeSwitcher from "$lib/theme/ThemeSwitcher.svelte";
  </script>
  <div class="navbar bg-base-100">
	<div class="navbar-start">
	  <div class="dropdown">
		<div tabindex="0" role="button" class="btn btn-ghost md:hidden">
		  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
		</div>
		<ul class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
		  <li><a href="#about">About</a></li>
		  <li><a href="#experience">Experience</a></li>
		  <li><a href="#projects">Projects</a></li>
		  <li><a href="#contact">Contact</a></li>
		</ul>
	  </div>
	  <a href="/" class="hidden md:flex btn btn-ghost text-xl">Portfolio</a>
	</div>
	<a href="/" class="md:hidden btn btn-ghost text-xl">Portfolio</a>
	<div class="navbar-center hidden md:flex">
	  <ul class="menu menu-horizontal px-1">
		<li><a href="#about">About</a></li>
		<li><a href="#experience">Experience</a></li>
		<li><a href="#projects">Projects</a></li>
		<li><a href="#contact">Contact</a></li>
	  </ul>
	</div>
	<div class="navbar-end">
	  <ThemeSwitcher/>
	</div>
  </div>
  