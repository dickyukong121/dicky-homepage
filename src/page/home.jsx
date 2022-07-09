import React from 'react';
// import api from '../../api/api';
// import InfiniteScroll from 'react-infinite-scroll-component';
import { Box, Heading, Spacer, VStack } from '@chakra-ui/react';
import ImageComponent from '../component/image';
import IntroComponent from '../component/intro';
import BioComponent from '../component/bio';
// import BookComponent from '../../component/book-component/book-component';
// import { useNavigate } from 'react-router-dom';

function HomePage() {
  // const navigate = useNavigate();

  // const [items, setItems] = useState([]);
  // const [hasMore, setHasMore] = useState(true);
  // const [skipNumber, setSkipNumber] = useState(0);

  return (
    <div className="homepage">
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
      <VStack>
        <Box flexGrow={1} mt={3}>
          <Heading as="h2" variant="page-title">
            Dicky Kong
          </Heading>
          <p align="center">Full Stack Developer</p>
        </Box>
        <Spacer />
        <IntroComponent />
        <Spacer />
        <BioComponent />
        <Spacer />
        <BioComponent />
      </VStack>
    </div>
  );
}

export default HomePage;
