import React from "react";
import {
  Box,
  Heading,
  VStack,
  Grid,
  theme,
  Text,
  Button,
} from "@chakra-ui/react";

const PromoSphere = () => {
  return (
    <Box textAlign="center" fontSize="xl" color={theme.colors.gray[800]}>
      <Heading>Welcome to PromoSphere.com.ph</Heading>
      <Text mt={4}>Your one-stop shop for all your marketing needs.</Text>

      <Grid
        mt={8}
        templateColumns="repeat(auto-fit, minmax(300px, 1fr))"
        gap={6}
      >
        <Box bg={theme.colors.gray[100]} p={4} rounded="lg">
          <Heading as="h3" size="md">
            Boost Brand Awareness
          </Heading>
          <Text mt={2}>
            We help you develop creative strategies and campaigns to get your
            brand noticed.
          </Text>
          <Button mt={4} colorScheme="teal">
            Learn More
          </Button>
        </Box>
        <Box bg={theme.colors.gray[100]} p={4} rounded="lg">
          <Heading as="h3" size="md">
            Drive Sales & Conversions
          </Heading>
          <Text mt={2}>
            Increase website traffic, leads, and sales with targeted marketing
            campaigns.
          </Text>
          <Button mt={4} colorScheme="blue">
            Learn More
          </Button>
        </Box>
        <Box bg={theme.colors.gray[100]} p={4} rounded="lg">
          <Heading as="h3" size="md">
            Build Customer Loyalty
          </Heading>
          <Text mt={2}>
            Create lasting relationships with your customers through engaging
            marketing strategies.
          </Text>
          <Button mt={4} colorScheme="purple">
            Learn More
          </Button>
        </Box>
      </Grid>

      <VStack mt={16} spacing={8}>
        <Text fontWeight="bold">Why Choose PromoSphere?</Text>
        <Text>
          - Experienced and passionate marketing team
          <br />
          - Data-driven approach to marketing campaigns
          <br />
          - Customized solutions for your unique needs
          <br />- Measurable results and ROI tracking
        </Text>
        <Button size="lg" colorScheme="green">
          Get a Free Quote
        </Button>
      </VStack>
    </Box>
  );
};

export default PromoSphere;
