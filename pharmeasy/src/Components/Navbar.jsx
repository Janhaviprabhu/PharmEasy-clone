import { Box, HStack,Image,Heading, Icon,Flex } from "@chakra-ui/react"
import {ChevronDownIcon } from "@chakra-ui/icons"
import "../Styles/navbar.css"
import { Carticon, Loginicon, Offerinicon } from "../Icon/loginicon";
import { Link } from "react-router-dom";

export const Navbar=()=>{
    return (
      <>
        <HStack className="nav-flex">
          <HStack className="left-div">
            <Box>
              <Image
                src="https://assets.pharmeasy.in/apothecary/images/logo_big.svg?dim=256x0"
                alt="pharmEasy"
              />
            </Box>
            <Box className="line"></Box>
            <Box>
              <HStack>
                <Image
                  src="https://assets.pharmeasy.in/apothecary/images/ic_express%20delivery.svg?dim=16x0"
                  alt="image"
                />
                <Box>Express delivery to</Box>
              </HStack>
              <Heading as="h6" size="xs">
                Select pincode <Icon as={ChevronDownIcon}></Icon>
              </Heading>
            </Box>
          </HStack>
          <HStack className="right-div">
            <Flex className="loginflex" ><Loginicon/>
              <Link>Hello , Log in</Link>
            </Flex>
            <Flex className="offerflex" ><Offerinicon/>
              <Link>Offers</Link>
            </Flex>
            <Flex className="cartflex"><Carticon/>
              <Link>Cart</Link>
            </Flex>
          </HStack>
        </HStack>
      </>
    );
}