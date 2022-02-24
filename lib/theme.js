// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react';

// 2. Add your color mode config
const config = {
	initialColorMode: 'dark',
	useSystemColorMode: false,
};

const fonts = {
  heading: "'M PLUS Rounded 1c'"
}

const colors = {
  grassTeal: '#88ccca'
}

// 3. extend the theme
const theme = extendTheme({ config, fonts, colors });

export default theme;
