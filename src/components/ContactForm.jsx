import React, { useState } from "react";
import supabase from "../api/supabase";
import QRCode from "qrcode";
import { uid } from "uid";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formError, setFormError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // You can handle form submission logic here

    if ((!name, !email, !message)) {
      setFormError("Please input the correctly ");
      return;
    }

    const QR_code_ID = uid().toString();

    const { error } = await supabase.from("DemoApp").insert({
      name: name,
      email: email,
      message: message,
      QR_code_ID: QR_code_ID,
    });

    QRCode.toDataURL(QR_code_ID)
      .then((url) => {
        console.log(url);
      })
      .catch((err) => {
        console.error(err);
      });

    if (error) {
      setFormError("Please input the correctly ");
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="border-2 p-16">
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      {formError && <p className="error">{formError}</p>}
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
