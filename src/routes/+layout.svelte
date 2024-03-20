<script>
	//Svelte
	import '../app.pcss';
	
	//Components
	import Header from '$lib/Header.svelte';
	import GoToTop from '$lib/GoToTop.svelte';
	import Footer from '$lib/Footer.svelte';

	//Styles
	import '../styles/global.css';
</script>

<Header />
<main class="dark:bg-slate-800">
	<slot />
</main>
<GoToTop />
<Footer />
