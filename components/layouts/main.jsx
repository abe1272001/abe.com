import Head from 'next/head';
import dynamic from 'next/dynamic';
import { Box, Container } from '@chakra-ui/react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import PugLoader from '../pug-loader';
const LazyPixelPug = dynamic(() => import('../pixel-pug'), {
  ssr: false,
  loading: () => <PugLoader />
});

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
				<LazyPixelPug/>
				{children}
				<Footer />
			</Container>
		</Box>
	);
};

export default Main;
