<script>
	import Podcast from '@homeIllustrations/podcast.svg';
</script>

<section class="py-12">
	<div class="container mx-auto py-12">
		<div class="flex flex-wrap">
			<div class="w-full px-3 md:w-1/2">
				<div class="max-w-md">
					<h3 class="mb-4 text-3xl font-bold md:text-3xl">How we work?</h3>
					<p class="mb-6 leading-loose text-gray-400">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo et
						iaculis.
					</p>
					<ul>
						<li class="py-4">
							<span
								class="mr-4 inline-block rounded bg-blue-500 px-4 py-2 text-xs font-semibold text-white"
								>1</span
							>
							<span>Expand Your Reach</span>
						</li>
						<li class="py-4">
							<span
								class="mr-4 inline-block rounded bg-blue-500 px-4 py-2 text-xs font-semibold text-white"
								>2</span
							>
							<span>Annualized Growth</span>
						</li>
						<li class="pt-4">
							<span
								class="mr-4 inline-block rounded bg-blue-500 px-4 py-2 text-xs font-semibold text-white"
								>3</span
							>
							<span>Book Your Providers</span>
						</li>
					</ul>
				</div>
			</div>
			<div class="w-full px-3 md:w-1/2">
				<img
					class="mx-auto mb-12 sm:max-w-sm lg:max-w-full"
					loading="lazy"
					src={Podcast}
					alt="A woman with headphones in a podcast"
				/>
			</div>
		</div>
	</div>
</section>

<style>
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
