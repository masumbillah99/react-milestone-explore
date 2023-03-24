import React from 'react';
import DeviceDetails from '../DeviceDetails/DeviceDetails';
import Watch from '../Watch/Watch';

const Device = (props) => {
    // console.log(props);
    return (
        <div>
            <h3>I have a {props.name} Device</h3>
            <DeviceDetails price={props.price}></DeviceDetails>
            <Watch></Watch>
        </div>
    );
};

export default Device;