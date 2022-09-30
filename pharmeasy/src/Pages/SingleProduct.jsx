import { Box, Button, Flex, Grid, GridItem, Heading, Image,Text } from "@chakra-ui/react";
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
      <Box h="140px"></Box>
      <Box width={"90%"} margin="auto" border={"1px solid black"}>
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
        <Flex>
          <Box>
            <Flex>
              <Box>
                <Box width={{base:"100px",sm:"200px",lg:"400px"}} padding={10} border={"1px solid black"}>
                  <Image margin={"auto"} width={"150px"} src={data.img}></Image>
                </Box>
                <Box>
                    <Grid>
                        <GridItem></GridItem>
                    </Grid>
                </Box>
              </Box>
              <Box>
                <Heading>{data.title}</Heading>
                <Text>{`Visit ${data.store} Store`}</Text>
                <Flex gap={{base:"80px",sm:"200px",lg:"400px"}}>
                  <Box>
                    <Text>₹{data.price}</Text>
                    <Text>₹{data.mrp}</Text>
                    <Text>{data.off}</Text>
                  </Box>
                  <Button>Add To Cart</Button>
                </Flex>
                <Text>Inclusive of all taxes</Text>
                <Text>Delivery by 01 Oct - 02 Oct</Text>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
};
