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
                <section className='portfolio'>
                    <div className='portTitle'>
                        <h2>實體化計畫</h2>
                        <p>從像素到拼豆</p>
                    </div>
                    <div className='portout'>
                        <div className='portCard'>
                            <div className='card dino'>
                                <a href="#">
                                    首度同行
                                    <img src="./more.png" alt="" />
                                </a>
                            </div>
                            <p>從第一顆拼豆開始，角色靜靜陪你走進創作的世界，打造屬於自己的小作品，開啟創作旅程</p>
                        </div>
                        <div className='portCard'>
                            <div className='card bird'>
                                <a href="#">
                                    進階試煉
                                    <img src="./more.png" alt="" />
                                </a>
                            </div>
                            <p>創作開始有了節奏，挑戰更複雜的圖案和設計，探索更多色彩搭配和細節呈現</p>
                        </div>
                        <div className='portCard'>
                            <div className='card lcd'>
                                <a href="#">
                                    名匠之路
                                    <img src="./more.png" alt="" />
                                </a>
                            </div>
                            <p>每一顆拼豆都在說故事，無論是細緻的拼接還是大型作品，都成為了你的創作哲學</p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Home;