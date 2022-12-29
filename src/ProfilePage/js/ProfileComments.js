import '../scss/ProfileComments.scss'
import { Rating } from '@mui/material';


function ProfileComments() {
    return (
        <div className="profile-comments">
            <div className='profile-a-comment'>
                <div className='a-comment-rating'>
                    <Rating name="read-only" value={5} precision={0.01} readOnly />
                </div>
                <div className='a-comment-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem</div>
            </div>
            <div className='profile-a-comment'>
                <div className='a-comment-rating'>
                    <Rating name="read-only" value={5} precision={0.01} readOnly />
                </div>
                <div className='a-comment-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem</div>
            </div>
            <div className='profile-a-comment'>
                <div className='a-comment-rating'>
                    <Rating name="read-only" value={5} precision={0.01} readOnly />
                </div>
                <div className='a-comment-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem</div>
            </div>
        </div>
    );
}

export default ProfileComments;