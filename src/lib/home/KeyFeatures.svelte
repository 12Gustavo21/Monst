<script>
	import Tasks from '@homeIllustrations/tasks.svg';
</script>

<section class="bg-gray-50 py-24 dark:bg-slate-800">
	<div class="container mx-auto">
		<div class="flex flex-wrap lg:flex-nowrap">
			<div class="mx-auto flex flex-wrap lg:max-w-sm">
				<img
					class="jump mx-auto sm:max-w-sm lg:max-w-full"
					loading="lazy"
					src={Tasks}
					alt="A man and a woman making tasks"
				/>
			</div>
			<div class="w-full lg:w-auto">
				<div class="lg:pl-32">
					<div class="mb-4">
						<span class="rounded-xl bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600"
							>Why choose us</span
						>
						<h2 class="mt-3 font-[Poppins] text-4xl font-bold leading-[3.2rem]">Key Features</h2>
					</div>
					<div class="flex items-start py-4">
						<div class="mr-5 w-8 text-blue-500">
							<svg
								class="h-8 w-8"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
								></path>
							</svg>
						</div>
						<div>
							<h3 class="mb-2 font-[Poppins] text-xl font-semibold">Expand Your Reach</h3>
							<p class="font-[Montserrat] leading-loose text-gray-400">
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis expedita animi.
							</p>
						</div>
					</div>
					<div class="flex items-start py-4">
						<div class="mr-5 w-8 text-blue-500">
							<svg
								class="h-8 w-8"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
								></path>
							</svg>
						</div>
						<div>
							<h3 class="mb-2 font-[Poppins] text-xl font-semibold">Annualized Growth</h3>
							<p class="font-[Montserrat] leading-loose text-gray-400">
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis expedita animi.
							</p>
						</div>
					</div>
					<div class="flex items-start py-4">
						<div class="mr-5 w-8 text-blue-500">
							<svg
								class="h-8 w-8"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
								></path>
							</svg>
						</div>
						<div>
							<h3 class="mb-2 font-[Poppins] text-xl font-semibold">Book Your Providers</h3>
							<p class="font-[Montserrat] leading-loose text-gray-400">
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis expedita animi.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.jump {
		animation: jump 2s infinite linear;
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

	@media (min-width: 1200px) {
		.container {
			max-width: 1200px;
		}
	}
</style>
