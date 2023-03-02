import CSSHoverLightCard from "../components/CSSHoverLightCard";
import MulticardSpotlight from "../components/MulticardSpotlight";
import ToggleLikeButton from "../components/ToggleLikeButton";

const Page2 = () => {
    return (
        <>
          <div className = "StarsRating" style={{marginTop : '30px'}}>
            <CSSHoverLightCard />
            <span style={{marginLeft : '100px'}}><MulticardSpotlight /></span>
          </div>
          <div className = "StarsRating" style={{marginTop : '30px'}}>
            <ToggleLikeButton likes={23}/>
          </div>
        </>
    )
}

export default Page2