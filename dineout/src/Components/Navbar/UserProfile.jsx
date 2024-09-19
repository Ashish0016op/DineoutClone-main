import { NavLink } from 'react-router-dom';
function UserProfile() {    
    var isAuth = localStorage.getItem('loginKey');    
    const handleLogout = (event) => {
        isAuth = false;
        localStorage.setItem('loginKey', false);
        console.log(isAuth);
    };
    return (
        <div>
            <div className='profileLink'>
                <div className='profilePic'>
                    <p>US</p>
                </div>

                <div className='profileDrop'>
                    <p className='dropbtn'>My Account <i className="arrow down"></i></p>
                    <div className="dropdown-content">
                        <NavLink to='/Profile' className='navlink'>Profile</NavLink>
                        <NavLink to='/couponhistory' className='navlink'>Coupon History</NavLink>
                        <NavLink to='/' onClick={handleLogout}>Logout</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default UserProfile;