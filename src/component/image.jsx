import { Box, Image } from '@chakra-ui/react';
import React from 'react';
// import ProfileAsuka from '../../image/profile-asuka.jpg';
// import ProfileMe from '../../image/profile-me.jpg'
import ProfileHair from '../image/profile-hair.jpg';

const ImageComponent = React.memo(() => {
  return (
    <Box align="center" display={{ base: 'none', md: 'block' }}>
      <Image
        src={ProfileHair}
        boxSize="300px"
        borderWidth={5}
        objectFit={'cover'}
      />
    </Box>
  );
});

export default ImageComponent;
