import NextLink from 'next/link';
import {
	Box,
	Container,
	Flex,
	Stack,
	Heading,
	Link,
	useColorModeValue,
} from '@chakra-ui/react';
import { IoLogoGithub } from 'react-icons/io5';
import Logo from './Logo';

const LinkItem = ({ href, path, target, children, ...props }) => {
	const active = path === href;
	const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900');
	return (
		<NextLink href={href} passHref scroll={false}>
			<Link
				p={2}
				mt={0}
				bg={active ? 'grassTeal' : undefined}
				color={active ? '#202023' : inactiveColor}
				target={target}
				{...props}
			>
				{children}
			</Link>
		</NextLink>
	);
};

const Navbar = ({ path }) => {
	console.log('path', path);
	return (
		<Box
			as="nav"
			position="fixed"
			w="100%"
			css={{ backdropFilter: 'blur(10px)' }}
			zIndex={1}
		>
			<Container
				maxW="container.md"
				p={2}
				display="flex"
				wrap="wrap"
				alignItems="center"
				justifyContent="space-between"
			>
				<Flex align="center" mr={5}>
					<Heading as="h1" size="lg" letterSpacing={'tighter'}>
						<Logo />
					</Heading>
				</Flex>
				<Flex
					flexDirection={{ base: 'columm', md: 'row' }}
					display={{ base: 'none', md: 'flex' }}
					width={{ base: 'full', md: 'auto' }}
					// justifyContent="center"
					alignItems="center"
					// flexGrow={1}
					mt={{ base: 4, md: 0 }}
				>
					<LinkItem href="/about" path={path}>
						About
					</LinkItem>
					<LinkItem href="/works" path={path}>
						Works
					</LinkItem>
					<LinkItem
						display="inline-flex"
						alignItems="center"
						href="https://github.com/abe1272001/abe.com/tree/main"
						style={{ gap: 4 }}
					>
						<IoLogoGithub />
						Source
					</LinkItem>
				</Flex>
				<Box pr={3}>mode</Box>
			</Container>
		</Box>
	);
};

export default Navbar;
