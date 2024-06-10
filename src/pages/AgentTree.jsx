import { Box, Container, Flex, Grid, GridItem, Heading, Text, VStack, useColorMode, IconButton } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

const AgentTree = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW="container.xl" p={4}>
      <Flex justifyContent="space-between" alignItems="center" mb={4}>
        <Heading as="h1" size="lg">Agent Tree</Heading>
        <IconButton
          aria-label="Toggle dark mode"
          icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
          onClick={toggleColorMode}
        />
      </Flex>
      <Grid templateColumns="repeat(12, 1fr)" gap={4}>
        <GridItem colSpan={{ base: 12 }}>
          <Box bg="gray.700" p={4} borderRadius="md">
            <Text fontSize="xl" color="white">Dianne Russell</Text>
            <Text color="white">Level 0</Text>
          </Box>
        </GridItem>
        <GridItem colSpan={{ base: 12 }}>
          <Box bg="gray.700" p={4} borderRadius="md">
            <Text fontSize="xl" color="white">Esther Howard</Text>
            <Text color="white">Level 1</Text>
          </Box>
        </GridItem>
        <GridItem colSpan={{ base: 12 }}>
          <Box bg="gray.700" p={4} borderRadius="md">
            <Text fontSize="xl" color="white">Theresa Webb</Text>
            <Text color="white">Level 2</Text>
          </Box>
        </GridItem>
        <GridItem colSpan={{ base: 12 }}>
          <Box bg="gray.700" p={4} borderRadius="md">
            <Text fontSize="xl" color="white">Annette Black</Text>
            <Text color="white">Level 3</Text>
          </Box>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default AgentTree;