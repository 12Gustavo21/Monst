<script>
	import Faqs from '@homeIllustrations/faqs.svg';

	const faqs = [
		{
			title: 'Internet Things',
			content:
				'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.'
		},
		{
			title: 'Artificial Intelligence',
			content:
				'Since 2007 we have been a visionary and a reliable software design engineering partner for world-class brands. We are a boutique digital transformation consultancy.'
		},
		{
			title: 'Cloud Computing',
			content:
				'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.'
		}
	];
</script>

<section class="container mx-auto">
	<div class="flex w-full lg:h-full">
		<div class="flex-1 py-20 lg:py-16 lg:pr-32">
			<div class="mx-auto max-w-2xl px-4 lg:ml-0">
				<h3 class="mb-16 font-[Poppins] text-4xl font-bold">Faqs</h3>
				<div>
					<div class="mt-6 text-lg leading-loose">
						<div class="join join-vertical w-full">
							{#each faqs as { title, content }}
								<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
								<div tabindex="0" class="collapse join-item collapse-plus py-3">
									<input type="radio" name="faq" />
									<div class="collapse-title border-b pb-2 pl-1 font-[inherit] text-xl font-bold">
										{title}
									</div>
									<div
										class="collapse-content mt-2 pl-1 font-[Montserrat] text-sm text-gray-700 dark:text-gray-300"
									>
										<p>{content}</p>
									</div>
								</div>
							{/each}
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="hidden h-[30rem] bg-blue-500 lg:relative lg:block lg:w-1/3">
			<div class="absolute left-0 mt-24 flex items-center md:-mr-32">
				<img class="jump lg:max-w-lg" src={Faqs} alt="" />
			</div>
		</div>
	</div>
</section>

<style>
	.collapse-plus > .collapse-title::before {
		content: '';
		width: 1.4rem;
		height: 1.4rem;
		border: 0.1875rem solid #364050;
		border-radius: 50%;
		position: absolute;
		right: 0;
		@apply dark:border-gray-400;
	}

	.collapse-plus > .collapse-title::after {
		position: absolute;
		right: 0.62rem;
		top: 0.65rem;
		color: #364050;
		@apply dark:text-gray-400;
	}

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
