import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import OrderList from './OrderList';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
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
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Orders({allOrders, fetchAllOrders}) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="w-full  md:h-screen h-[calc(100vh-56px)] overflow-y-auto md:mt-0 mt-[56px] p-4 bg-[rgb(246,248,252)]">
            <Box sx={{ width: '100%' }} className="bg-white rounded">
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Orders" {...a11yProps(0)} />
                        <Tab label="Packages" {...a11yProps(1)} />
                        <Tab label="Visa" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <OrderList fetchAllOrders={fetchAllOrders} orders={allOrders} />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <OrderList fetchAllOrders={fetchAllOrders}  orders={allOrders?allOrders.length>0?allOrders.filter(a=>a.type=='package'):'':''} />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <OrderList fetchAllOrders={fetchAllOrders}  orders={allOrders?allOrders.length>0?allOrders.filter(a=>a.type=='visa'):'':''}  />
                </TabPanel>
            </Box>
        </div>
    );
}
