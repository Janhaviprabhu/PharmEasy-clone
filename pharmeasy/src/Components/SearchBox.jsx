import { Flex,Image,Box, Heading, Input, InputGroup, InputLeftAddon, InputRightAddon } from "@chakra-ui/react";
import { Search } from "../Icon/loginicon";
import "../Styles/medicine.css"

export const SearchBox = () => {
  return (
    <>
      <Flex mt={6}>
        <Box className="searchCard">
          <Flex className="offers">
            <Box>
              <Flex className="offersinnerdiv">
                <Box>
                  <Image
                    src="https://assets.pharmeasy.in/web-assets/_next/icons/valuePropDisc.svg"
                    alt="off"
                  />
                </Box>
                <Box fontSize={"xs"}>Flat 15% Off</Box>
              </Flex>
            </Box>
            <Box>
              <Flex className="offersinnerdiv">
                <Box>
                  <Image src="https://assets.pharmeasy.in/web-assets/_next/icons/valuePropProd.svg" />
                </Box>
                <Box fontSize={"xs"}>1 Lakh+ Products</Box>
              </Flex>
            </Box>
            <Box>
              <Flex className="offersinnerdiv">
                <Box>
                  <Image src="https://assets.pharmeasy.in/web-assets/_next/icons/valuePropReturn.svg" />
                </Box>
                <Box fontSize={"xs"}>1 Lakh+ Products</Box>
              </Flex>
            </Box>
          </Flex>
          <Heading className="heading" as={"h6"} size={"md"}>
            Search for Medicines / Healthcare Products
          </Heading>
          <InputGroup size="lg">
            <InputLeftAddon
              fontSize={"md"}
              className="inputgrp"
              children="Select Pincode"
            />
            <Input
              className="inputgrp"
              variant="filled"
              fontSize={"md"}
              placeholder="Search Medicines/Healthcare products"
            />
            <InputRightAddon
              fontSize={"md"}
              className="inputgrp"
              children={<Search />}
            />
          </InputGroup>
        </Box>
        <Box></Box>
      </Flex>
    </>
  );
};
