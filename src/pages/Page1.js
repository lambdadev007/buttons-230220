import ButtonGrid from "../components/ButtonGrid";
import Hamburger from "../components/Hamburger";
import StarsRating from "../components/StarsRating";
import ButtonArrows from "../components/ButtonArrows";
import ButtonActivate from "../components/ButtonActivate";
import AddFileTabbar from "../components/AddFileTabbar";
import SearchInput from "../components/SearchInput";
import FluidDownload from "../components/FluidDownload";
import CharBar from "../components/CharBar";
import ButtonAddHover from "../components/ButtonAddHover";
import RotateText from "../components/RotateText";
import RingText from "../components/RingText";
import DNAFunction from "../components/DNAFunction";

const Page1 = () => {
    return (
        <>
          <div className='button-container'  style={{marginTop : '30px'}}>
            <span style={{marginLeft : '20px'}}><ButtonGrid gridTitle="Grid" listTitle="List" /></span>
            <span style={{marginLeft : '20px'}}><ButtonGrid /></span>
            <span style={{marginLeft : '100px'}}><Hamburger /></span>
            <span style={{marginLeft : '100px'}}><ButtonAddHover /></span>        
          </div>
          <div className = "StarsRating" style={{marginTop : '30px'}}>
            <StarsRating />
          </div>
          <div className = "" style={{marginTop : '30px'}}>
            <ButtonArrows />
            <span style={{marginLeft : '100px'}}><ButtonActivate /></span>
            <span style={{marginLeft : '100px'}}><AddFileTabbar /></span>
          </div>
          <div className = "StarsRating" style={{marginTop : '30px'}}>
            <SearchInput />
            <span style={{marginLeft : '100px'}}><FluidDownload /></span>
            <span style={{marginLeft : '100px'}}><CharBar /></span>
          </div>
          <div className = "StarsRating" style={{marginTop : '30px'}}>
            <RotateText />
          </div>
          <div className = "StarsRating" style={{marginTop : '30px'}}>
            <RingText />
          </div>
          <div className = "StarsRating" style={{marginTop : '30px'}}>
            <DNAFunction />
          </div>
        </>
    )
}

export default Page1