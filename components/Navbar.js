import NextLink from 'next/link';
import { Box, Container, Flex, Stack, Heading, Link, useColorModeValue } from '@chakra-ui/react';

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
  return (
    <NextLink href={href} passHref scroll={false}>
      <Link
        p={2}
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
            LOGO
          </Heading>
        </Flex>
        {/* <Stack
          flexDirection={{ base: 'columm', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          justifyContent="center"
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        > */}
          <LinkItem href="/about" path={path}>
            about
          </LinkItem>
          <LinkItem href="/works" path={path}>
            works
          </LinkItem>
          <LinkItem href="https://github.com/abe1272001/abe.com/tree/main">
            github
          </LinkItem>
        {/* </Stack> */}
        <Box>mode</Box>
      </Container>
    </Box>
  );
};

export default Navbar;
