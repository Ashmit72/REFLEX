"use client";
import './HelpSection.scss';

import {
    FaEnvelope,
    FaMapMarkerAlt,
} from 'react-icons/fa';
import { MdPhoneInTalk } from 'react-icons/md';

const HelpSection = () => {


    const handleSubmit = (e) => {
        e.preventDefault()
    }


    return (
        <div className='container-2' >
            <div className='header' >
                <h1>How can we help you?</h1>
                <p>Our team of experienced professionals is committed to delivering
                    the highest level of service and support
                </p>
            </div>

            <div className='boxes'>
                <div className='form-box' >
                    <h1>Send us a Message</h1>
                    <form onSubmit={handleSubmit} >
                        <label>
                            Name:
                            <input required />
                        </label>
                        <label>
                            Email:
                            <input required type='message' />
                        </label>
                        <label>
                            Message:
                            <textarea required />
                        </label>
                        <button>
                            Send
                        </button>
                    </form>



                </div>
                <div className='contact-box' >

                    <div className='contact-items'>

                        <div className='title-text'>
                            <h1>Contact Us</h1>
                            <p className='title' >
                                We’re open for any suggestion or just to have a chat.
                            </p>
                        </div>

                        <div className='items' >
                            <div className='icons' >
                                <FaMapMarkerAlt />
                                <p>Address: Dillibazar sadak , Kathmandu, Nepal</p>

                            </div>
                            <div className='icons' >
                                <MdPhoneInTalk />
                                <p>Phone: 9863428093, 9823345822 </p>

                            </div>
                            <div className='icons' >
                                <FaEnvelope />
                                <p>Email: contact@reflexitsolution.com </p>

                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div >
    )
}

export default HelpSection