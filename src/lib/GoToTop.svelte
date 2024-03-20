<script lang="ts">
	import { onMount } from 'svelte';

	let showButton = false;

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	function handleScroll() {
		const scrollPosition = window.scrollY;
		showButton = scrollPosition > 200;
	}

	function scrollToTop() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	}
</script>

{#if showButton}
	<button
		class="scroll-to-top fixed bottom-8 right-8 z-50 flex h-10 w-10 cursor-pointer items-center justify-center rounded-md bg-[#086ad8] text-white shadow-xl"
		on:click={scrollToTop}
	>
		<svg
			class="h-4 w-4"
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M5 10l7-7m0 0l7 7m-7-7v18"
			></path>
		</svg>
	</button>
{/if}
