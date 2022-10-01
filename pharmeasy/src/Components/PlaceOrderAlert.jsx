import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
function AlertDialogue() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef =useRef();

  return (
    <>
      <Button
        background={"#10847e"}
        _hover={{ background: "#14918b" }}
        color="white"
        ml={10}
        mt={20}
        
        onClick={onOpen}
      >
        Place Order
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Place Order
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You want to place your order?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Yes
              </Button>
              <Button colorScheme="red" onClick={onClose} ml={3}>
                No
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}
export default AlertDialogue