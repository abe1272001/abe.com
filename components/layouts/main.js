import Head from 'next/head';
import { Box, Container } from '@chakra-ui/react';
import Navbar from '../Navbar';
import Footer from '../Footer';

const Main = ({ children, router }) => {
	console.log('router', router);
	return (
		<Box as="main" pb={8}>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="description" content="Abe's homepage" />
				<meta name="author" content="Abe Chen" />
			</Head>

			<Navbar path={router.asPath} />
			<Container maxW="container.md" pt={14}>
				{children}
				<Footer />
			</Container>
		</Box>
	);
};

export default Main;
