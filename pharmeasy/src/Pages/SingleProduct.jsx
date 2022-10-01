import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
const getProducts = async (id) => {
  const res = await fetch(`http://localhost:3000/medicines/${id}`);
  return await res.json();
};

export const SinglePage = () => {
  const [data, setData] = useState({});
  const params = useParams();
  useEffect(() => {
    getProducts(params.id).then((res) => {
      setData(res);
      console.log(res);
    });
  }, [params.id]);
  return (
    <>
      <Box h="140px">
      </Box>
      <Box width={"90%"} margin="auto">
        <Breadcrumb style={{ fontSize: "14px" }} spacing="8px" separator={">"}>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="/medicines">
              Order Medicines Online
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink color={"grey"} href="/medicines">
              {data.title}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Flex gap={20} mt={16}>
          <Box>
            <Flex gap={10}>
              <Box>
                <Box
                  borderRadius={7}
                  width={{ base: "100px", sm: "200px", lg: "400px" }}
                  padding={10}
                  border={"1px solid grey"}
                >
                  <Image margin={"auto"} width={"150px"} src={data.img}></Image>
                </Box>
                <Box>
                  <Flex mt={10} gap={5}>
                    <Box
                      borderRadius={5}
                      padding={3}
                      width={"120px"}
                      height={"120px"}
                      border="1px solid grey"
                    >
                      <Image
                        borderRadius={5}
                        margin={"auto"}
                        width={"50px"}
                        height={"100px"}
                        src={data.img}
                      ></Image>
                    </Box>
                    <Box
                      padding={3}
                      width={"120px"}
                      height={"120px"}
                      border="1px solid grey"
                    >
                      <Image
                        margin={"auto"}
                        width={"100px"}
                        height={"100px"}
                        src={data.img1}
                      ></Image>
                    </Box>
                    <Box
                      borderRadius={5}
                      border="1px solid grey"
                      padding={3}
                      width={"120px"}
                      height={"120px"}
                    >
                      <Image
                        margin={"auto"}
                        width={"100px"}
                        height={"100px"}
                        src={data.img2}
                      ></Image>
                    </Box>
                  </Flex>
                </Box>
              </Box>
              <Box>
                <Heading width={"500px"} as={"h6"} size="md" fontWeight={600}>
                  {data.title}{" "}
                </Heading>
                <Text
                  mt={3}
                  fontSize={14}
                  color={"teal.500"}
                >{`Visit ${data.store} Store`}</Text>
                <Flex gap={{ base: "80px", sm: "200px", lg: "200px" }}>
                  <Flex gap={4}>
                    <Text fontSize={23} fontWeight={600}>
                      ₹{data.price}
                    </Text>
                    <Text
                      mt={1}
                      fontSize={13}
                      textDecoration={"line-through"}
                      color="grey"
                    >
                      MRP₹{data.mrp}
                    </Text>
                    <Text
                      padding={2}
                      borderRadius={5}
                      color="white"
                      background={"#f47779"}
                    >
                      {data.off}
                    </Text>
                  </Flex>
                  <Button
                 
                    background={"#10847e"}
                    _hover={{ background: "#14918b" }}
                    color="white"
                  >
                    Add To Cart
                  </Button>
                </Flex>
                <Text mt={5} fontSize={12}>
                  Inclusive of all taxes
                </Text>
                <Text fontSize={14}>Delivery by Tommorow before 10:00pm</Text>
              </Box>
            </Flex>
          </Box>
          <Box>
            <Text fontWeight={500} color={"#4f585e"}>
              Please add item(s) to proceed
            </Text>
            <Button
              background={"#10847e"}
              _hover={{ background: "#14918b" }}
              color="white"
              width={"300px"}
              mt={4}
            >
              View Cart{" "}
            </Button>
            <Text mt={20}>Offers for You</Text>
            <Flex borderRadius={5} padding={2} border={"1px dashed grey"} mt={2} gap={4}>
              <Image
                borderRadius={5}
                src="https://cms-contents.pharmeasy.in/offer/ea20b1fcb6c-11.jpg"
                width={20}
              />
              <Text color={"grey"} fontSize={"sm"}>
                Flat 25% off on first 3 medicine orders{"   "}
              </Text>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
};
