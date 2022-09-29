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
        <HStack
          gap={{ base: "0px", sm: "200px", lg: "660px" }}
          className="nav-flex"
        >
          <Flex className="left-div">
            <Box width={{ base: "150px" }}>
              <Link to="/">
                <Image
                  width={{ base: "100px", sm: "100px", lg: "150px" }}
                  height={{ base: "60px" }}
                  src="https://assets.pharmeasy.in/apothecary/images/logo_big.svg?dim=256x0"
                  alt="pharmEasy"
                />
              </Link>
            </Box>
            <Box className="line"></Box>
            <Box>
              <Flex fontSize={{ base: "12px", sm: "13px", lg: "12px" }}>
                <Image
                width={"auto"}
                  src="https://assets.pharmeasy.in/apothecary/images/ic_express%20delivery.svg?dim=16x0"
                  alt="image"
                />
                <Box>Express delivery to</Box>
              </Flex>
              <Heading as="h6" size="xs">
                Select pincode <Icon as={ChevronDownIcon}></Icon>
              </Heading>
            </Box>
          </Flex>
          <Flex
            fontSize={{ base: "12px", sm: "13px", lg: "15px" }}
            className="right-div"
            bg="white"
          >
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
          </Flex>
        </HStack>
        <Box className="categorynavbox">
          <Flex ml={{base:"5px",sm:"50px",lg:"330px"}} className="categoriesnav">
            <Heading fontWeight={500} size="xs">
              <Link to="/medicines">Medicines</Link>
            </Heading>
            <Heading fontWeight={500} size="xs">
              <Link>Lab Tests</Link>
            </Heading>
            <Heading fontWeight={500} size="xs">
              <Link>Healthcare</Link>
            </Heading>
            <Heading fontWeight={500} size="xs">
              <Link>Health Blogs
              </Link>
            </Heading>
            <Heading fontWeight={500} size="xs">
              <Link>PLUS</Link>
            </Heading>
            <Heading fontWeight={500} size="xs">
             <Link>Offers</Link>
            </Heading>
            <Heading fontWeight={500} size="xs">
              <Link>Surgeries</Link>
            </Heading>
            <Heading fontWeight={500} size="xs">
              <Link>Value Store</Link>
            </Heading>
          </Flex>
        </Box>
      </div>
    </>
  );
};
