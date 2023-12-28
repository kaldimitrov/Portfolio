<script>
	import TypingText from '../components/TypingText.svelte';
</script>

<div class="h-full flex-col md:flex-row-reverse flex items-center pt-[15%]" id="about">
	<div class="w-full md:w-1/3 flex justify-center items-center min-h-64 pb-16">
		<img
			class="flex items-center"
			src="https://gtechwebsite.s3.us-east-1.amazonaws.com/prod/images/wp-content/uploads/2023/portfolio/7744164-1.webp"
			alt="Img"
		/>
	</div>
	<div class="w-full md:w-2/3 p-8 min-h-64">
		<h1 class="text-4xl font-bold">Hello I am</h1>
		<TypingText
			texts={['Kaloyan Dimitrov', 'A Software Engineer', 'A Full-Stack Developer']}
			additionalClasses={'text-5xl font-extrabold bg-gradient-to-r bg-clip-text text-transparent from-primary to-accent pb-12'}
		/>
	</div>
</div>
