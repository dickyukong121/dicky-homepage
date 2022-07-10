import React from 'react';
import { Box, Container, Heading } from '@chakra-ui/react';
import styled from '@emotion/styled';

const BioYear = styled(Box)`
  font-weight: bold;
  min-width: 66px
`;

const BioSection = styled(Box)`
  display: flex;
`;

const BioComponent = () => {
  return (
    <Container >
      <Heading
        as="h5"
        fontSize={20}
        variant="section-title"
        textDecorationLine={'underline'}
        textDecorationColor={'#525252'}
        textDecorationThickness={3}
        textUnderlineOffset={5}
        mb={2}
      >
        Bio
      </Heading>
      <Box>
        <BioSection>
          <BioYear>1994</BioYear>
          <Box>Born in Hong Kong</Box>
        </BioSection>
        <BioSection>
          <BioYear>2017</BioYear>
          <Box>
            Graduated from Electrical Engineering in The Hong Kong Polytechnic
            University
          </Box>
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          <Box>Worked as <strong>Application Consultant</strong> in Forida Limited</Box>
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          <Box>
            Worked as <strong>Software Engineer</strong> in Scan Technology(Equipment) Limited
          </Box>
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          <Box>Worked as <strong>Full Stack Developer</strong> in Arwin Technology Limited</Box>
        </BioSection>
      </Box>
    </Container>
  );
};
export default BioComponent;
