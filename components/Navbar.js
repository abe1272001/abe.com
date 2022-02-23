import { Box, Container } from '@chakra-ui/react';
const Navbar = ({ path }) => {
	console.log('path', path);
	return (
		<Box as="nav" position="fix" w="100%">
			<Container
				maxW="container.md"
				display="flex"
				align="center"
				justify="space-around"
			>
				<Box>Logo</Box>
				<Box>ssss</Box>
			</Container>
		</Box>
	);
};

export default Navbar;
