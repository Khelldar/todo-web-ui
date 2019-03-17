import React from 'react';
import { Flex, Box, Text } from 'rebass';

export const Error: React.FC<{ error: any }> = ({ error }) => {
  return (
    <Flex flexWrap="wrap" alignItems="center">
      <Box width={1} px={2}>
        <Text p={1} textAlign="center">
          <h1>ERROR</h1>
          <h2>Someone broke the API.</h2>
        </Text>
      </Box>
      <Box width={1} px={80}>
        <Text p={1} textAlign="center">
          <img src="https://www.google.com/images/errors/robot.png" alt="error" />
        </Text>
      </Box>
      <Box width={1} px={2}>
        <Text p={1} bg="">
          <pre>
            <code>{JSON.stringify(error, null, 2)}</code>
          </pre>
        </Text>
      </Box>
    </Flex>
  );
};
