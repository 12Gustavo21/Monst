<script>
	const cards = [
		{
			image: 'https://api.dicebear.com/8.x/lorelei/svg?&backgroundColor=38bdf8',
			title: 'Michael Jackson',
			position: 'CEO',
			content:
				'Donec consequat tortor risus, at auctor felis consequat a. Donec quis dolor sem. Sed sollicitudin magna in hendrerit pulvinar. Vestibulum non quam velit.'
		},
		{
			image: 'https://api.dicebear.com/8.x/lorelei/svg?seed=Baby&backgroundColor=38bdf8',
			title: 'Oprah Winfrey',
			position: 'Head of Development',
			content:
				'Donec consequat tortor risus, at auctor felis consequat a. Donec quis dolor sem. Sed sollicitudin magna in hendrerit pulvinar. Vestibulum non quam velit.'
		},
		{
			image: 'https://api.dicebear.com/8.x/lorelei/svg?seed=Charlie&backgroundColor=38bdf8',
			title: 'Leonardo',
			position: 'Head of Operations',
			content:
				'Donec consequat tortor risus, at auctor felis consequat a. Donec quis dolor sem. Sed sollicitudin magna in hendrerit pulvinar. Vestibulum non quam velit.'
		},
		{
			image: 'https://api.dicebear.com/8.x/lorelei/svg?seed=Pepper&backgroundColor=38bdf8',
			title: 'Jerry Seinfeld',
			position: 'Head of Development',
			content:
				'Donec consequat tortor risus, at auctor felis consequat a. Donec quis dolor sem. Sed sollicitudin magna in hendrerit pulvinar. Vestibulum non quam velit.'
		}
	];

	//Icons
	import Facebook from '@homeIcons/facebook-blue.svg';
	import Instagram from '@homeIcons/instagram-blue.svg';
</script>

<section class="bg-gray-50 py-20 dark:bg-slate-900 dark:text-slate-100">
	<div class="container mx-auto">
		<div class="mx-auto mb-12 max-w-lg text-center">
			<span
				class="inline-block rounded-xl bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-600"
				>Our Team</span
			>
			<h2 class="font-heading mb-4 mt-2 text-3xl font-bold md:text-4xl">Meet our awesome team</h2>
			<p class="leading-loose text-gray-400">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo et iaculis.
			</p>
		</div>
		<div class="flex flex-wrap">
			{#each cards as card}
				<div class="w-full py-5 md:w-1/2 md:px-5">
					<div class="rounded bg-white px-6 py-10 shadow dark:bg-slate-800">
						<div class="mb-4 flex items-center">
							<img class="h-16 w-16 rounded-full object-cover" src={card.image} alt="" />
							<div class="pl-4">
								<p class="text-lg font-bold">{card.title}</p>
								<p class="text-blue-600">{card.position}</p>
							</div>
						</div>
						<p class="mb-5 text-sm leading-loose text-gray-400">
							Donec consequat tortor risus, at auctor felis consequat a. Donec quis dolor sem. Sed
							sollicitudin magna in hendrerit pulvinar. Vestibulum non quam velit.
						</p>
						<div class="flex space-x-2">
							<a href="/">
								<img src={Facebook} alt="" />
							</a>
							<a href="/">
								<img src={Instagram} alt="" />
							</a>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	@media (min-width: 1200px) {
		.container {
			max-width: 1200px;
		}
	}
</style>
