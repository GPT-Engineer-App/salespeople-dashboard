import { Box, Container, Flex, Grid, GridItem, Heading, Text, VStack, useColorMode, IconButton } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

const SalesPerformance = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW="container.xl" p={4}>
      <Flex justifyContent="space-between" alignItems="center" mb={4}>
        <Heading as="h1" size="lg">Arista Insurance Sales Performance</Heading>
        <IconButton
          aria-label="Toggle dark mode"
          icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
          onClick={toggleColorMode}
        />
      </Flex>
      <Grid templateColumns="repeat(12, 1fr)" gap={4}>
        <GridItem colSpan={{ base: 12, md: 6, lg: 3 }}>
          <Box bg="yellow.300" p={4} borderRadius="md">
            <Text fontSize="xl">Rp 200M</Text>
            <Text>Total Premium (YTD)</Text>
          </Box>
        </GridItem>
        <GridItem colSpan={{ base: 12, md: 6, lg: 3 }}>
          <Box bg="yellow.300" p={4} borderRadius="md">
            <Text fontSize="xl">Rp 120M</Text>
            <Text>Total Premium (MTD)</Text>
          </Box>
        </GridItem>
        <GridItem colSpan={{ base: 12, md: 6, lg: 3 }}>
          <Box bg="yellow.300" p={4} borderRadius="md">
            <Text fontSize="xl">250 Unit</Text>
            <Text>Total Policy Sold (MTD)</Text>
          </Box>
        </GridItem>
        <GridItem colSpan={{ base: 12, md: 6, lg: 3 }}>
          <Box bg="yellow.300" p={4} borderRadius="md">
            <Text fontSize="xl">50 Unit</Text>
            <Text>Total Unpaid Policy (MTD)</Text>
          </Box>
        </GridItem>
        <GridItem colSpan={{ base: 12 }}>
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
        <GridItem colSpan={{ base: 12, md: 6, lg: 3 }}>
          <Box bg="gray.700" p={4} borderRadius="md">
            <Text fontSize="xl" color="white">Total Commission</Text>
          </Box>
        </GridItem>
        <GridItem colSpan={{ base: 12, md: 6, lg: 3 }}>
          <Box bg="gray.700" p={4} borderRadius="md">
            <Text fontSize="xl" color="white">Total Point</Text>
          </Box>
        </GridItem>
        <GridItem colSpan={{ base: 12 }}>
          <Box bg="gray.700" p={4} borderRadius="md">
            <Text fontSize="xl" color="white">Contributing Branches</Text>
          </Box>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default SalesPerformance;