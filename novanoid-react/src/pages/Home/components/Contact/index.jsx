import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import './Contact.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Contact() {
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
            <a
              href="mailto: support@example.com"
              style={{
                textDecoration: 'none !important',
                color: '#48cfae !important',
                fontFamily: '"Roboto", sans-serif !important',
                fontSize: '13px !important',
              }}
            >
              support@example.com
            </a>
            <br />
            <a
              href="mailto: maredwinz@gmail.com"
              style={{
                textDecoration: 'none !important',
                color: '#48cfae !important',
                fontFamily: '"Roboto", sans-serif !important',
                fontSize: '13px !important',
              }}
            >
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
            name="input-name"
            required=""
            minLength={3}
          />
        </div>
        <div className="email-div">
          <input
            className="form-input"
            id="form-email"
            type="email"
            placeholder="Email"
            name="input-email"
            required=""
          />
        </div>
        <div className="number-div">
          <input
            className="form-input"
            id="form-number"
            type="text"
            placeholder="Phone number"
            name="input-number"
            required=""
            maxLength={10}
            onkeypress="return isNumberKey(event)"
          />
        </div>
        <div className="subject-div">
          <input
            className="form-input"
            id="form-subject"
            type="text"
            placeholder="Subject"
            name="input-subject"
            required=""
            minLength={3}
          />
        </div>
        <div className="message-div">
          <textarea
            className="form-input"
            id="form-message"
            type="text"
            placeholder="Message"
            name="input-message"
            required=""
            minLength={3}
            defaultValue={''}
          />
        </div>
        <button id="form-send-message" type="button" value="Submit" className="contact-form-btn" onclick="submitForm()">
          <FontAwesomeIcon icon={faPaperPlane} className="icon" size="lg" />
          SEND MESSAGE
        </button>
      </form>
      <div id="input-error" />
      <div id="greet-user" />
    </div>
  );
}
export default Contact;
