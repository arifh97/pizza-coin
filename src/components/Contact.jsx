import { Container, Row, Col } from "react-bootstrap"
import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import MarqueeTop from './MarqueeTop'
import logo from '../assets/img/contact-logo.png'
import bg from '../assets/img/contact-bg.png'

import { useRef } from 'react';
import emailjs from '@emailjs/browser';


export default function Contact() {
    const [verfied, setVerifed] = useState(false);
    function onChange(value) {
      console.log("Captcha value:", value);
      setVerifed(true);
    }


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_xu7picy', 'template_yu7gdbd', form.current, {
                publicKey: 'yEj4uR_S3N6Y2WGKt',
            })
            .then(
                () => {
                    alert('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div className="contact position-relative">
            <div className="contact-bg position-absolute start-0 bottom-0 w-100 z-n1"><img src={bg} className="w-100 h-auto" alt="" /></div>
            <MarqueeTop />
            <Container className="position-relative">
                <div className="contact-logo d-none d-md-block position-absolute start-0"><img className="w-100 h-100" src={logo} alt="" /></div>
                <div className="contact-logo d-none d-md-block position-absolute end-0 large"><img className="w-100 h-100" src={logo} alt="" /></div>
                <Row className="justify-content-center">
                    <Col xs={12} md={10} lg={8}>
                        <div className="section-title text-center">
                            <h2>Contact us</h2>
                        </div>
                        <form ref={form} onSubmit={sendEmail} className="contact-wrap">
                            <div className="form-box mb-4">
                                <label htmlFor="#" className="form-label mb-2">Name</label>
                                <input type="text" className="form-control" name="name" placeholder="Jhon Doe" required />
                            </div>
                            <div className="form-box mb-4">
                                <label htmlFor="#" className="form-label mb-2">Email</label>
                                <input type="email" className="form-control" name="email" placeholder="Uirahman92@gmail.com" required />
                            </div>
                            <div className="form-box mb-4">
                                <label htmlFor="#" className="form-label mb-2">Telegram user name</label>
                                <input type="text" className="form-control" name="telegram" placeholder="@uirahman92" required />
                            </div>
                            <div className="form-box">
                                <label htmlFor="#" className="form-label mb-2">Message</label>
                                <textarea name="message" id="" className="form-control" placeholder="Hle ,how are  you, how can i help you"></textarea>
                            </div>
                            <div className="form-box recapcha-from mt-4 pt-md-2 pt-lg-3">
                                <ReCAPTCHA sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"  onChange={onChange}/>
                                <button className="btn d-block text-center w-100 mt-4" type="submit" disabled={!verfied}>Send</button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
