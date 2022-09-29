import {
  Box,
  Image,
  Text,
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
} from "@chakra-ui/react";
import "../App.css";
import { SearchBox } from "../Components/SearchBox";
import { Adslider } from "../Components/Slider";
import { Search } from "../Icon/loginicon";

export const Home = ({ value, handleChange, onClick }) => {
  return (
    <>
      <Box h="170px"></Box>
      <Box className="homediv">
        <Heading margin={"auto"} width={700} as="h3" size="md" fontWeight={600}>
          What are you looking for ?
        </Heading>
        <InputGroup
          border={"0px solid white"}
          margin={"auto"}
          width={{ base: "200px", sm: "450px", lg: "700px" }}
          // size="md"
        >
          <InputLeftAddon
            fontSize={{ base: "xsm", sm: "xsm", md: "md", lg: "mg" }}
            className="inputgrp"
            children={<Search />}
            background="white"
          />
          <Input
            value={value}
            onChange={handleChange}
            className="inputgrp"
            fontSize={{ base: "xsm", sm: "xsm", md: "md", lg: "mg" }}
            placeholder="Search Medicines/Healthcare products"
          />
          <InputRightAddon
            background={"white"}
            onClick={onClick}
            fontSize={"md"}
            className="inputgrp"
            children={
              <Button
                borderRadius={20}
                fontSize={{ base: "12px", sm: "14px", lg: "16px" }}
                color={"white"}
                _hover={{ background: "#10847e" }}
                background={"#10847e"}
                width={{ base: "50px", sm: "70px", lg: "100px" }}
              >
                Search
              </Button>
            }
          />
        </InputGroup>
        <Flex mt={10} gap={9} textAlign="center">
          <Box
            borderRadius={10}
            _hover={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px;" }}
          >
            <Image
              padding={4}
              width={40}
              src="https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=256x0"
            />
            <Text>Medicine</Text>
            <Text color={"red"} fontSize="12px" fontWeight={600}>
              UPTO 20% OFF
            </Text>
          </Box>
          <Box
            borderRadius={10}
            _hover={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px;" }}
          >
            <Image
              padding={4}
              width={40}
              src="https://assets.pharmeasy.in/apothecary/images/labtest_ff.webp?dim=256x0"
            />
            <Text>Lab Tests</Text>
            <Text color={"red"} fontSize="12px" fontWeight={600}>
              UPTO 70% OFF
            </Text>
          </Box>
          <Box
            borderRadius={10}
            _hover={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px;" }}
          >
            <Image
              padding={4}
              width={40}
              src="https://assets.pharmeasy.in/apothecary/images/healthcare_ff.webp?dim=256x0"
            />
            <Text>Healthcare</Text>
            <Text color={"red"} fontSize="12px" fontWeight={600}>
              UPTO 60% OFF
            </Text>
          </Box>
          <Box
            borderRadius={10}
            _hover={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px;" }}
          >
            <Image
              padding={4}
              width={40}
              src="https://assets.pharmeasy.in/apothecary/images/health_blogs_ff.webp?dim=256x0"
            />
            <Text>Health Blogs</Text>
            <Text color={"red"} fontSize="12px" fontWeight={600}></Text>
          </Box>
          <Box
            borderRadius={10}
            _hover={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px;" }}
          >
            <Image
              padding={4}
              width={40}
              src="https://assets.pharmeasy.in/apothecary/images/plus_ff.webp?dim=256x0"
            />
            <Text>PLUS</Text>
            <Text color={"red"} fontSize="12px" fontWeight={600}>
              SAVE 5% EXTRA
            </Text>
          </Box>
          <Box
            borderRadius={10}
            _hover={{
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;",
            }}
          >
            <Image
              padding={4}
              width={40}
              src="https://assets.pharmeasy.in/apothecary/images/offers_ff.webp?dim=256x0"
            />
            <Text>Offers</Text>
            <Heading></Heading>
          </Box>
          <Box
        
            borderRadius={10}
            _hover={{
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;",
            }}
          >
            <Image
              padding={4}
              width={40}
              src="https://assets.pharmeasy.in/apothecary/images/offers_1_ff.webp?dim=256x0"
            />
            <Text>Surgeries</Text>
            <Heading></Heading>
          </Box>
        </Flex>
        <Heading>Offers Just for You</Heading>
        <Box mt={8}>
          <Flex   padding={2} gap={5}>
            <Box
            
              _hover={{
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;",
              }}
              borderRadius={10}
              border={"1px solid lightgrey"}
              padding={7}
            >
              <Flex gap={4}>
                <Image
                  borderRadius={5}
                  src="https://cms-contents.pharmeasy.in/offer/028f38c99b9-PELOGO.jpg?dim=1440x0"
                  width={20}
                />
                <Text fontSize={"sm"}>
                  Flat 25% off on first 3 medicine orders{"   "}
                </Text>
              </Flex>
            </Box>
            <Box
           
              _hover={{
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;",
              }}
              borderRadius={10}
              border={"1px solid lightgrey"}
              padding={7}
            >
              <Flex gap={4}>
                <Image
                  borderRadius={5}
                  src="https://cms-contents.pharmeasy.in/offer/5ff570b46e0-PELOGO.jpg?dim=1440x0"
                  width={20}
                />
                <Text fontSize={"sm"}>
                  Flat 27% off + up to Rs.5000 surprise cashback{" "}
                </Text>
              </Flex>
            </Box>
            <Box
            
              _hover={{
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;",
              }}
              borderRadius={10}
              border={"1px solid lightgrey"}
              padding={7}
            >
              <Flex gap={4}>
                <Image
                  borderRadius={5}
                  src="https://cms-contents.pharmeasy.in/offer/41232b873a8-PELOGO.jpg?dim=1440x0"
                  width={20}
                />
                <Text fontSize={"sm"}>
                  Additional 15% cashback on 1st medicine{" "}
                </Text>
              </Flex>
            </Box>
          </Flex>
        </Box>
        <Flex></Flex>
      </Box>
      <Adslider />
    </>
  );
};
