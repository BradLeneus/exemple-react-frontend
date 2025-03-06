import "./ProfileSection.css"

 
function ProfileSection({profileSection}) {
    return (
        <div className="profile">
            <div className="profile-name-image">
                <img src={profileSection.imgSrc} alt={profileSection.imgAlt} />
                <h1 className="profile-user-name">{profileSection.name}</h1>
            </div>
            <div className="profile-bio">   
                <p>{profileSection.bio}</p>
            </div>
            <div className="profile-stats">
                <ul>
                    <li>{profileSection.stats.postsLength} posts</li>
                    <li>{profileSection.stats.followers} followers</li>
                    <li>{profileSection.stats.following} following</li>
                </ul>
            </div>
        </div>

    )
}

export default ProfileSection 