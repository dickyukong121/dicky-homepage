import React from 'react';

import {
  Box,
  Button,
  Container,
  Heading,
  Link,
  LinkBox,
  LinkOverlay,
  Spacer,
  Stack,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#f5a8a840', '#3636a280')}
      style={{ backdropFilter: 'blur(20px)' }}
      zIndex={1}
      mb={10}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.lg"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        {/* Button to Homepage */}
        <Heading as="h1" size="lg">
          <LinkBox>
            <LinkOverlay href="/">Dicky Kong</LinkOverlay>
          </LinkBox>
        </Heading>
        <Stack
          direction={{ base: 'row', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          spacing={9}
          ml={10}
          mt={{ base: 4, nmd: 0 }}
        >
          <Link href="/works">Works</Link>
          <Link href="/music">My favorite music</Link>
          <Link target="_blank" href="https://github.com/dickyukong121">
            My Github
          </Link>
        </Stack>
        <Spacer />
        {/* Color Mode Switch */}
        <Box display="flex" ml={100} align="left">
          <Button onClick={toggleColorMode}>
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
