import React from 'react';
import './footer.css'


const Footer = () => {
    return (
        <div>
            <div className="socialMediaHolder">
                {/*<img className="socialMediaItem" src={aparat}/>*/}
                {/*<img className="socialMediaItem" src={twitter}/>*/}
                {/*<img className="socialMediaItem" src={insta}/>*/}
                {/*<img className="socialMediaItem" src={uTube}/>*/}
            </div>
            <div className="footerItemsHolder">
                <div className="footerItem centerContent">
                    {/*<img className='gbLink' src={logo}/>*/}
                    <h3 className='gbLinkTitle'>آلفاویژن</h3>
                    {/*<img className="gpLink" src={gp}/>*/}
                </div>
                <div className="footerItem">
                    <p>سینما</p>
                    <p>جشنواره های گیم</p>
                    <p>تخفیف ها</p>
                </div>
                <div className="footerItem">
                    <p>دسترسی ها</p>
                    <p>علم و فناوری</p>
                    <p>بازی</p>
                </div>
                <div className="footerItem">
                    <p>ورود به تورنومنت</p>
                    <p>قوانین و مقررات</p>
                    <p>درباره ما</p>
                </div>
            </div>
            <p className="copyRightText">Copyright 2019-2020 AlphaVision. All rights reserved.</p>
        </div>
    );
};

export default Footer;
