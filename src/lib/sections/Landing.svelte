<script>
    import TimerText from '$lib/components/TimerText.svelte';
import TypingText from '../components/TypingText.svelte';
</script>

<section class="min-h-[50%] flex-col md:flex-row-reverse flex items-center mx-auto">
    <div class="w-full max-w-full md:w-2/5 flex justify-center items-center min-h-64 pb-8">
        <img
            class="flex items-center md:max-w-full"
            src="https://gtechwebsite.s3.us-east-1.amazonaws.com/prod/images/wp-content/uploads/2023/portfolio/7744164-1.webp"
            alt="Img"
        />
    </div>
    <div class="w-full md:w-3/5 min-h-40">
        <h1 class="text-4xl font-bold inline">Hello! I am <TypingText
            texts={['Kaloyan Dimitrov', 'A Software Engineer', 'A FullStack Developer']}
            additionalClasses={'text-4xl inline font-extrabold bg-gradient-to-r bg-clip-text text-transparent from-primary to-accent pb-2'}
        /></h1>
        <h1 class="text-xl font-medium text-pretty">I am currently <TimerText 
            startTime={1113144807} 
            additionalClasses={'inline text-pretty text-xl font-medium bg-gradient-to-r bg-clip-text text-transparent from-primary to-accent'}
            /> old</h1>
    </div>
    <br>
</section>
<section class="w-full min-h-[50%] max-w-full md:pt-12 flow-root">
    <h1 class="text-xl font-medium text-pretty inline">I've been in the software engineering field for <TimerText 
        startTime={1113144807} 
        additionalClasses={'inline text-pretty text-xl font-medium bg-gradient-to-r bg-clip-text text-transparent from-primary to-accent'}
        />. My expertise lies in building robust and efficient system architectures and infrastructures. 
        I take pride in my ability to understand and solve complex backend challenges, ensuring the systems I work on are reliable and scalable. 
        Every project is an opportunity to strengthen and refine my skills, always aiming to push the boundaries of backend technology.</h1>
</section>