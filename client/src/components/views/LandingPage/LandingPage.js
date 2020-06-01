import React, { useEffect } from 'react';
import axios from 'axios';

const LandingPage = () => {

    useEffect(() => {
        axios.get('/api')
            .then(response => console.log(response))
            .catch(err => console.log(err));
    }, []);

    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh'
        }}>
            <h2>시작페이지</h2>
        </div>
    )
}

export default LandingPage;