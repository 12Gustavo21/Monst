<script>
	const links = [
		{
			href: '/',
			label: 'Home'
		},
		{
			href: '/about',
			label: 'About Us'
		},
		{
			href: '/services',
			label: 'Services'
		},
		{
			href: '/portfolio',
			label: 'Portfolio'
		},
		{
			href: '/blog',
			label: 'Blog'
		},
		{
			href: '/contato',
			label: 'Contato'
		}
	];
</script>

{#each links as { href, label }}
	<li class="relative pb-4 pt-4">
		<a
			{href}
			class="text-[rgba(100, 116, 139, 1)] dark:text-[rgba(255, 255, 255, 0.8)] font-[Montserrat] text-sm font-semibold transition-colors duration-200 ease-in-out hover:text-gray-500 dark:hover:text-gray-300"
			>{label}</a
		>
	</li>
{/each}
