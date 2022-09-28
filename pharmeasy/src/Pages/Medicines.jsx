import { Container, Heading, Stack ,Box} from "@chakra-ui/react"
import { Breadcrum } from "../Components/Breadcrum"
import { SearchBox } from "../Components/SearchBox";
import "../Styles/medicine.css"

export const Medicines=()=>{
    return (
      <>
      <Box h='110px'></Box>
          <div className="medicinebox" >
            <Breadcrum />
            <Heading className="olheading" fontWeight={650} size={"lg"} >Order Medicines Online</Heading>
            <SearchBox />
          </div>
        
      </>
    );
}