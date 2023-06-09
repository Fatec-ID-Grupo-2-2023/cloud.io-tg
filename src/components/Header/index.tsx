import { Avatar, Box, IconButton } from '@mui/material';
import { useContext, useState } from 'react';
import AccountIcon from '../../assets/account.svg';
import MenuIcon from '../../assets/menu.svg';
import { GlobalContext } from '../../contexts/GlobalContext';
import toggleDrawer from '../../helpers/toggleSidebar';
import ProfileBox from '../ProfileBox';
import Sidebar from '../Sidebar';
import './style.scss';

export default function Header() {
    const [sidebar, setSidebar] = useState(false);
    const [profileBox, setProfileBox] = useState(false);
    const { googleUser } = useContext(GlobalContext);

    return (
        <Box id='header'>
            <ProfileBox open={profileBox} onClose={() => setProfileBox(false)} />
            <Sidebar open={sidebar} onClose={toggleDrawer(() => setSidebar(false))} />
            <IconButton color='secondary' component='label' onClick={toggleDrawer(() => setSidebar(true))}>
                <img src={MenuIcon} alt='' />
            </IconButton>
            <IconButton color='secondary' component='label' onClick={() => setProfileBox(true)}>
                <Avatar
                    className='avatar'
                    src={googleUser?.profileObj.imageUrl ?? AccountIcon}
                    alt={googleUser?.profileObj.givenName ?? 'User'}
                    imgProps={{
                        referrerPolicy: 'no-referrer'
                    }}
                />
            </IconButton>
        </Box>
    );
}