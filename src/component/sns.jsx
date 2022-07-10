import React from 'react';
import {
  Box,
  Button,
  Container,
  Heading,
  Link,
  List,
  ListItem,
  Spacer
} from '@chakra-ui/react';

const SNSComponent = () => {
  return (
    <Container>
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
        My SNS
      </Heading>
      {/* <Text>
        I am Dicky, working as a full-stack developer in Hong Kong. Graduated
        from Engineering School in 2017, I worked for several companies in
        different industries. Starting from C#, I develop my skills in web
        development, including MERN Stack (MongoDB, Express.js, React.js,
        node.js).
      </Text> */}
      <Box>
        <List>
          <ListItem>
            <Link href="https://github.com/dickyukong121" target='_blank'>
              <Button variant="ghost" colorScheme="teal" p={0}>
                Github
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/dicky-kong-870246146/" target='blank'>
              <Button variant="ghost" colorScheme="teal" p={0}>
                LinkedIn
              </Button>
            </Link>
          </ListItem>
        </List>
      </Box>
      <Spacer />
      {/* <Text>
        Apart from programming, Soccer and Guitar are always my favorite. I am
        an otaku in Japanese Drama and Japnese Music, especially JRock.
      </Text> */}
    </Container>
  );
};
export default SNSComponent;
