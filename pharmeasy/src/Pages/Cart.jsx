import { AlertDialog, Box, Button, Flex, Heading, Image,Select,Text } from "@chakra-ui/react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import AlertDialogue from "../Components/PlaceOrderAlert"
export const Cart = () => {
  const { cartData, setCartData } = useContext(AuthContext);
  console.log(cartData);
  const handleRemove = (id) => {
    let removeData = cartData.filter((elem) => elem.id !== id);
    setCartData(removeData);
  };
  return (
    <>
      <Box h={"130px"}></Box>
      <Box margin={"auto"} width={"65%"} border="1px soild grey">
        <Heading as={"h6"} size={"lg"} fontWeight={500}>
          Cart Items
        </Heading>
        <Box>
          {cartData.map((ele) => {
            return (
              <>
                <Flex mt={10} gap={10}>
                  <Box>
                    <Image h={"100px"} width={"100px"} src={ele.img}></Image>
                  </Box>
                  <Box>
                    <Heading width={"300px"} as={"h6"} size="sm">
                      {ele.title}
                    </Heading>
                    <Text>By PharmEasy</Text>
                    <Text>Quantity : {ele.size}</Text>
                    <Text>Delivery by Tommorow</Text>
                    <Text color={"grey"} fontSize="16px">
                      ₹ {ele.price}
                    </Text>
                  </Box>
                  <Box>
                    <Image
                      onClick={() => handleRemove(ele.id)}
                      src="https://assets.pharmeasy.in/web-assets/dist/2fb50086.svg"
                    ></Image>
                  </Box>
                  <AlertDialogue/>
                  <Text ml={-40}> Total: ₹ {ele.price}</Text>
                </Flex>
              </>
            );
          })}
        </Box>
        <Button
          background={"#10847e"}
          _hover={{ background: "#14918b" }}
          color="white"
          ml={10}
          mt={20}
        >
          {" "}
          <NavLink to="/">Continue Shopping</NavLink>
        </Button>
      </Box>
    </>
  );
};
