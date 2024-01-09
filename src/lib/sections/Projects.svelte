<script lang="ts">
	import { Splide, SplideSlide, type Options } from '@splidejs/svelte-splide';
	import { Projects } from '../../config/projects';
	import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';

	const splideOptions: Options = {
		autoplay: true,
		speed: 1000,
		drag: 'free',
		snap: true,
		interval: 1000,
		rewind: true,
		rewindByDrag: true
	};
</script>

<div class="min-h-full py-4 flex flex-col items-center justify-center">
	<h1 class="text-4xl font-bold mb-8">Projects</h1>
	<Splide options={splideOptions} class="max-w-full">
		{#each Projects as project}
			<SplideSlide class="flex items-center justify-center">
				<div class="card bg-base-200 max-w-2xl">
					<img src={project.image} alt="Project img" class=" w-full h-auto object-contain" />
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
