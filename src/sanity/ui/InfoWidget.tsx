'use client'

import { Box, Card, Code, Flex, Heading, Label, Stack, Text } from '@sanity/ui'
import type { DashboardWidget, LayoutConfig } from '@sanity/dashboard'

export function InfoWidget({
	layout,
	version,
}: {
	layout?: LayoutConfig
	version?: string
} = {}): DashboardWidget {
	return {
		name: 'Guide',
		layout: layout ?? { width: 'medium' },
		component: () => (
			<Card paddingY={4}>
				<Stack space={4}>
					<Box paddingX={3} as="header">
						<Heading size={1} as="h2">
							<Flex
								align="flex-end"
								justify="space-between"
								wrap="wrap"
								gap={4}
							>
								<Flex align="center" gap={2}>
									🖤 SanityPress
									{version && <Code size={1}>{`v${version}`}</Code>}
								</Flex>

								<Flex align="center" gap={4}>
									{social.map((item, key) => (
										<a
											style={{
												display: 'inline-block',
												aspectRatio: '1',
												width: 16,
												height: 16,
												backgroundColor: 'var(--card-fg-color)',
												mask: `url('https://ic0n.dev/${item.icon}') center/cover`,
											}}
											href={item.url}
											target="_blank"
											title={item.label}
											key={key}
										/>
									))}
								</Flex>
							</Flex>
						</Heading>
					</Box>

					{linkGroups.map((group, i) => (
						<Stack space={3} key={i}>
							<Card borderBottom padding={3}>
								<Label size={0} muted>
									{group.title}
								</Label>
							</Card>

							{group.links.map((link, key) => (
								<Stack space={4} paddingX={3} key={key}>
									<Text size={1}>
										<a href={link.url} target="_blank">
											{link.label}
										</a>
									</Text>
								</Stack>
							))}
						</Stack>
					))}
				</Stack>
			</Card>
		),
	}
}

const social: Array<{
	icon: string
	url: string
	label: string
}> = [
	{
		icon: 'si/SiSanity',
		url: 'https://sanity.io/templates/sanitypress',
		label: 'Sanity.io',
	},
	{
		icon: 'fa6/FaGithub',
		url: 'https://github.com/nuotsu/sanitypress',
		label: 'GitHub',
	},
	{
		icon: 'fa6/FaBluesky',
		url: 'https://bsky.app/profile/sanitypress.dev',
		label: 'Bluesky',
	},
	{
		icon: 'fa6/FaXTwitter',
		url: 'https://x.com/sanitypress',
		label: 'X',
	},
]

const linkGroups: Array<{
	title: string
	links: { label: string; url: string }[]
}> = [
	{
		title: 'Resources',
		links: [
			{ label: 'Documentation', url: 'https://2023.sanitypress.dev/docs' },
			{
				label: 'The Styled Heart — SanityPress Blog',
				url: 'https://2023.sanitypress.dev/blog',
			},
		],
	},
	{
		title: 'Guides',
		links: [
			{
				label: 'File Structure',
				url: 'https://2023.sanitypress.dev/docs/file-structure',
			},
			{
				label: 'Built-in Modules',
				url: 'https://2023.sanitypress.dev/docs/modules',
			},
			{
				label: 'Customization Guides',
				url: 'https://2023.sanitypress.dev/blog/the-developers-guide-to-customizing-sanitypress',
			},
			{
				label: 'Scheduling Content',
				url: 'https://2023.sanitypress.dev/blog/introducing-the-schedule-module',
			},
			{
				label: 'Adding New Modules',
				url: 'https://2023.sanitypress.dev/blog/adding-new-modules',
			},
			{
				label: 'A Guide for Nested Routes',
				url: 'https://2023.sanitypress.dev/blog/a-guide-for-nested-routes',
			},
		],
	},
	{
		title: 'GitHub',
		links: [
			{
				label: 'Changelog',
				url: 'https://github.com/nuotsu/sanitypress-2023/releases',
			},
			{
				label: 'Discussions',
				url: 'https://github.com/nuotsu/sanitypress-2023/discussions',
			},
			{
				label: 'Report an issue',
				url: 'https://github.com/nuotsu/sanitypress-2023/issues',
			},
		],
	},
]
