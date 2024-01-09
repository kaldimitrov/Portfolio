<script lang="ts">
	import { Skills } from '../../config/skills';

	let activeTab = 'Frontend';
</script>

<div class="min-h-full max-w-96 md:max-w-full py-4 flex flex-col items-center justify-center">
	<h1 class="text-4xl font-bold mb-8">Skills</h1>

	<div class="tabs gap-6">
		{#each Skills as categorySkill}
			<a
				class="tab tab-lifted rounded-t-lg text-2xl {activeTab == categorySkill.category ? 'bg-primary text-primary-content' : ''}"
				on:click={() => (activeTab = categorySkill.category)}
			>
				{categorySkill.category}
			</a>
		{/each}
	</div>

	{#each Skills as skill}
		{#if skill.category == activeTab}
			<div class="grid grid-cols-3 md: grid-cols-5 gap-6 mt-4">
				{#each skill.items as item}
					<div class="flex flex-col items-center tooltip" data-tip={item.name}>
						<img class="h-16 w-16" src={item.image} alt={item.name} />
					</div>
				{/each}
			</div>
		{/if}
	{/each}
</div>
