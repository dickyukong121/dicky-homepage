import React from 'react';
import { Text, Spacer, Heading, Container } from '@chakra-ui/react';

const IntroComponent = () => {
  return (
    <Container>
      <Heading
        fontSize={20}
        variant="section-title"
        textDecorationLine={'underline'}
        textDecorationColor={'#525252'}
        textDecorationThickness={3}
        textUnderlineOffset={5}
        mb={2}
      >
        Intro
      </Heading>
      <Text>
        I am Dicky, working as a full-stack developer in Hong Kong. Graduated
        from Engineering School in 2017, I worked for several companies in
        different industries. Starting from C#, I develop my skills in web
        development, including MERN Stack (MongoDB, Express.js, React.js,
        node.js).
      </Text>
      <Spacer />
      <Text>
        Apart from programming, Soccer and Guitar are always my favorite. I am
        an otaku in Japanese Drama and Japnese Music, especially JRock.
      </Text>
    </Container>
  );
};
export default IntroComponent;
