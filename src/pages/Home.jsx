import React from 'react';
import '../styles/Home.scss';
import PixelMe from '../components/PixelMe';

const Home = () => {
    return (
        <>
            <main>
                <header>
                    <div className='top'>
                        <div className='top1'>
                            <h2>是創作的語言</h2>
                            <PixelMe mode="static" className="h_me" />
                            <h2>是療癒的儀式</h2>
                        </div>
                        <div className='notToy'>
                            <h2>拼豆</h2>
                            <p>不只是玩具</p>
                            <img src="./Vector.png" alt="往下滑" />
                        </div>
                        <img className='decorate dec1' src="./decorate_1.png" alt="decorate" />
                        <img className='decorate dec2' src="./decorate_2.png" alt="decorate" />
                    </div>
                </header>

            </main>
        </>
    );
};

export default Home;