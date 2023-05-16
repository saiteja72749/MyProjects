import React, { useRef } from "react";
import emailjs from 'emailjs-com';
const Gmail = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        // e.target.reset()

        // console.log('mail sent')
        const { 0: name, 1: email, 2: message } = form.current;
        console.log({ name: name.value, email: email.value, message: message.value });
        emailjs.sendForm('service_4aoupwu', 'template_x1ciibj', form.current, 'JFEB9cka8w0T7GpPH')
            .then((result) => {
                console.log(result.text)
            }, (error) => {
                console.log(error.text)
            })
        e.target.reset()
    }
    return (
        <form ref={form} onSubmit={sendEmail}>
            <center>
                <label>name</label>
                <input type='text' name='user_name' />
                <br />
                <label>email</label>
                <input type='email' name='email' />
                <br />
                <label>Message</label>
                <textarea name='message' />
                <br />
                <button name='user_name'>submit</button>
            </center>
        </form>
    )
}
export default Gmail
