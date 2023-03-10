import React, { useState } from 'react'
import './style.css';
import { Link } from 'react-router-dom';
import { IoMdMenu } from "react-icons/io";
import { RiCloseLine } from "react-icons/ri";
import { MdOutlineSendToMobile } from 'react-icons/md';
import List from './List';
import Button from './Button';


function Navbar(props) {
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    const handleClick = () => {
        setIsNavExpanded(!isNavExpanded);
    }

    const handleSignUp = () => {
        props.setSignUp(!props.signup);
        setIsNavExpanded(!isNavExpanded);
    }

    const handleLogin = () => {
        props.setLogin(!props.login);
        setIsNavExpanded(!isNavExpanded);
    }

    return (
        <nav className='navbar'>
            {!isNavExpanded ?
                <IoMdMenu onClick={handleClick} className='hamburger-icon' />
                :
                null}
            <div className={`smallScreen ${isNavExpanded && 'open'}`} >
                {isNavExpanded ?
                    <div className='smallItem'>
                        <RiCloseLine onClick={handleClick} className='hamburger-cross' />
                        <List link='/investorRelations' title='Investor Relations' />
                        <List link='/' title='Add Restaurant' />
                        <Button click={handleLogin} title='Log in' />
                        <Button click={handleSignUp} title='Sign up' />
                    </div> : null}


            </div>


            <div className='largeScreen'>
                <Link to='/' className='add'>
                    <MdOutlineSendToMobile /> <span>Get the App</span>
                </Link>
                <div className='item'>
                    <List link='/investorRelations' title='Investor Relations' />
                    <List link='/' title='Add Restaurant' />
                    <Button click={handleLogin} title='Log in' />
                    <Button click={handleSignUp} title='Sign up' />
                </div>
            </div>

            {/* <div className='hamburger-heading'>
                <button className='hamburger'
                    onClick={handleClick} >
                    {isNavExpanded ?
                        <RiCloseLine className='hamburger-cross' />
                        : <IoMdMenu className='hamburger-icon' />
                    }
                </button>
                {isNavExpanded ? <div>
                    <span className='title'>zomato</span>
                </div> : null}
            </div>
            <div className={isNavExpanded ? 'navigation-menu expanded' : "navigation-menu"}>
                {!isNavExpanded ? <div className='add'>
                    <MdOutlineSendToMobile /> <span>Get the App</span>
                </div> : ''}
                <div className='menu-link' >
                    <List>Investor Relations</List>
                    <List>Add restaurant</List>
                    <List>Log in</List>
                    <List>Sign up</List>
                </div>
            </div> */}
        </nav>
    )
}

export default Navbar