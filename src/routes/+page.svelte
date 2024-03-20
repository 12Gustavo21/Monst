<script lang="ts">
	//Svelte
	import { onMount } from 'svelte';

	//OnMount
	onMount(() => {
		document.title = 'Monst | Home';

		const text = document.querySelector('.typewrite');

		const textLoad = () => {
			const dataText = ['Web Agency', 'Social Marketing'];
			let wordIndex = 0;
			let letterIndex = 0;

			const type = () => {
				if (letterIndex < dataText[wordIndex].length) {
					const textElement = text && text.querySelector('.wrap');
					if (textElement) {
						textElement.textContent += dataText[wordIndex].charAt(letterIndex);
					}
					letterIndex++;
					setTimeout(type, 100);
				} else {
					setTimeout(erase, 2000);
				}
			};

			const erase = () => {
				if (letterIndex > 0) {
					const textElement = text && text.querySelector('.wrap');
					if (textElement) {
						textElement.textContent = dataText[wordIndex].substring(0, letterIndex - 1);
					}
					letterIndex--;
					setTimeout(erase, 100);
				} else {
					wordIndex++;
					if (wordIndex >= dataText.length) {
						wordIndex = 0;
					}
					setTimeout(type, 100);
				}
			};

			type();
		};

		textLoad();
	});

	//Styles
	import '../styles/home.css';

	//Illustrations
	import AtThePark from '@homeIllustrations/at-the-park.svg';
	import Delivered from '@homeIllustrations/delivered.svg';

	//Brands
	import Brand1 from '@homeBrands/brand-1.png';
	import Brand2 from '@homeBrands/brand-2.png';
	import Brand3 from '@homeBrands/brand-3.png';
	import Brand4 from '@homeBrands/brand-4.png';
	import Brand5 from '@homeBrands/brand-5.png';

	//Components
	import HowWork from '$lib/home/HowWork.svelte';
	import KeyFeatures from '$lib/home/KeyFeatures.svelte';
	import Faqs from '$lib/home/Faqs.svelte';
	import Contact from '$lib/home/Contact.svelte';
	import Team from '$lib/home/Team.svelte';
</script>

<section class="semicircle absolute -top-24 h-[60vh] w-full bg-[#eff3f9] dark:bg-[#1d3144]" />
<section class="relative -top-24 bg-cover bg-top bg-no-repeat pb-8 pt-24">
	<div class="absolute left-0 top-0 mt-32 hidden md:block">
		<img
			class="jump h-64 lg:h-80"
			src={AtThePark}
			alt="A man with your dog at the park and a wonwan with a laptop"
		/>
	</div>
	<div class="absolute right-0 top-0 mt-32 hidden md:block">
		<img class="jump h-64 lg:h-80" src={Delivered} alt="A woman with a package" />
	</div>
	<div class="container font-[Montserrat]">
		<div class="mb-12 mt-12">
			<div class="mx-auto mb-8 max-w-lg text-center">
				<span
					class="inline-block rounded-full bg-blue-200 px-3 py-2 text-xs font-semibold uppercase text-blue-500"
					>New Event</span
				>
				<h2 class="my-5 flex flex-col gap-3 font-[Poppins] text-3xl font-bold md:text-4xl">
					<span>Exclusive <span class="text-blue-600">Agency</span></span>
					<span>for technology solution.</span>
				</h2>
				<p class="type leading-[1.625rem] text-gray-400">
					We are <strong class="text-blue-500">Monst</strong>, a Creative Design
					<span class="typewrite inline"><span class="wrap"></span></span>
				</p>
			</div>
			<div class="mx-auto max-w-2xl text-center">
				<div class="flex flex-wrap">
					<div class="mb-4 mr-4 flex flex-1 rounded bg-gray-50 px-4">
						<svg
							class="my-auto mr-4 h-6 w-6 text-slate-800"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							data-darkreader-inline-fill=""
						>
							<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
							></path>
							<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
						</svg>
						<input
							class="w-full border-none bg-gray-50 py-4 pl-0 text-xs font-semibold leading-none text-slate-900 placeholder-gray-400 outline-none focus:ring-0"
							type="email"
							placeholder="Type your e-mail"
						/>
					</div>
					<div class="mb-4 flex flex-1 rounded bg-gray-50 px-4 lg:mr-4">
						<svg
							class="my-auto mr-4 h-6 w-6 text-slate-800"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							data-darkreader-inline-fill=""
							style="--darkreader-inline-fill: currentColor;"
						>
							<path
								fill-rule="evenodd"
								d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
								clip-rule="evenodd"
							></path>
						</svg>
						<input
							class="w-full border-none bg-gray-50 py-4 pl-0 text-xs font-semibold leading-none text-slate-900 placeholder-gray-400 outline-none focus:ring-0"
							type="password"
							placeholder="Password"
						/>
					</div>
					<div class="w-full lg:w-auto">
						<a
							class="mb-2 block w-full rounded bg-blue-500 px-6 py-4 text-xs font-semibold leading-none text-white hover:bg-blue-700 lg:w-auto"
							href="/">Register</a
						>
					</div>
				</div>
			</div>
		</div>
		<div class="mx-auto flex max-w-4xl flex-wrap items-center justify-center py-1">
			<div class=" w-1/2 px-8 md:w-1/3 lg:w-1/5">
				<img class="mx-auto" src={Brand1} alt="" />
			</div>
			<div class=" w-1/2 px-8 md:w-1/3 lg:w-1/5">
				<img class="mx-auto" src={Brand2} alt="" />
			</div>
			<div class=" w-1/2 px-8 md:w-1/3 lg:w-1/5">
				<img class="mx-auto" src={Brand3} alt="" />
			</div>
			<div class=" w-1/2 px-8 md:w-1/3 lg:w-1/5">
				<img class="mx-auto" src={Brand4} alt="" />
			</div>
			<div class=" hidden w-1/2 px-8 md:block md:w-1/3 lg:w-1/5">
				<img class="mx-auto" src={Brand5} alt="" />
			</div>
		</div>
	</div>
</section>
<HowWork />
<KeyFeatures />
<Faqs />
<Contact />
<Team />

<style>
	@keyframes blink-caret {
		from,
		to {
			border-color: transparent;
		}
		50% {
			border-color: #408eed;
		}
	}

	@keyframes jump {
		0% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-10px);
		}
		100% {
			transform: translateY(0);
		}
	}

	.typewrite {
		overflow: hidden;
		border-right: 0.01em solid #408eed;
		white-space: nowrap;
		margin: 0 auto;
		animation: blink-caret 0.75s step-end infinite;
	}

	.jump {
		animation: jump 2s infinite linear;
	}
	.semicircle::before {
		position: absolute;
		content: '';
		left: 50%;
		z-index: 10;
		width: 134rem;
		height: 47rem;
		border-radius: 50%;
		background: inherit;
		transform: translateX(-50%) translateY(33%);
		bottom: 0;
		z-index: 0;
	}
</style>
