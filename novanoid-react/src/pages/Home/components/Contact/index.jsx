import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import './Contact.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef, useState } from 'react';

function Contact() {
  let greetUser = useRef(null);
  let errorInput = useRef(null);
  let nameInput = useRef(null);
  let emailInput = useRef(null);
  let phoneInput = useRef(null);
  let subjectInput = useRef(null);
  let messageInput = useRef(null);
  // let [validInput, setValidInput] = useState(false);
  let validInput = true;
  const [value, setValue] = useState('');
  const handleChange = (event) => {
    const result = event.target.value.replace(/\D/g, '');
    setValue(result);
  };
  const errorStyle = "1px solid red'";
  const submitForm = () => {
    validInput = true;
    nameInput.current.style.border =
      emailInput.current.style.border =
      phoneInput.current.style.border =
      subjectInput.current.style.border =
      messageInput.current.style.border =
      errorInput.current.innerHTML =
      greetUser.current.innerHTML =
        '';
    if (nameInput.current.value.length < 4) {
      let error = document.createTextNode('Name must be at least 4 characters. ');
      errorInput.current.appendChild(error);
      validInput = false;
      nameInput.current.style.border = errorStyle;
    }
    if (!emailInput.current.value.includes('@gmail.com')) {
      let error = document.createTextNode('Email must be valid. ');
      errorInput.current.appendChild(error);
      validInput = false;
      emailInput.current.style.border = errorStyle;
    }
    if (phoneInput.current.value.length < 10) {
      let error = document.createTextNode('Phone number must be 10 numbers. ');
      errorInput.current.appendChild(error);
      validInput = false;
      phoneInput.current.style.border = errorStyle;
    }
    if (subjectInput.current.value.length < 4) {
      let error = document.createTextNode('Subject must be at least 4 characters. ');
      errorInput.current.appendChild(error);
      validInput = false;
      subjectInput.current.style.border = errorStyle;
    }
    if (messageInput.current.value.length < 4) {
      let error = document.createTextNode('Message must be at least 4 characters. ');
      errorInput.current.appendChild(error);
      validInput = false;
      messageInput.current.style.border = errorStyle;
    }

    if (validInput === true) {
      greetUser.current.innerHTML = 'Hello ' + nameInput.current.value + '. Thank you for your message';
    }
  };
  return (
    <div id="contact" className="contact-container">
      <h2>CONTACT US</h2>
      <hr />
      <p className="blog-outer-info">Praesent lacinia sem sed risus consectetur, et volutpat nulla bibendum.</p>
      <div className="contact-flex">
        <div className="contact-flex-item contact-1">
          <h3 className="contact-address-header">ADDRESS</h3>
          <p className="contact-address-body">
            1496 Farland Street
            <br />
            Chicago, IL 60606
          </p>
        </div>
        <div className="contact-flex-item contact-2">
          <h3 className="contact-mail-header">E-MAIL</h3>
          <p className="contact-mail-body">
            <a className="mail" href="mailto: support@example.com">
              support@example.com
            </a>
            <br />
            <a className="mail" href="mailto: maredwinz@gmail.com">
              maredwinz@gmail.com
            </a>
          </p>
        </div>
        <div className="contact-flex-item contact-3">
          <h3 className="contact-phone-header">PHONE</h3>
          <p className="contact-phone-body">
            773-920-3653
            <br />
            985-796-6997
          </p>
        </div>
      </div>
      <form action="#" method="get" className="contact-form">
        <div className="name-div">
          <input
            className="form-input"
            id="form-name"
            type="text"
            placeholder="Name"
            name="Name"
            required
            minLength={3}
            ref={nameInput}
          />
        </div>
        <div className="email-div">
          <input
            className="form-input"
            ref={emailInput}
            id="form-email"
            type="email"
            placeholder="Email"
            name="Email"
            required
          />
        </div>
        <div className="number-div">
          <input
            className="form-input"
            id="form-number"
            type="text"
            placeholder="Phone number"
            name="Phone number"
            required
            maxLength={10}
            value={value}
            onChange={handleChange}
            ref={phoneInput}
          />
        </div>
        <div className="subject-div">
          <input
            className="form-input"
            id="form-subject"
            type="text"
            placeholder="Subject"
            name="Subject"
            required
            minLength={3}
            ref={subjectInput}
          />
        </div>
        <div className="message-div">
          <textarea
            className="form-input"
            id="form-message"
            type="text"
            placeholder="Message"
            name="Message"
            required
            minLength={3}
            defaultValue={''}
            ref={messageInput}
          />
        </div>
        <button id="form-send-message" type="button" value="Submit" className="contact-form-btn" onClick={submitForm}>
          <FontAwesomeIcon icon={faPaperPlane} className="icon" size="lg" />
          SEND MESSAGE
        </button>
      </form>
      <div ref={errorInput} id="input-error" />
      <div ref={greetUser} id="greet-user" />
    </div>
  );
}

export default Contact;
