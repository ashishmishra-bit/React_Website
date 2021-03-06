import React from 'react'
import ContactItem from '../Components/ContactItem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';
import Tittle from '../Components/Tittle';

function ContactPage() {
    return (
        <div>
            <div className="title">
                <Tittle title={'Contact'} span={'Contact'} />
            </div>
            <div className="ContactPage">
                <div className="map-sect">
                
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28653.80259145901!2d91.81701377541614!3d26.140497475468685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375af629cf3a5aa9%3A0xdc59dd3b0fb8073e!2sRailline%20Kali%20Mandir!5e0!3m2!1sen!2sin!4v1615002140223!5m2!1sen!2sin" width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                </div>
                <div className="contact-sect">
                    <ContactItem icon={phone} text1={'+91-8822161061'}  title={'Phone'}/>
                    <ContactItem icon={email} text1={'ashish.mishra52002@gmail.com'} title={'Email'}/>
                    <ContactItem icon={location} text1={'Guwahati , Assam'} text2={'India'} title={'Address'}/>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;
