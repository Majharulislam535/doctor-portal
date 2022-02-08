import React, { useState } from 'react';
import { Calendar } from "react-multi-date-picker"
import './Calender.css';

const Calender = (props) => {

    const { value } = props;
    const { setValue } = props;


    return (
        <Calendar
            value={value}
            onChange={setValue}
        >
        </Calendar>
    );
};

export default Calender;