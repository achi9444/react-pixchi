import React from 'react';
import '../styles/Home.scss';
import PixelMe from '../components/PixelMe';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <main className='homeMain'>
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
                            <img src="./Vector.webp" alt="goDown" />
                        </div>
                        <img className='decorate dec1' src="./decorate_1.webp" alt="decorate" />
                        <img className='decorate dec2' src="./decorate_2.webp" alt="decorate" />
                    </div>
                </header>
                <section className='portfolio'>
                    <div className='portTitle'>
                        <h2 className='tiH2'>實體化計畫</h2>
                        <p className='tiP'>從像素到拼豆</p>
                    </div>
                    <div className='portOut'>
                        <div className='portCard'>
                            <div className='card dino'>
                                <img className='role' src="./compression/tyrannosaurus2.webp" alt="tyrannosaurus" />
                                <div className='level'>
                                    <img src="./star.webp" alt="level" />
                                </div>
                                <NavLink to={'/Materialize#level1'}>
                                    首度同行
                                    <img src="./more.webp" alt="more" />
                                </NavLink>
                            </div>
                            <p>從第一顆拼豆開始，角色靜靜陪你走進創作的世界，打造屬於自己的小作品，開啟創作旅程</p>
                        </div>
                        <div className='portCard'>
                            <div className='card bird'>
                                <img className='role' src="./compression/bird.webp" alt="bird" />
                                <div className='level'>
                                    <img src="./star.webp" alt="level" />
                                    <img src="./star.webp" alt="level" />
                                </div>
                                <NavLink to={'/Materialize#level2'}>
                                    進階試煉
                                    <img src="./more.webp" alt="more" />
                                </NavLink>
                            </div>
                            <p>創作開始有了節奏，挑戰更複雜的圖案和設計，探索更多色彩搭配和細節呈現</p>
                        </div>
                        <div className='portCard'>
                            <div className='card lcd'>
                                <img className='role' src="./compression/LCD.webp" alt="lcd" />
                                <div className='level'>
                                    <img src="./star.webp" alt="level" />
                                    <img src="./star.webp" alt="level" />
                                    <img src="./star.webp" alt="level" />
                                </div>
                                <NavLink to={'/Materialize#level3'}>
                                    名匠之路
                                    <img src="./more.webp" alt="more" />
                                </NavLink>
                            </div>
                            <p>每一顆拼豆都在說故事，無論是細緻的拼接還是大型作品，都成為了你的創作哲學</p>
                        </div>
                    </div>
                </section>
                <section className='coner'>
                    <div className='conTiBox'>
                        <div className='conTitle'>
                            <h2 className='tiH2'>療癒角落</h2>
                            <p className='tiP'>喚醒你內心的自己</p>
                        </div>
                    </div>
                    <div className="conOut">
                        <div className='conBox conBox1'>
                            <div className='box box1_1'>
                                <h3>感官調節與集中訓練</h3>
                                <p>拾取和放置拼豆能夠訓練精細的手指動作與手眼協調能力，有助於提升兒童的抓握能力與靈活性，並可作為長者復健過程中的自我照護工具。</p>
                            </div>
                            <img src="./train.webp" alt="train" />
                        </div>
                        <div className='conBox conBox2'>
                            <div className='box box2_1'>
                                <h3>情緒療癒與創造力激發</h3>
                                <p>專注於手中的活動，幫助緩解壓力並引發內在的情感釋放；也可以透過顏色的選擇來表達情緒或心境，引發更多深層的自我對話。</p>
                            </div>
                            <div className='box2_2'>
                                <img src="./flower.webp" alt="cuteRabbit" />
                                <img src="./mochi.webp" alt="cuteRabbit" />
                            </div>
                        </div>
                        <div className="conBox conBox3">
                            <div className='box box3_1'>
                                <h3>專注力與耐心的培養</h3>
                                <p>集中注意力於每一顆豆豆，進入冥想狀態，感受「一顆一顆慢慢完成」，有助於提升集中力和心智穩定性。</p>
                            </div>
                            <img src="./focus.webp" alt="focus" />
                        </div>
                    </div>
                    <NavLink to={'/HealingCorner'} className={'toCor'}>
                        探索角落<img src="./more.webp" alt="more" />
                    </NavLink>
                </section>
                <section className='myJourney'>
                    <div className='jouBg'>
                        <div className='jouTiBox'>
                            <div className='jouTitle'>
                                <h2 className='tiH2'>我的拼豆旅程</h2>
                                <p className='tiP'>一顆顆豆豆 一點點的我</p>
                            </div>
                        </div>
                        <div className='jouText'>
                            <p className='text1'>被限制在兩點一線的軌跡，我的世界很小<br />《新楓之谷》成了我的宇宙，<br />在像素裡冒險、打怪、升級，過著自己嚮往的生活<br />拼豆成了我的創作語言，<br />一顆顆地拼湊心情，也拼湊想像中的自己<br />家人不理解，只覺得是浪費時間的「玩具」<br />但這是我靜靜陪伴自己的方式<br />這裡，收藏了那些被質疑的片段，</p>
                            <p className='text2'>若你願意停下腳步，也許你會拼湊出新的自己</p>
                            <NavLink to={'/About'}>
                                更多故事<img src="./more.webp" alt="more" />
                            </NavLink>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Home;