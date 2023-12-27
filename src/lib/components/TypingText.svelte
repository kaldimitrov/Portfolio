<script lang="ts">
    import { onMount } from 'svelte';
  
    export let texts: string[] = [];
    export let additionalClasses: string = "";
  
    let currentText = '';
    let index = 0;
    let charIndex = 0;
    let deleting = false;
  
    onMount(() => {
      typeText();
    });
  
    function typeText() {
      let fullTxt = texts[index];
      currentText = fullTxt.substring(0, deleting ? charIndex-- : charIndex++);
  
      if (!deleting && charIndex === fullTxt.length) {
        setTimeout(() => (deleting = true), 1000);
      } else if (deleting && charIndex === 0) {
        deleting = false;
        index = (index + 1) % texts.length;
        charIndex = 0;
      }
  
      setTimeout(typeText, deleting ? 50 : 100);
    }
  </script>
  
<p class={`${additionalClasses}`}>
    {currentText}
</p>
  