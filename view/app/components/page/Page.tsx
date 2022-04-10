import React, {FC, memo, useEffect, useState} from 'react';
import axios from 'axios';

const Page: FC = () => {
    const [rooms, setRooms] = useState('');
    useEffect(() => {
        axios.get('http://localhost:3000/rooms').then(res => {
            setRooms(res.data);
        });
    }, []);
    return (
        <div>{rooms}</div>
    );
};

export default memo(Page);
