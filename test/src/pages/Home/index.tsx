import { useState } from 'react';
import Form from '../../components/Form';
import Navbar from '../../components/Navbar';
import { Section1 } from './Section1';

const Home = () => {
    const endDate = new Date('2025-06-28T00:00:00');
    const [viewJoinModal, setViewJoinModal] = useState(false);
    return (
        <>
            <Navbar onJoinUs={() => { setViewJoinModal(true) }} />
            <Form isOpen={viewJoinModal} onClose={() => { setViewJoinModal(false) }} />
            <Section1 endDate={endDate} />
        </>
    )
}

export default Home