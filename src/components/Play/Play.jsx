import React, {useCallback, useEffect, useState} from 'react';
import './Play.css';
import {useTelegram} from "../../hooks/useTelegram";
import Text from '../Text/Text';
import mysql from 'mysql';

const Play = () => {
    const [country, setCountry] = useState('');
    const [street, setStreet] = useState('');
    const [subject, setSubject] = useState('physical');
    const {user, tg} = useTelegram();

    const onSendData = useCallback(() => {
        const data = {
            country,
            street,
            subject
        }
        tg.sendData(JSON.stringify(data));
    }, [country, street, subject])

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData])

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Exit'
        })
    }, [])

    useEffect(() => {
        if(!street || !country) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [country, street])

    const onChangeCountry = (e) => {
        setCountry(e.target.value)
    }

    const onChangeStreet = (e) => {
        setStreet(e.target.value)
    }

    const onChangeSubject = (e) => {
        setSubject(e.target.value)
    }

    return (
        <div>
            <div className='pid-chlen'>
                <div className="balance">
                    <Text className='sp'>{JSON.stringify(user)}</Text>
                </div>
                
                <img className="chlen" src="../../1.png" alt=""/>
            </div>
            <div className={"footer"}>
                <div className="grid">
                    <Text className='ugrid'>Earn</Text>
                    <div class="vl"></div>
                    <Text className='ugrid'>Shop</Text>
                    <div class="vl"></div>
                    <Text className='ugrid'>Friends</Text>
                    <div class="vl"></div>
                    <Text className='ugrid'>Leaders</Text>
                </div>
            </div>
        </div>
        // <div className={"form"}>
        //     <h3>Введите ваши данные</h3>
        //     <input
        //         className={'input'}
        //         type="text"
        //         placeholder={'Страна'}
        //         value={country}
        //         onChange={onChangeCountry}
        //     />
        //     <input
        //         className={'input'}
        //         type="text"
        //         placeholder={'Улица'}
        //         value={street}
        //         onChange={onChangeStreet}
        //     />
        //     <select value={subject} onChange={onChangeSubject} className={'select'}>
        //         <option value={'physical'}>Физ. лицо</option>
        //         <option value={'legal'}>Юр. лицо</option>
        //     </select>
        // </div>
    );
};

export default Play;
