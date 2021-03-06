// a) import `ChakraProvider` component as well as the storageManagers
import {
	ChakraProvider,
	cookieStorageManager,
	localStorageManager,
} from '@chakra-ui/react';
import theme from '../lib/theme';

export default function Chakra({ cookies, children }) {
	// b) Pass `colorModeManager` prop
	const colorModeManager =
		typeof cookies === 'string'
			? cookieStorageManager(cookies)
			: localStorageManager;
	return (
		<ChakraProvider theme={theme} colorModeManager={colorModeManager}>
			{children}
		</ChakraProvider>
	);
}

// also export a reusable function getServerSideProps
export async function getServerSideProps({ req }) {
	return {
		// first time users will not have any cookies and you may not return
		// undefined here, hence ?? is necessary
		props: {
			cookies: req.headers.cookie ?? '',
		},
	};
}
