import { useState } from 'react';
import Form from '../../components/Form';
import Navbar from '../../components/Navbar';
import { Section1 } from './Section1';
import Footer from '../../components/Footer';
import Manifesto from '../../components/Manifesto';

const Home = () => {
    const endDate = new Date('2025-06-28T00:00:00');
    const [viewJoinModal, setViewJoinModal] = useState(false);
    return (
        <>
            <Navbar onJoinUs={() => { setViewJoinModal(true) }} />
            <div className='px-4 sm:px-6'>
                <Form isOpen={viewJoinModal} onClose={() => { setViewJoinModal(false) }} />
                <Section1 endDate={endDate} />
                {/* <Manifesto /> */}
            </div>
            {/* <Footer /> */}
        </>
    )
}

export default Home