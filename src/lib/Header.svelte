<script>
	import Items from './Items.svelte';

	import { onMount } from 'svelte';

	let scroll = true;

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	function handleScroll() {
		const scrollPosition = window.scrollY;
		if (scrollPosition > 40) {
			scroll = false;
		} else {
			scroll = true;
		}
	}
</script>

<header
	class="sticky top-0 z-50 pt-5 transition-all ease-in-out dark:!bg-[#1d3144]"
	class:visible={!scroll}
>
	<div class="container mx-auto px-4">
		<nav class="flex items-center justify-between py-3">
			<a class="font-semibold leading-none" href="/">
				<div class="flex items-center space-x-2">
					<img class="h-10" src="favicon.svg" alt="" />
					<h2 class="font-[Montserrat] text-2xl font-medium leading-none">Monst</h2>
				</div>
			</a>
			<ul class="hidden lg:flex lg:items-center lg:space-x-12">
				<Items />
			</ul>
			<div class="buttons hidden gap-3 font-[Montserrat] lg:flex">
				<a
					class="border-r border-blue-400 px-5 py-3 text-sm font-semibold text-blue-400 hover:-translate-y-[2px] hover:text-blue-600"
					href="/login">Log In</a
				>
				<a
					class="border-transparent bg-sky-400 px-5 py-3 text-white hover:-translate-y-[2px] hover:bg-sky-500 dark:text-slate-900"
					href="/signup">Sign Up</a
				>
			</div>
			<div class="dropdown lg:hidden">
				<button
					class="navbar-burger flex items-center rounded border border-blue-200 px-3 py-2 text-blue-400 hover:border-blue-300 hover:text-blue-700"
				>
					<svg class="h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
						<title>Mobile menu</title>
						<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
					</svg>
				</button>
				<ul
					class="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
				>
					<Items />
				</ul>
			</div>
		</nav>
	</div>
</header>

<style>
	.visible {
		background-color: #fff;
		box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.05);
		padding: 0;
		transition: all 0.3s ease-in-out;
	}

	.buttons a {
		display: inline-block;
		border-radius: 0.375rem;
		border-width: 1px;
		font-size: 0.75rem;
		font-weight: 600;
		line-height: 1;
		letter-spacing: 0.025em;
		transition: all 0.3s ease-in-out;
	}

	@media (min-width: 640px) {
		.container {
			max-width: 640px;
		}
	}
	@media (min-width: 768px) {
		.container {
			max-width: 768px;
		}
	}
	@media (min-width: 1024px) {
		.container {
			max-width: 1024px;
		}
	}
	@media (min-width: 1200px) {
		.container {
			max-width: 1200px;
		}
	}
</style>
