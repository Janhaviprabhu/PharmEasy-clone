import { Flex,Image,Box, Heading, Input, InputGroup, InputLeftAddon, InputRightAddon } from "@chakra-ui/react";
import { Search } from "../Icon/loginicon";
import "../Styles/medicine.css"

export const SearchBox = ({handleChange,value,onClick}) => {
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
              fontSize={{ base: "xsm", sm: "xsm", md: "md", lg: "mg" }}
              className="inputgrp"
              children="Select Pincode"
            />
            <Input
              value={value}
              onChange={handleChange}
              className="inputgrp"
              variant="filled"
              fontSize={{ base: "xsm", sm: "xsm", md: "md", lg: "mg" }}
              placeholder="Search Medicines/Healthcare products"
            />
            <InputRightAddon
              onClick={onClick}
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
