<script>
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import { projects } from '../../config/projects';
	import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
</script>

<div class="min-h-full max-w-96 md:max-w-full py-4 flex flex-col items-center justify-center">
	<h1 class="text-4xl font-bold mb-8">Projects</h1>
	<Splide options={{ autoplay: true, speed: 1000, drag: 'free', snap: true, interval: 1000 }} class='max-w-full'>
		{#each projects as project}
			<SplideSlide>
				<div class="card bg-base-200">
					<img class='max-w-full' src={project.image} alt="Project img" />
					<div class="card-body">
						<h2 class="card-title">{project.name}</h2>
						<p>{project.description}</p>
						<div class="card-actions justify-end">
							{#each project.tags as tag}
								<div class="badge badge-outline">{tag}</div>
							{/each}
						</div>
					</div>
				</div>
			</SplideSlide>
		{/each}
	</Splide>
</div>
