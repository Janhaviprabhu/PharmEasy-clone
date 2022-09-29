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
import "../App.css";
import { SearchBox } from "../Components/SearchBox";
import { Adslider } from "../Components/Slider";
import { Search } from "../Icon/loginicon";

export const Home = ({ value, handleChange, onClick }) => {
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
        <Heading fontWeight={500} mt={20} as="h3" size="lg">
          Offers Just for You
        </Heading>
        <Box mt={8}>
          <Flex padding={2} gap={5}>
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
              <Text>Covid essentials</Text>
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
              <Text>Personal care</Text>
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
              <Text width={40}>Health food and drinks</Text>
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
              <Text>Beauty</Text>
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
              <Text>Skin care</Text>
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
              <Text>Home care</Text>
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
              <Text>Ayurvedic care</Text>
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
              <Text>Lite Glo Face Wash Tube Of 100 Ml</Text>
              <Text>MRP ₹67.00</Text>
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
              <Text>Pharmeasy Digital Thermometer Flexi</Text>
              <Text>MRP ₹450.00</Text>
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
              <Text width={40}>
                Tvaksh Faceguard Sunscreen 30 Spf 30 Gm Tvaksh Faceguard
                Sunscreen 30 Spf 30
              </Text>
              <Text>MRP ₹501.00</Text>
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
              <Text>Sanfe Back & Bum Acne Clearing Lotion</Text>
              <Text>MRP ₹154.00</Text>
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
              <Text>Liveasy Wellness Pain Relief Spray 55gm</Text>
              <Text>MRP ₹199.00</Text>
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
              <Text>Venusia Baby Cream -75g</Text>
              <Text>MRP ₹275.00</Text>
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
              <Text>Revital H Men Multivitamin</Text>
              <Text>MRP ₹550</Text>
            </Box>
          </GridItem>
        </Grid>
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
              <Text>Everherb Karela Jamun Juice - Helps Maintains</Text>
              <Text>MRP ₹399.00</Text>
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
              <Text> Peanut Butter</Text>
              <Text>MRP ₹220</Text>
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
              <Text width={40}>Cadbury Bournvita </Text>
              <Text>MRP ₹410</Text>
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
              <Text>Toilet Block Packet</Text>
              <Text>MRP ₹82</Text>
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
              <Text>Soft Tissue Paper Napkin</Text>
              <Text>MRP ₹40</Text>
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
              <Text>Home care</Text>
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
              <Text>Himalaya Gokshura Tablets 60'S</Text>
              <Text>MRP ₹220</Text>
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
        <Heading as="h3" size="lg" fontWeight={600}>
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
        <Heading as={"h6"} size="lg" fontWeight={500}>
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
        <Heading as={"h6"} size="lg" fontWeight={500}>
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
              <Text  mt={4}>Liveasy Wellness Pain Relief Spray 55gm</Text>
              <Text color={"grey"} mt={4}>MRP ₹199.00</Text>
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
              <Text color={"grey"} mt={4}>MRP ₹275.00</Text>
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
              <Text mt={4} color="grey">MRP ₹550</Text>
            </Box>
          </GridItem>
        </Grid>
      </Box>
      <Adslider />
    </>
  );
};
