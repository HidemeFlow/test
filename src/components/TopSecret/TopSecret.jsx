import React, {useCallback, useEffect, useState} from 'react';
import './TopSecret.css';
import {useTelegram} from "../../hooks/useTelegram";
import Text from '../Text/Text';
import Button from '../Button/Button';

const TopSecret = () => {
    const [country, setCountry] = useState('');
    const {tg} = useTelegram();
    return (
        <div>
            <Button className='but'>asd</Button>
        </div>
    );
};

export default TopSecret;
