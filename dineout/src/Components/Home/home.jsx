import FeaturedRestaurants from "./FeaturedRestaurants/featuredRestaurant";
import Feature from "./Features/features";
import NearRestaurants from "./nearRestaurants/nearRestaurants";
import Offers from "./Offers/offers";
import SearchBar from "./searchbar/searcbar";
import ImgSlider from "./ImgSlider/ImgSlider";
import gif from "./gif.gif";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

import Chatbot from "../Chatbot/Chatbot";
import HomeNav from "../HomeNav/HomeNav";

function Home() {


  const { isOpen, onOpen, onClose } = useDisclosure();


  return (
    <div>
      <img
        style={{
          width: "120px",
          cursor: "pointer",
          height: "120px",
          position: "fixed",
          zIndex: "1000",
          bottom: "10%",
          left: "2%",
        }}
        onClick={onOpen}
        src={gif}
        alt="gif"
        className="gifimg"
      />
      <Modal isOpen={isOpen} onClose={onClose} size={""}>
        <ModalOverlay />
        <ModalContent
          width={"0px"}
          height={"10px"}
          position="fixed"
          left="8%"
          top="18%"
        >
          <ModalBody height={"500px"} zIndex="2000">
            <Chatbot />
            <ModalCloseButton
              bg="red"
              borderRadius={"5px"}
              height="50px"
              color="white"
              cursor={"pointer"}
              position="absolute"
              top={"10%"}
              left="345px"
              zIndex="1000"
            />
          </ModalBody>
        </ModalContent>
      </Modal>

      {/* <Navbar/> */}
      <SearchBar />
      <Offers />
      <ImgSlider />
      <NearRestaurants />
      <FeaturedRestaurants />
      <Feature />
    </div>
  );
}

export default Home;
