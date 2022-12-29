import '../scss/ProfileHeader.scss'

function ProfileHeader() {
    return (
        <div className="profile-header">
            <div className='profile-picture'>
                <img src='https://firebasestorage.googleapis.com/v0/b/danistir-ed375.appspot.com/o/avatar.jpg?alt=media&token=4c3aac5a-fc34-4e8a-a3c4-a16564b08d24'/>
            </div>
            <div className='vertical-seperator'></div>
            <div className='profile-header-texts'>
                <div className='profile-header-name'>Uzay Dalyan</div>
                <div className='profile-header-fields'>Psikolog, Rehber</div>
            </div>
        </div>
     );
}

export default ProfileHeader;