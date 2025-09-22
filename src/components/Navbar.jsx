import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Navbar.scss"

const Navbar = ({ theme }) => {
    return (
        <>
            <header id='topbar'>
                <nav className={`nav ${theme}`}>
                    <Link to="/">
                        <div className='logo'>
                            <img src="./logo.webp" alt="PixChi" loading="lazy" />
                        </div>
                    </Link>
                    <ul>
                        <li><Link to='/Materialize'>實體化計畫</Link></li>
                        <li><Link to='/HealingCorner'>療癒角落</Link></li>
                        <li><Link to='/Classroom'>小教室</Link></li>
                        <li><Link to='/About'>關於我</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Navbar