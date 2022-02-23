import '../styles/globals.css';
import Chakra from '../components/Chakra';
import Layout from '../components/layouts/main';

function Website({ Component, pageProps, router }) {
	return (
		<Chakra cookies={pageProps.cookies}>
			<Layout router={router}>
				<Component {...pageProps} />
			</Layout>
		</Chakra>
	);
}

export default Website;
