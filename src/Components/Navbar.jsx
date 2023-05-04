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
  Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody
} from '@chakra-ui/react';
import { Box, IconButton, HStack } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import truck from '../Imgs/truck.jpeg'
import mbe from '../Imgs/mbe.png'
import edge from '../Imgs/edge.webp'




const Navbar = (props) => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    const { 
        isOpen: isOpenContactModal, 
        onOpen: onOpenContactModal, 
        onClose: onCloseContactModal 
    } = useDisclosure()

    const { 
        isOpen: isOpenAboutModal, 
        onOpen: onOpenAboutModal, 
        onClose: onCloseAboutModal 
    } = useDisclosure()

    const { 
        isOpen: isOpenServicesModal, 
        onOpen: onOpenServicesModal, 
        onClose: onCloseServicesModal 
    } = useDisclosure()

    



    // const [isMobileView, setIsMobileView] = useState(false);
  
    // const toggleView = () => {
    //   setIsMobileView(!isMobileView);
    // };


    const NavLinks = () => ( 
        <HStack spacing={4} align="center">
          <Text fontSize="xl" fontWeight="bold" color="gray.700" _hover={{
                color: "black",
                borderBottom: "2px solid black",
                transform: "scale(1.05)"}}
                onClick={onOpenServicesModal}>
                    Services
            </Text>
          <Text fontSize="xl" fontWeight="bold" color="gray.700" _hover={{
                color: "black",
                borderBottom: "2px solid black",
                transform: "scale(1.05)"}}
                onClick={onOpenAboutModal}>
                    About
                    </Text>
          <Text fontSize="xl" fontWeight="bold" color="gray.700" mr='15px' _hover={{
                color: "black",
                borderBottom: "2px solid black",
                transform: "scale(1.05)"}}
                onClick={onOpenContactModal}>
                Contact
            </Text>
        </HStack>
      );


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
        position='sticky'
        zIndex={10}
    >
    
        <Flex align="center" ml='15px'>
            <img src={truck} width='50' alt='dhs_logo'/>
        </Flex>


        <Text fontSize="3xl" fontWeight="bold" color="gray.700" _hover={{transform: "scale(1.10)"}}>
            DHS Trucking
        </Text>



<Box display={{ base: 'none', md: 'block' }}>
        <NavLinks />
      </Box>
      <Box display={{ base: 'block', md: 'none' }}>
        <IconButton
          aria-label="Toggle navigation"
          size="lg"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          onClick={onOpen}
        />
      </Box>
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement="left"
        size="sm"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader as='u' fontSize='5xl'>Navigation</DrawerHeader>
          <DrawerBody>
            <NavLinks onClose={onClose} nav={true}/>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

    </Flex>



    {/*MODALL ONEEE */}

    <Modal isOpen={isOpenContactModal} onClose={onCloseContactModal}>
        <ModalOverlay />
        <ModalContent alignItems='center'>
          <ModalHeader fontSize='3xl'>Contact Us</ModalHeader>
          <ModalBody>
            <Text mb={4}>
              Email: <Text as='samp'><a href="mailto:dhstrucking216@gmail.com">DHSTrucking216@gmail.com</a></Text>
            </Text>
            <Text mb={4}>
              Office: <Text as='samp' >(440) - 281 - 8196</Text>
            </Text>
            <Text>
              Cell:  <Text as='samp' >(740) - 856 - 8654</Text>
            </Text>
          </ModalBody>
          <ModalFooter>

            <Flex width='100%' gap={5} alignItems='center'>
                <img src={mbe} alt='mbe' width='50'/>
                <img src={edge} alt='edge' width='50'/>
            </Flex>

            <Button colorScheme="blue" mr={3} onClick={onCloseContactModal}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>









      {/*MODAL FOR ABOUT*/}



    <Modal isOpen={isOpenAboutModal} onClose={onCloseAboutModal}>
        <ModalOverlay />
        <ModalContent alignItems='center'>
          <ModalHeader fontSize='4xl'>About us</ModalHeader>
          <ModalBody>
            <Text mb={4} as='samp'>
            Founded in 2019, DHS is a minority owned freight-moving company based out of Cleveland, Ohio.

            <br/>
            <br/>
            
            Offering a wide range of hauling solutions to its customers, DHS Trucking prides itself on speed, efficiency and making sure the client is always satisfied. 
            
            <br/>
            <br/>
            Call or email today for your free quote!
            </Text>
          </ModalBody>
          <ModalFooter>

            <Button colorScheme="blue" mr={3} onClick={onCloseAboutModal}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>





    {/*MODAL FOR SERVICES */}


    <Modal isOpen={isOpenServicesModal} onClose={onCloseServicesModal}>
        <ModalOverlay />
        <ModalContent alignItems='center'>
          <ModalHeader fontSize='4xl'>Services</ModalHeader>
          <ModalBody>
            <Text mb={4} as='samp' justifyContent="center">
            Construction Material
            <br/>
            Crushed Concrete
            <br/>
            Compost Mulch
            <br/>
            Limestone
            <br/>
            Asphalt
            <br/>
            Millings
            <br/>
            Gravel
            <br/>
            Brush
            <br/>
            Brick
            <br/>
            Stone
            <br/>
            Sand
            <br/>
            Dirt
            <br/>
            Salt
            </Text>
          </ModalBody>
          <ModalFooter>

            <Button colorScheme="blue" mr={3} onClick={onCloseServicesModal}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>


    </>


);
};

export default Navbar;
