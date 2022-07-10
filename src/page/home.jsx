import React from 'react';
import { Box, Heading, VStack } from '@chakra-ui/react';
import ImageComponent from '../component/image';
import IntroComponent from '../component/intro';
import BioComponent from '../component/bio';
import SNSComponent from '../component/sns';

function HomePage() {
  return (
    <>
      <Box
        borderRadius="lg"
        bg="#0ABAB5"
        p={3}
        mt={6}
        mb={6}
        letterSpacing="wide"
        fontWeight="semibold"
        align="center"
      >
        Hello, I am Dicky, a full stack developer.
      </Box>
      <ImageComponent />
      <VStack maxW={'container.lg'} spacing={10}>
        <Box flexGrow={2} mt={3}>
          <Heading as="h2" variant="page-title">
            Dicky Kong
          </Heading>
          <p align="center">Full Stack Developer</p>
        </Box>
        <IntroComponent />
        <BioComponent />
        <SNSComponent />
      </VStack>
    </>
  );
}

export default HomePage;
