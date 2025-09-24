import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Footer.scss"

const Footer = () => {
    return (
        <>
            <footer>
                <nav>
                    <Link to="/">
                        <div className='foot_logo'>Pix Chi</div>
                    </Link>
                    <ul>
                        <li><Link to='/Materialize'>實體化計畫</Link></li>
                        <li><Link to='/HealingCorner'>療癒角落</Link></li>
                        <li><Link to='/Classroom'>小教室</Link></li>
                        <li><Link to='/About'>關於我</Link></li>
                    </ul>
                    <div>
                        <a href="https://www.facebook.com/profile.php?id=100057540321420&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer"><img src='./fb_icon.webp' alt="fb" loading="lazy" /></a>
                        <a href="https://www.instagram.com/issharkachi?igsh=MWZ5eDlqZTVpaW83dQ==" target="_blank" rel="noopener noreferrer"><img src='./ig_icon.webp' alt="ig" loading="lazy" /></a>
                        <a href="https://www.youtube.com/@sharkachi" target="_blank" rel="noopener noreferrer"><img src='./yt_icon.webp' alt="yt" loading="lazy" /></a>
                    </div>
                </nav>
                <small className='copyright'>
                    Copyright &copy; 2025 PixChi拼綺・僅供課堂展示用途
                </small>
            </footer>
        </>
    )
}

export default Footer