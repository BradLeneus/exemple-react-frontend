import Cardlist from "./CardList"
import "./MainSection.css"
import ProfileSection from "./ProfileSection"
import profile from "../data"

function MainSection() {
    
    return(
        <main>
            <ProfileSection profileSection={{...profile.profileSection}}/>
            <Cardlist posts={profile.posts}/>
        </main>
    )
}

export default MainSection