import { Box, HStack, Image, Heading, Icon, Flex } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import "../Styles/navbar.css";
import { Carticon, Loginicon, Offerinicon } from "../Icon/loginicon";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export const Navbar = () => {
  // const [scroll,setScroll]=useState(false)
  // const handleScroll=()=>{
  //  if(window.scrollY>100){
  //   setScroll(true)
  //  }else{
  //   setScroll(false)
  //  }
  // }
  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  return (
    <>
      <div className="navbar">
        <HStack  className="nav-flex">
          <HStack className="left-div">
            <Box>
              <Link to="/">
                <Image
                  src="https://assets.pharmeasy.in/apothecary/images/logo_big.svg?dim=256x0"
                  alt="pharmEasy"
                />
              </Link>
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
          <HStack className="right-div" bg='white'>
            <Flex className="loginflex">
              <Loginicon />
              <Link>Hello , Log in</Link>
            </Flex>
            <Flex className="offerflex">
              <Offerinicon />
              <Link>Offers</Link>
            </Flex>
            <Flex className="cartflex">
              <Carticon />
              <Link>Cart</Link>
            </Flex>
          </HStack>
        </HStack>
        <Box className="categorynavbox">
          <HStack className="categoriesnav">
            <Heading fontWeight={500} size="xs">
              <Link to="/medicines">Medicines</Link>
            </Heading>
            <Heading fontWeight={500} size="xs">
              Lab Tests
            </Heading>
            <Heading fontWeight={500} size="xs">
              Health Care
            </Heading>
            <Heading fontWeight={500} size="xs">
              Health Blogs
            </Heading>
            <Heading fontWeight={500} size="xs">
              {" "}
              PLUS
            </Heading>
            <Heading fontWeight={500} size="xs">
              Offers
            </Heading>
            <Heading fontWeight={500} size="xs">
              Surgeries
            </Heading>
            <Heading fontWeight={500} size="xs">
              Value Store
            </Heading>
          </HStack>
        </Box>
      </div>
    </>
  );
};
