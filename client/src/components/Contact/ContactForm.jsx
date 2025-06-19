import React from "react";
import { useRef } from "react";

const ContactForm = () => {
  const form = useRef();
  
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");  
  const [phone, setPhone] = React.useState("");
  const [subject, setSubject] = React.useState(""); 
  const [customAlert, setCustomAlert] = React.useState(false);
  const [alertMessage, setAlertMessage] = React.useState("");

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setAlertMessage("Please enter a valid email address");
      setCustomAlert(true);
      setTimeout(() => setCustomAlert(false), 3000);
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          subject
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setAlertMessage("Thanks for reaching us..");
        setCustomAlert(true);
        setName("");
        setEmail("");
        setPhone("");
        setSubject("");
        setTimeout(() => setCustomAlert(false), 3000);
      } else {
        throw new Error(data.message || 'Failed to send message');
      }
    } catch (error) {
      setAlertMessage("Failed to send. Try again!");
      setCustomAlert(true);
      setTimeout(() => setCustomAlert(false), 3000);
    }
  };

  return (
    <div className="consultation-form-wrap">
      <h3 className="title">Contact Us </h3>
      {customAlert && (
        <div className="custom-alert">
            {alertMessage}
        </div>
      )}
      <form ref={form} onSubmit={sendEmail}>
        <div className="form-grp">
          <input 
            type="text" 
            name="name" 
            placeholder="Name" 
            value={name}  
            required 
            onChange={(e)=>setName(e.target.value)}
          />
        </div>
        <div className="form-grp">
          <input 
            type="email" 
            name="email" 
            placeholder="Email Address" 
            value={email} 
            required 
            pattern="^[a-zA-Z0-9._%+-]+@gmail+\.com$"
            onInvalid={(e) => e.target.setCustomValidity("Please enter a valid email address")} 
            onInput={(e) => e.target.setCustomValidity("")} 
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-grp">
          <input 
            type="text" 
            name="phone" 
            placeholder="Phone Number" 
            value={phone} 
            minLength={10} 
            maxLength={10}  
            required 
            onChange={(e)=>setPhone(e.target.value)}
          />
        </div>
        <div className="form-grp">
          <select
            id="shortBy"
            name="subject"
            className="form-select"
            aria-label="Default select example"
            value={subject}
            required
            onChange={(e) => setSubject(e.target.value)}
          >
            <option value="">Subject</option>
            <option>Websites</option>
            <option>Mobile Application</option>
            <option>Digital Marketing</option>
            <option>Ai Models</option>
            <option>Other</option>
          </select>
        </div>
        <button className="btn" type="submit">
          Let's Strategize
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
