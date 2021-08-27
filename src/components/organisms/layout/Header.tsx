import { Box, Flex, Heading } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { Link } from "react-router-dom";

export const Header: VFC = memo(() => {
  return (
    <Flex>
      <Flex>
        <Heading as="h1" fontSize={{ base: "md" }}>
          動画レビューアプリ
        </Heading>
      </Flex>
      <Flex>
        <Box>
          <Link to="/home">Home</Link>
        </Box>
      </Flex>
      <Flex>
        <Box>
          <Link to="/setting">Setting</Link>
        </Box>
      </Flex>
    </Flex>
  );
});
