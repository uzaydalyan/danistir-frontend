import ProfileComments from './js/ProfileComments';
import ProfileHeader from './js/ProfileHeader';
import './ProfilePage.scss'

function ProfilePage() {
    return (  
        <div className="profile-page">
            <ProfileHeader />
            <div className='comments-title'>Bio</div>
            <div className='profile-bio-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem</div>
            <div className='comments-title'>Yorumlar</div>
            <ProfileComments />
        </div>
    );
}

export default ProfilePage;