import { Box, Container, Flex, Grid, GridItem, Heading, Text, VStack, useColorMode, IconButton } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW="container.xl" p={4}>
      <Flex justifyContent="space-between" alignItems="center" mb={4}>
        <Heading as="h1" size="lg">Car Dealer Dashboard</Heading>
        <IconButton
          aria-label="Toggle dark mode"
          icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
          onClick={toggleColorMode}
        />
      </Flex>
      <Grid templateColumns="repeat(12, 1fr)" gap={4}>
        <GridItem colSpan={{ base: 12, md: 6, lg: 3 }}>
          <Box bg="gray.700" p={4} borderRadius="md">
            <Text fontSize="xl" color="white">Sales Performance</Text>
          </Box>
        </GridItem>
        <GridItem colSpan={{ base: 12, md: 6, lg: 3 }}>
          <Box bg="gray.700" p={4} borderRadius="md">
            <Text fontSize="xl" color="white">Sales Throughout Time</Text>
          </Box>
        </GridItem>
        <GridItem colSpan={{ base: 12, md: 6, lg: 3 }}>
          <Box bg="gray.700" p={4} borderRadius="md">
            <Text fontSize="xl" color="white">Total Salesforce</Text>
          </Box>
        </GridItem>
        <GridItem colSpan={{ base: 12, md: 6, lg: 3 }}>
          <Box bg="gray.700" p={4} borderRadius="md">
            <Text fontSize="xl" color="white">Active Salesforce</Text>
          </Box>
        </GridItem>
        <GridItem colSpan={{ base: 12 }}>
          <Box bg="gray.700" p={4} borderRadius="md">
            <Text fontSize="xl" color="white">Agent Tree</Text>
          </Box>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Index;