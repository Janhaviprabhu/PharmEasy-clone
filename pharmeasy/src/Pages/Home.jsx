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
  GridItem,
  Grid,
} from "@chakra-ui/react";
import { useState } from "react";
import "../App.css";


import { Adslider } from "../Components/Slider";
import { Search } from "../Icon/loginicon";

export const Home = () => {
   const [value, setValue] = useState("");
    const [data, setData] = useState([]);
     const [boxval, setBoxval] = useState(true);
    const getData = (query) => {
      fetch(`http://localhost:3000/medicines?q=${query}`)
        .then((res) => res.json())
        .then((res) => {
          setData(res);
          console.log(res);
          setValue("");
          setBoxval(true);
        })
        .catch((err) => {
          console.log(err);
        });
    };
      const handleChange = (e) => {
        const { value } = e.target;
        setValue(value);
        setBoxval(true);
        console.log(value);
      };
  return (
    <>
      <Box h="170px"></Box>
      <Box className="homediv">
        <Heading margin={"auto"} width={700} as="h3" size="lg" fontWeight={600}>
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
            onClick={() => getData(value)}
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
        <Box padding={4} margin={"auto"} width={"555px"}>
          {value}
        </Box>
        <Box ml={"300px"}>
          {data.map((ele) => (
            <Flex key={ele.id} padding={10} alignItems={"center"} gap={10}>
              <Image
                src={ele.img}
                width={{ base: "10", sm: "20", md: "30", lg: "40" }}
              />
              <Box>{ele.title}</Box>
            </Flex>
          ))}
        </Box>
        <Flex ml={20} mt={10} gap={9} textAlign="center">
          <Box
            borderRadius={10}
            _hover={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px;" }}
          >
            <Image
              padding={4}
              width={40}
              src="https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=256x0"
            />

            {/* .........................................Categories................................................ */}
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
        <Adslider />
        {/* ..........................................offers Just for You........... */}
        <Heading fontWeight={500} mt={20} as="h3" size="lg">
          Offers Just for You
        </Heading>
        <Grid
          gap={8}
          gridTemplateColumns={{
            base: "repeat(1,1fr)",
            sm: "repeat(3,1fr)",
            lg: "repeat(3,1fr",
          }}
          fontSize={{ base: "12px", sm: "12px", lg: "14px" }}
        >
          <GridItem
            mt={10}
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
          </GridItem>
          <GridItem
            mt={10}
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
          </GridItem>
          <GridItem
            mt={10}
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
          </GridItem>
        </Grid>
        {/* ..............shop by categories........................... */}
        <Heading fontWeight={500} as="h3" size="lg" mt={20}>
          Shop By Categories
        </Heading>
        <Grid
          mt={10}
          ml={9}
          templateColumns={{
            base: "repeat(2, 1fr)",
            sm: "repeat(4, 1fr)",
            lg: "repeat(7, 1fr)",
          }}
        >
          <GridItem>
            <Box width={130}>
              <Image
                borderRadius={8}
                border={"1px solid lightgrey"}
                padding={2}
                _hover={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;",
                }}
                width={130}
                src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/6d462f424a43372ea8b7b6f8ca13e052.png?f=png?dim=256x0"
              />
              <Text mt={4}>Covid essentials</Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box>
              <Image
                borderRadius={8}
                border={"1px solid lightgrey"}
                padding={2}
                _hover={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;",
                }}
                width={130}
                src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/9f446c0e74273d70b0baf85e4ff0f76a.png?f=png?dim=256x0"
              />
              <Text mt={4}>Personal care</Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box>
              <Image
                borderRadius={8}
                border={"1px solid lightgrey"}
                padding={2}
                _hover={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;",
                }}
                width={130}
                src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/aace6d1f0dc03f1f8c6e26dd880e1934.png?f=png?dim=256x0"
              />
              <Text mt={4} width={40}>
                Health food and drinks
              </Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box>
              <Image
                borderRadius={8}
                border={"1px solid lightgrey"}
                padding={2}
                _hover={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;",
                }}
                width={130}
                src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/3c7ab4d29c6631f7a5cb7eafd3bfbc79.png?f=png?dim=256x0"
              />
              <Text mt={4}>Beauty</Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box>
              <Image
                borderRadius={8}
                border={"1px solid lightgrey"}
                padding={2}
                _hover={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;",
                }}
                width={140}
                src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/9b3ad6971475304e9e1614ac30d4545a.png?f=png?dim=256x0"
              />
              <Text mt={4}>Skin care</Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box>
              <Image
                borderRadius={8}
                border={"1px solid lightgrey"}
                padding={2}
                _hover={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;",
                }}
                width={130}
                src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/dc96175686f135b5a22d1e57165d0246.png?f=png?dim=256x0"
              />
              <Text mt={4}>Home care</Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box>
              <Image
                borderRadius={8}
                border={"1px solid lightgrey"}
                padding={2}
                _hover={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;",
                }}
                width={130}
                src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/ecad9a974e003fb987858b3ee81413c6.png?f=png?dim=256x0"
              />
              <Text mt={4}>Ayurvedic care</Text>
            </Box>
          </GridItem>
        </Grid>
        {/* ................................New Launches............................................................ */}
        <Heading fontWeight={500} as="h3" size="lg" mt={20}>
          New Launches
        </Heading>
        <Text mt={3} color={"grey"}>
          New wellness range just for you!
        </Text>
        <Grid
          fontSize={14}
          mt={10}
          ml={9}
          templateColumns={{
            base: "repeat(2, 1fr)",
            sm: "repeat(4, 1fr)",
            lg: "repeat(7, 1fr)",
          }}
        >
          <GridItem>
            <Box width={130}>
              <Image
                borderRadius={8}
                border={"1px solid lightgrey"}
                padding={8}
                _hover={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;",
                }}
                width={190}
                src="https://cdn01.pharmeasy.in/dam/products_otc/C84012/lite-glo-face-wash-tube-of-100-ml-2-1654165477.jpg"
              />
              <Text mt={4}>Lite Glo Face Wash Tube Of 100 Ml</Text>
              <Text mt={2} color="grey">
                MRP ₹67.00
              </Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box>
              <Image
                borderRadius={8}
                border={"1px solid lightgrey"}
                padding={5}
                _hover={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;",
                }}
                width={150}
                src="https://cdn01.pharmeasy.in/dam/products_otc/L64620/la-french-victory-eau-de-perfume-for-men-100ml-2-1655560499.jpg"
              />
              <Text mt={4}>Pharmeasy Digital Thermometer Flexi</Text>
              <Text mt={2} color="grey">
                MRP ₹450.00
              </Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box>
              <Image
                borderRadius={8}
                border={"1px solid lightgrey"}
                padding={4}
                _hover={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;",
                }}
                width={150}
                src="https://cdn01.pharmeasy.in/dam/products_otc/M09396/streax-professional-canvoline-serum-100-ml-2-1653393335.jpg"
              />
              <Text mt={4} width={40}>
                Tvaksh Faceguard Sunscreen 30 Spf 30 Gm Tvaksh Faceguard
                Sunscreen 30 Spf 30
              </Text>
              <Text mt={2} color="grey">
                MRP ₹501.00
              </Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box>
              <Image
                borderRadius={8}
                border={"1px solid lightgrey"}
                padding={4}
                width={135}
                _hover={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;",
                }}
                src="https://cdn01.pharmeasy.in/dam/products_otc/H62146/sanfe-back-bum-acne-clearing-lotion-with-shea-butter-peach-extracts-100ml-2-1643016734.jpg"
              />
              <Text mt={4}>Sanfe Back & Bum Acne Clearing Lotion</Text>
              <Text mt={2} color="grey">
                MRP ₹154.00
              </Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box>
              
                <Image
                  borderRadius={8}
                  border={"1px solid lightgrey"}
                  padding={2}
                  _hover={{
                    boxShadow:
                      "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;",
                  }}
                  ml={3}
                  width={"120px"}
                  height="auto"
                  src="https://cdn01.pharmeasy.in/dam/products_otc/I07716/indulekha-bringha-hair-oil-bottle-of-100-ml-2-1654168008.jpg"
                />
                <Text mt={4}>Indulekha Bringha Hair Oil</Text>
                <Text mt={2} color="grey">
                  MRP ₹299.00
                </Text>
              
            </Box>
          </GridItem>
          <GridItem>
            <Box>
              <Image
                borderRadius={8}
                border={"1px solid lightgrey"}
                padding={2}
                _hover={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;",
                }}
                width={130}
                src="https://cdn01.pharmeasy.in/dam/products_otc/L11389/venusia-baby-cream-75g-2-1663052178.jpg?dim=1440x0"
              />
              <Text mt={4}>Venusia Baby Cream -75g</Text>
              <Text mt={2} color="grey">
                MRP ₹275.00
              </Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box>
              <Image
                borderRadius={8}
                border={"1px solid lightgrey"}
                padding={2}
                _hover={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;",
                }}
                width={140}
                src="https://cdn01.pharmeasy.in/dam/products_otc/281751/revital-h-men-multivitamin-with-calcium-zinc-ginseng-for-immunity-strong-bones-energy-60-capsules-2-1654077644.jpg"
              />
              <Text mt={4}>Revital H Men Multivitamin</Text>
              <Text mt={2} color="grey">
                MRP ₹550
              </Text>
            </Box>
          </GridItem>
        </Grid>
        {/* .................trending near me/.......................................................................... */}
        <Heading fontWeight={500} as="h3" size="lg" mt={20}>
          Trending Near You
        </Heading>
        <Text mt={5} color={"grey"}>
          Popular in your city
        </Text>
        <Grid
          mt={10}
          ml={9}
          templateColumns={{
            base: "repeat(2, 1fr)",
            sm: "repeat(4, 1fr)",
            lg: "repeat(7, 1fr)",
          }}
        >
          <GridItem>
            <Box width={130}>
              <Image
                borderRadius={8}
                border={"1px solid lightgrey"}
                padding={2}
                _hover={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;",
                }}
                width={130}
                src="https://cdn01.pharmeasy.in/dam/products_otc/L79986/everherb-karela-jamun-juice-helps-maintains-healthy-sugar-levels-helps-in-weight-management-1l-2-1664428023.jpg?dim=1440x0"
              />
              <Text mt={4}>Everherb Karela Jamun Juice - Helps Maintains</Text>
              <Text mt={2} color="grey">
                MRP ₹399.00
              </Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box>
              <Image
                borderRadius={8}
                border={"1px solid lightgrey"}
                padding={6}
                _hover={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;",
                }}
                width={130}
                src="https://cdn01.pharmeasy.in/dam/products_otc/S27268/saffola-fittify-vegan-protein-peanut-butter-extra-crunchy-340g-jar-2-1647515498.jpg"
              />
              <Text mt={4}> Peanut Butter</Text>
              <Text mt={2} color="grey">
                MRP ₹220
              </Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box>
              <Image
                borderRadius={8}
                border={"1px solid lightgrey"}
                padding={2}
                _hover={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;",
                }}
                width={130}
                src="https://cdn01.pharmeasy.in/dam/products_otc/G23515/cadbury-bournvita-nutrition-drink-jar-of-1000-g-2-1654169228.jpg"
              />
              <Text mt={4} width={40}>
                Cadbury Bournvita{" "}
              </Text>
              <Text mt={2} color="grey">
                MRP ₹410
              </Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box>
              <Image
                borderRadius={8}
                border={"1px solid lightgrey"}
                padding={10}
                _hover={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;",
                }}
                width={130}
                src="https://cdn01.pharmeasy.in/dam/products_otc/A33172/harpic-hygienic-jasmine-toilet-block-packet-of-26-g-2-1662194841.jpg"
              />
              <Text mt={4}>Toilet Block Packet</Text>
              <Text mt={2} color="grey">
                MRP ₹82
              </Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box>
              <Image
                borderRadius={8}
                border={"1px solid lightgrey"}
                padding={6}
                _hover={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;",
                }}
                width={120}
                src="https://cdn01.pharmeasy.in/dam/products_otc/P43387/origami-so-soft-napkins-cocktail-22cmx22cm-100-serviettes-2-1641793910.jpg"
              />
              <Text width={"150px"} mt={4}>
                Soft Tissue Paper Napkin
              </Text>
              <Text mt={2} color="grey">
                MRP ₹40
              </Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box>
              <Image
                borderRadius={8}
                border={"1px solid lightgrey"}
                padding={8}
                _hover={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;",
                }}
                width={120}
                src="https://cdn01.pharmeasy.in/dam/products_otc/I10590/kapiva-karela-jamun-juice-1l-natural-juice-made-from-fresh-karela-and-jamun-seeds-1-1654167588.jpg"
              />
              <Text width={"150px"} mt={4}>
                Kapiva Karela Jamun Juice
              </Text>
              <Text mt={2} color="grey">
                ₹286.18
              </Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box>
              <Image
                borderRadius={8}
                border={"1px solid lightgrey"}
                padding={7}
                _hover={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;",
                }}
                width={130}
                src="https://cdn01.pharmeasy.in/dam/products_otc/090550/himalaya-gokshura-tablets-60s-1-1654078797.jpg"
              />
              <Text width={"150px"} mt={3}>
                Himalaya Gokshura Tablets 60'S
              </Text>
              <Text mt={2} color="grey">
                MRP ₹220
              </Text>
            </Box>
          </GridItem>
        </Grid>
        <Heading fontWeight={500} as="h3" size="lg" mt={20}>
          Shop by Concern
        </Heading>
        <Text mt={3} color={"grey"}>
          Products are handpicked by experts!
        </Text>
        <Grid
          mt={10}
          ml={9}
          templateColumns={{
            base: "repeat(2, 1fr)",
            sm: "repeat(4, 1fr)",
            lg: "repeat(7, 1fr)",
          }}
        >
          <GridItem>
            <Box width={130}>
              <Image
                borderRadius={8}
                width={130}
                src="https://cms-contents.pharmeasy.in/homepage_top_categories_images/923a665cc6f-Skin_care.png?dim=128x0"
              />

              <Text mt={4} textAlign={"center"}>
                Skin Care
              </Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box>
              <Image
                width={130}
                src="https://cms-contents.pharmeasy.in/homepage_top_categories_images/18d2e2ee86b-Vitamins.png?dim=128x0"
              />

              <Text mt={4} ml={6}>
                Vitamins & Supplements
              </Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box>
              <Image
                width={130}
                src="https://cms-contents.pharmeasy.in/homepage_top_categories_images/0af9ac9f350-Diabetes.webp?dim=128x0"
              />

              <Text mt={4} width={40} ml={2}>
                Diabetes Care & Sugar Substitutes..
              </Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box>
              <Image
                width={130}
                src="https://cms-contents.pharmeasy.in/homepage_top_categories_images/24a0d2c733e-Heart.webp?dim=128x0"
              />

              <Text mt={4} ml={4}>
                Cardiac Care
              </Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box>
              <Image
                width={120}
                src="https://cms-contents.pharmeasy.in/homepage_top_categories_images/68369c9df98-Pregnancy.webp?dim=128x0"
              />
              <Text mt={7}>Baby & Mom Care</Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box>
              <Image
                width={120}
                src="https://cms-contents.pharmeasy.in/homepage_top_categories_images/16ab65c0826-Covid.webp?dim=128x0"
              />
              <Text mt={7}>Covid Care</Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box>
              <Image
                width={130}
                src="https://cms-contents.pharmeasy.in/homepage_top_categories_images/26bbd7a9e98-Lifestyle.webp?dim=128x0"
              />
              <Text mt={5}>Lifestyle Disorders</Text>
            </Box>
          </GridItem>
        </Grid>
        {/* ..........................Frequently Booked Lab tests........................... */}
        <Heading mt={20} as="h3" size="lg" fontWeight={600}>
          Frequently Booked Lab Tests
        </Heading>
        <Grid
          ml={12}
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
          mt={10}
        >
          <GridItem mt={3}>
            <Box padding={4} background={"#f1fafe"} width={60}>
              <Box
                width={20}
                color="white"
                padding={1}
                borderRadius={4}
                background={"#f47779"}
              >
                60% OFF
              </Box>
              <Heading mt={3} as={"h5"} size="sm">
                Post Prandial Blood Sugar (PPBS)
              </Heading>
              <Text mt={3} color={"grey"} fontSize={14}>
                Measures your blood sugar levels after last meal
              </Text>
              <Flex mt={3}>
                <Box>
                  <Heading
                    color={"grey"}
                    textDecoration={"line-through"}
                    as={"hg"}
                    size="md"
                  >
                    ₹500
                  </Heading>
                  <Heading as={"h5"} size="lg">
                    ₹199
                  </Heading>
                </Box>
                <Image
                  ml={7}
                  width={24}
                  src="https://s3.ap-south-1.amazonaws.com/pe-neon-public/diagnostics/production/recommendationWidget/f39e65011d9439e28c6500a1e444735e.png?dim=96x0"
                />
              </Flex>
            </Box>
          </GridItem>
          <GridItem mt={3}>
            <Box padding={4} background={"rgb(253 247 232)"} width={60}>
              <Box
                width={20}
                color="white"
                padding={1}
                borderRadius={4}
                background={"#f47779"}
              >
                64% OFF
              </Box>
              <Heading mt={3} as={"h5"} size="sm">
                Comprehensive Full Body Checkup with Vita
              </Heading>
              <Text mt={3} color={"grey"} fontSize={14}>
                Measures Vitamin D & B12 levels and other essential
              </Text>
              <Flex mt={3}>
                <Box>
                  <Heading
                    color={"grey"}
                    textDecoration={"line-through"}
                    as={"hg"}
                    size="md"
                  >
                    ₹4199
                  </Heading>
                  <Heading as={"h5"} size="lg">
                    ₹1499
                  </Heading>
                </Box>
                <Image
                  ml={7}
                  width={24}
                  src="https://s3.ap-south-1.amazonaws.com/pe-neon-public/diagnostics/production/recommendationWidget/c4162b4ec00938379d15b2719577457e.png?dim=96x0"
                />
              </Flex>
            </Box>
          </GridItem>
          <GridItem mt={3}>
            <Box padding={4} background={"#f1fafe"} width={60}>
              <Box
                width={20}
                color="white"
                padding={1}
                borderRadius={4}
                background={"#f47779"}
              >
                60% OFF
              </Box>
              <Heading mt={3} as={"h5"} size="sm">
                Fasting Blood Sugar (FBS) Blood Checkup
              </Heading>
              <Text mt={3} color={"grey"} fontSize={14}>
                Provides sugar level after an overnight's fast
              </Text>
              <Flex mt={3}>
                <Box>
                  <Heading
                    color={"grey"}
                    textDecoration={"line-through"}
                    as={"hg"}
                    size="md"
                  >
                    ₹500
                  </Heading>
                  <Heading as={"h5"} size="lg">
                    ₹199
                  </Heading>
                </Box>
                <Image
                  ml={7}
                  width={24}
                  src="https://s3.ap-south-1.amazonaws.com/pe-neon-public/diagnostics/production/recommendationWidget/4ff607383fad35e4af5639c3e7709734.png?dim=96x0"
                />
              </Flex>
            </Box>
          </GridItem>
          <GridItem mt={3}>
            <Box padding={4} background={"rgb(253 247 232)"} width={60}>
              <Box
                width={20}
                color="white"
                padding={1}
                borderRadius={4}
                background={"#f47779"}
              >
                66% OFF
              </Box>
              <Heading mt={3} as={"h5"} size="sm">
                Healthy 2022 Full Body Checkup
              </Heading>
              <Text mt={3} color={"grey"} fontSize={14}>
                Diagnostic tool for screening and monitoring of your health
              </Text>
              <Flex mt={3}>
                <Box>
                  <Heading
                    color={"grey"}
                    textDecoration={"line-through"}
                    as={"hg"}
                    size="md"
                  >
                    ₹2990
                  </Heading>
                  <Heading as={"h5"} size="lg">
                    ₹2990
                  </Heading>
                </Box>
                <Image
                  ml={7}
                  width={24}
                  src="https://s3.ap-south-1.amazonaws.com/pe-neon-public/diagnostics/production/recommendationWidget/f39e65011d9439e28c6500a1e444735e.png?dim=96x0"
                />
              </Flex>
            </Box>
          </GridItem>
        </Grid>
        {/* ...............................Payment offers........ */}
        <Heading as={"h6"} size="lg" fontWeight={500} mt={20}>
          Payment Offers
        </Heading>
        <Grid overflow={"hidden"} templateColumns={"repeat(3,1fr)"} mt={7}>
          <GridItem ml={5}>
            <Image
              width={"350px"}
              src="https://cdn01.pharmeasy.in/dam/banner/banner/4bbc0b1648d-OPEN-FILE.jpg?dim=1440x0"
            />
          </GridItem>
          <GridItem ml={5}>
            <Image
              width={"350px"}
              src="https://cdn01.pharmeasy.in/dam/banner/banner/a93d45ef9eb-HSBC.jpg?dim=1440x0"
            />
          </GridItem>
          <GridItem ml={5}>
            <Image
              width={"350px"}
              src="https://cdn01.pharmeasy.in/dam/banner/banner/24ea2e52ea9-hdfc.jpg?dim=1440x0"
            />
          </GridItem>
        </Grid>
        {/* ............................Featured Brands.......................................................... */}
        <Heading fontWeight={500} as="h3" size="lg" mt={20}>
          Featured Brands
        </Heading>
        <Text mt={3} color={"grey"}>
          Pick from our favourite brands
        </Text>
        <Grid
          mt={10}
          ml={9}
          templateColumns={{
            base: "repeat(2, 1fr)",
            sm: "repeat(4, 1fr)",
            lg: "repeat(7, 1fr)",
          }}
        >
          <GridItem>
            <Box width={140}>
              <Image
                borderRadius={8}
                width={130}
                src="https://cms-contents.pharmeasy.in/carousel_item/a559f294d43-Vicks-min.png?dim=1440x0"
              />

              <Text mt={7} textAlign={"center"}>
                Vicks
              </Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box>
              <Image
                width={140}
                src="https://cms-contents.pharmeasy.in/carousel_item/3eb4eb6bfbe-App_Himalaya.jpg?dim=1440x0"
              />

              <Text mt={4} ml={6}>
                Himalaya
              </Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box>
              <Image
                width={140}
                src="https://cms-contents.pharmeasy.in/carousel_item/40facc7fa28-Pharmeasy-App.jpg?dim=1440x0"
              />

              <Text mt={4} width={40} ml={3}>
                PharmEasy
              </Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box>
              <Image
                width={140}
                src="https://cms-contents.pharmeasy.in/carousel_item/83ada4a51e4-5849cd97369-App-Neurobion-min.png?dim=1440x0"
              />

              <Text mt={4} ml={4}>
                Neurobion
              </Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box>
              <Image
                width={140}
                src="https://cms-contents.pharmeasy.in/carousel_item/c7cfaa4b6c9-Cetaphil_v2.png?dim=1440x0"
              />
              <Text mt={4}>Baby & Mom Care</Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box>
              <Image
                width={140}
                src="https://cms-contents.pharmeasy.in/carousel_item/3c344faad99-App_Featured-J.jpg?dim=1440x0"
              />
              <Text mt={4} ml={7}>
                Johnson's
              </Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box>
              <Image
                width={140}
                src="https://cms-contents.pharmeasy.in/carousel_item/c9fc0cd6ef6-Revital-min.png?dim=1440x0"
              />
              <Text ml={8} mt={4}>
                Revital
              </Text>
            </Box>
          </GridItem>
        </Grid>
        {/* ....................slideshow compo.......... */}
        {/* ................Deals of the dat........ */}
        <Heading mt={20} as={"h6"} size="lg" fontWeight={500}>
          Deals of the Day
        </Heading>
        <Grid
          fontSize={14}
          mt={10}
          ml={9}
          templateColumns={{
            base: "repeat(2, 1fr)",
            sm: "repeat(4, 1fr)",
            lg: "repeat(7, 1fr)",
          }}
        >
          <GridItem>
            <Box width={130}>
              <Image
                borderRadius={8}
                border={"1px solid lightgrey"}
                padding={8}
                _hover={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;",
                }}
                width={190}
                src="https://cdn01.pharmeasy.in/dam/products_otc/U92247/toothsi-electro-rechargeable-electric-toothbrush-with-2-replaceable-heads-sonic-technology-1-1650108808.jpg?dim=1440x0"
              />
              <Text mt={3}>Toothsi Electro Rechargeable</Text>
              <Text mt={2} color={"grey"}>
                MRP ₹899.00
              </Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box>
              <Image
                borderRadius={8}
                border={"1px solid lightgrey"}
                padding={10}
                _hover={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;",
                }}
                width={125}
                src="https://cdn01.pharmeasy.in/dam/products_otc/082015/himalaya-gasex-tablets-100s-2-1641399057.jpg?dim=1440x0"
              />
              <Text mt={2}>Himalaya Gasex Tablets - 100's</Text>
              <Text mt={2} color="grey">
                MRP ₹123.00
              </Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box>
              <Image
                borderRadius={8}
                border={"1px solid lightgrey"}
                padding={2}
                _hover={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;",
                }}
                width={150}
                src="https://cdn01.pharmeasy.in/dam/products_otc/270552/revital-h-men-multivitamin-with-calcium-zinc-ginseng-for-immunity-strong-bones-energy-30-capsules-2-1654077741.jpg?dim=1440x0"
              />
              <Text width={40} mt={5}>
                Revital H Men Multivitamin
              </Text>
              <Text mt={3} color={"grey"}>
                MRP ₹501.00
              </Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box>
              <Image
                ml={3}
                borderRadius={8}
                border={"1px solid lightgrey"}
                padding={4}
                width={125}
                _hover={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;",
                }}
                src="https://cdn01.pharmeasy.in/dam/products/M15866/kidrich-d3-bottle-of-5ml-oral-solution-1-1663157621.jpg?dim=1440x0"
              />
              <Text mt={3}>Sanfe Back & Bum Acne Clearing Lotion</Text>
              <Text mt={3} color={"grey"}>
                MRP ₹154.00
              </Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box>
              <Image
                borderRadius={8}
                border={"1px solid lightgrey"}
                padding={2}
                _hover={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;",
                }}
                ml={3}
                width={"120px"}
                height="auto"
                src="https://cdn01.pharmeasy.in/dam/products_otc/I07716/indulekha-bringha-hair-oil-bottle-of-100-ml-2-1654168008.jpg"
              />
              <Text mt={4}>Liveasy Wellness Pain Relief Spray 55gm</Text>
              <Text color={"grey"} mt={4}>
                MRP ₹199.00
              </Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box>
              <Image
                borderRadius={8}
                border={"1px solid lightgrey"}
                padding={2}
                _hover={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;",
                }}
                width={130}
                src="https://cdn01.pharmeasy.in/dam/products_otc/L11389/venusia-baby-cream-75g-2-1663052178.jpg?dim=1440x0"
              />
              <Text mt={4}>Venusia Baby Cream -75g</Text>
              <Text color={"grey"} mt={4}>
                MRP ₹275.00
              </Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box>
              <Image
                borderRadius={8}
                border={"1px solid lightgrey"}
                padding={5}
                _hover={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;",
                }}
                width={100}
                src="https://cdn01.pharmeasy.in/dam/products_otc/269287/muout-plus-powder-119gm-2-1641531916.jpg?dim=1440x0"
              />
              <Text mt={5}>Revital H Men Multivitamin</Text>
              <Text mt={4} color="grey">
                MRP ₹550
              </Text>
            </Box>
          </GridItem>
        </Grid>
        {/* ..........................Details.................. of the app............... */}
        <Heading mt={10} as={"h6"} size="xs" fontWeight={500}>
          Top-Selling Healthcare Products:
        </Heading>
        <Text fontSize={15}>
          Accu-Chek Active - 100 Strips | Supradyn Multivitamin Tablets | DR
          Morepen BG 03 - 50 Strips | Dettol Antiseptic Liquid | Ensure Diabetes
          Care Vanilla Sugar Free Jar | Dettol Instant Hand Sanitizer | Everherb
          Shilajit | Softovac SF Powder | Pediasure Premium Chocolate Refill
        </Text>
        <Heading mt={7} as={"h6"} size="xs" fontWeight={500}>
          Top-Selling Healthcare Products:
        </Heading>
        <Text fontSize={15}>
          Dolovera Gel | Neurobion Forte | Chymoral Forte | Crocin Advance |
          Soframycin | Dexorange | Becadexamin | Folvite | Livogen | Becosules |
          Fourderm | Nurokind Plus | Burnol | Crocin 650 | Mintop 5 |
          Thrombophob | Evion 600
        </Text>
        <Heading mt={7} as={"h6"} size="xs" fontWeight={500}>
          Top-Selling Healthcare Products:
        </Heading>
        <Text fontSize={15}>
          N95 Masks | Hand Sanitizers | Hand Gloves, Disinfectants, Thermometers
          & more!
        </Text>
        <Heading mt={7} as={"h6"} size="sm" fontWeight={500}>
          Your One-Stop Online Pharmacy - PharmEasy
        </Heading>
        <Heading mt={7} as={"h6"} size="xs" fontWeight={500}>
          We've got India Covered!
        </Heading>
        <Text fontSize={15} mt={3}>
          We now deliver in 1000+ cities and towns across 22000+ pin codes. We
          thereby cover every nook and corner of the country! The major cities
          in which we deliver include Mumbai, Kolkata, Delhi, Bengaluru,
          Ahmedabad, Hyderabad, Chennai, Thane, Howrah, Pune, Gurgaon, Navi
          Mumbai, Jaipur, Noida, Lucknow, Ghaziabad & Vadodara.
        </Text>
        <Heading mt={7} as={"h6"} size="xs" fontWeight={500}>
          Say Goodbye to All Your Healthcare Worries With PharmEasy!
        </Heading>
        <Text fontSize={15} mt={3}>
          PharmEasy is here to help you take it easy! We are amongst one of
          India's top online pharmacy and medical care platforms. It enables you
          to order pharmaceutical and healthcare products online by connecting
          you to registered retail pharmacies and get them delivered to your
          home. We are an online medical store, making your purchase easy,
          simple, and affordable!
        </Text>
        <Heading mt={7} as={"h6"} size="xs" fontWeight={500}>
          How Are We Making Lives Simpler With Our Online Medical Store?
        </Heading>
        <Text fontSize={15} mt={3}>
          Our doorstep delivery service is available in PAN-India across top
          cities like Bangalore, Delhi, Mumbai, Kolkata, Hyderabad, Gurgaon,
          Noida, Pune, etc. Our online medical store also allows you to choose
          from 1 lakh+ products including OTC products and medical equipment.
          PharmEasy is a one-stop online medical platform where you can also
          book diagnostic tests including blood tests, full-body checkups, and
          other preventive health check-ups at an affordable cost, right from
          the comfort of your home. We have partnered with trusted & certified
          labs that arrange for a sample pick-up from the convenience of your
          home. They also provide you with timely reports.
        </Text>
        <Heading mt={7} as={"h6"} size="xs" fontWeight={500}>
          Why Are We The Most Preferred Online Pharmacy?
        </Heading>
        <Text fontSize={15} mt={3}>
          Lucrative offers on our platform allow you to make payment online and
          via various payment wallets at a discounted price. Alternatively, you
          can also choose to pay cash on delivery as we deliver the products at
          your doorstep. We cater to all your pharmaceutical needs and also make
          ordering medicines online a hassle-free experience for you. We connect
          you only with registered retail pharmacies & certified diagnostic
          labs. We ensure that healthcare is affordable to all and make the
          process of ordering online simple.
        </Text>
        <Heading mt={7} as={"h6"} size="xs" fontWeight={500}>
          Sit Back & Relax While You Get Your Essentials Delivered Every Month!
        </Heading>
        <Text fontSize={15} mt={3}>
          It’s tough to remember to refill every month, especially in the case
          of chronic diseases. PharmEasy’s subscription service not only ensures
          that you are reminded of your refills but also makes sure that you are
          never out on your medical essentials. You will get a reminder every
          month and your order will be delivered at your convenience!
        </Text>
        <Heading mt={7} as={"h6"} size="xs" fontWeight={500}>
          Access medical and health information:
        </Heading>
        <Text fontSize={15} mt={3}>
          PharmEasy delivers reliable and accurate medical information that has
          been carefully written, vetted and validated by our health experts.
          Our specialists curate high-quality and most reliable literature about
          medicines, illnesses, lab tests, Ayurvedic and over the counter health
          products.
        </Text>
        <Heading mt={7} as={"h6"} size="xs" fontWeight={500}>
          <Heading mt={7} as={"h6"} size="xs" fontWeight={500}>
            We Believe in ‘Simplifying Healthcare, Impacting Lives!’
          </Heading>
        </Heading>
      </Box>
    </>
  );
};
