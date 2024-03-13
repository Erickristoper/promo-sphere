"use client";

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import {
  FcAbout,
  FcAssistant,
  FcCollaboration,
  FcDonate,
  FcManager,
} from "react-icons/fc";

interface CardProps {
  heading: string;
  description: string;
  icon: ReactElement;
  href: string;
}

const Card = ({ heading, description, icon, href }: CardProps) => {
  return (
    <Box
      maxW={{ base: "full", md: "275px" }}
      w={"full"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
    >
      <Stack align={"start"} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          bg={useColorModeValue("gray.100", "gray.700")}
        >
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={"sm"}>
            {description}
          </Text>
        </Box>
        <Button variant={"link"} colorScheme={"blue"} size={"sm"}>
          Learn more
        </Button>
      </Stack>
    </Box>
  );
};

export default function GridListWith() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
          Supercharge Your Growth
        </Heading>
        <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
          PromoSphere understands the challenges businesses face in today's
          competitive market. Here are five key areas where PromoSphere's
          expertise can help you achieve explosive growth:
        </Text>
      </Stack>

      <Container maxW={"5xl"} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={"Boost Brand Awareness"}
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            description={
              "Get noticed! We craft targeted campaigns to reach the right audience, build recognition, and forge lasting connections."
            }
            href={"#"}
          />
          <Card
            heading={"Drive Sales & Conversions"}
            icon={<Icon as={FcCollaboration} w={10} h={10} />}
            description={
              "Don't just attract, convert! Our campaigns turn interest into action, boosting website traffic, leads, and ultimately, sales."
            }
            href={"#"}
          />
          <Card
            heading={"Build Customer Loyalty"}
            icon={<Icon as={FcDonate} w={10} h={10} />}
            description={
              "Keep them coming back! We help you nurture leads into loyal brand advocates with engaging customer experiences."
            }
            href={"#"}
          />
          <Card
            heading={"Measurable Results & ROI Tracking"}
            icon={<Icon as={FcManager} w={10} h={10} />}
            description={
              "Data is king! We track key metrics to show the real impact of your campaigns and optimize for success."
            }
            href={"#"}
          />
          <Card
            heading={"Experienced & Passionate Team"}
            icon={<Icon as={FcAbout} w={10} h={10} />}
            description={
              "You're in good hands! Our team of marketing professionals are dedicated to understanding your needs and developing customized solutions that deliver results."
            }
            href={"#"}
          />
        </Flex>
      </Container>
    </Box>
  );
}
