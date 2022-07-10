import React from 'react';
// import api from '../../api/api';
// import InfiniteScroll from 'react-infinite-scroll-component';
import { Box, Heading, VStack } from '@chakra-ui/react';
// import BookComponent from '../../component/book-component/book-component';
// import { useNavigate } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="homepage">
      <VStack>
        <Box flexGrow={1} mt={3}>
          <Heading as="h2" variant="page-title">
            Not Found
          </Heading>
          <p align="center">The page is not found!</p>
        </Box>
      </VStack>
    </div>
  );
}

export default NotFoundPage;
