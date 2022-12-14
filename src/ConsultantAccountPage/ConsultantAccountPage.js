import './ConsultantAccountPage.scss'
import * as React from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AccountInfo from '../AccountPage/components/js/AccountInfo';
import ChangePassword from '../AccountPage/components/js/ChangePassword';
import ConsultantServiceSettings from './components/js/ConsultantServiceSettings';
import { getAccountInfo } from '../services/services';
import { useCookies } from 'react-cookie';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

function ConsultantAccountPage(/*props: props*/) {

    const [value, setValue] = React.useState(0);
    const [isConsultant, setIsConsultant] = React.useState(false);
    const [cookies, setCookies] = useCookies('access-token');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {

        getAccountInfo(cookies.danistir_access_token).then((response) => {

            setIsConsultant(response.data.is_consultant);
        })
    }, [])

    return (

        <div className="consultant-account">
            <Box
                sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex' }}
            >
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    sx={{ borderRight: 1, borderColor: 'divider' }}
                >
                    <Tab label="Hesap Bilgileri" {...a11yProps(0)} />
                    <Tab label="Güvenlik Bilgileri" {...a11yProps(1)} />
                    <Tab label="Ödeme Yöntemleri" {...a11yProps(2)} />
                    {isConsultant && <Tab label="Hizmet Düzenlemeleri" {...a11yProps(2)} />}
                </Tabs>
                <TabPanel value={value} index={0}>
                    <AccountInfo />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <ChangePassword />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Ödeme Yöntemleri
                </TabPanel>
                {isConsultant && 
                <TabPanel value={value} index={3}>
                    <ConsultantServiceSettings />
                </TabPanel>}
                
            </Box>

        </div>
    );
}

export default ConsultantAccountPage;