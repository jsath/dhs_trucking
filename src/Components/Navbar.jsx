import React from 'react';
import {
  Flex,
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from '@chakra-ui/react';
import truck from '../Imgs/truck.jpeg'
import mbe from '../Imgs/mbe.png'
import edge from '../Imgs/edge.webp'

const Navbar = (props) => {

    const { isOpen, onOpen, onClose } = useDisclosure();


return (

    <>

    <Flex
        as="nav"
        align="center"
        alignItems="center"
        justify="center"
        justifyContent='space-between'
        w="100%"
        h="12vh"
        px={5}
        py={2}
        bg="transparent"
        borderBottom="1.5px solid black"
        background='transparent'
    >
    
        <Flex align="center" ml='15px'>
            <img src={truck} width='50' alt='dhs_logo'/>
        </Flex>


        <Text fontSize="3xl" fontWeight="bold" color="gray.700" _hover={{transform: "scale(1.10)"}}>
            DHS Trucking
        </Text>


        <Text fontSize="xl" fontWeight="bold" color="gray.700" mr='15px' _hover={{
            color: "black",
            borderBottom: "2px solid black",
            transform: "scale(1.05)"}}
            onClick={onOpen}>
            Contact
        </Text>
    </Flex>

    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent alignItems='center'>
          <ModalHeader>Contact Us</ModalHeader>
          <ModalBody>
            <Text mb={4}>
              Email: <a href="mailto:dhstrucking216@gmail.com">DHSTrucking216@gmail.com</a>
            </Text>
            <Text mb={4}>
              Office: (440) - 281 - 8196
            </Text>
            <Text>
              Cell: (740) - 856 - 8654
            </Text>
          </ModalBody>
          <ModalFooter>

            <Flex width='100%' gap={5} alignItems='center'>
                <img src={mbe} width='50'/>
                <img src={edge} width='50'/>
            </Flex>

            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

    </>


);
};

export default Navbar;
