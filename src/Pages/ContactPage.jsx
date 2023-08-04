import React from "react";
import "./DefaultPagestyle.css";
import { useState } from "react";
import "./DefaultPagestyle.css";

function ContactPage() {
 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, showSuccessMessage] = useState("");

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  return (
    <>
      <div className="Question-header">
        <h1>Please feel free to contact me below</h1>
      </div>
      <form className="feedbackform">
        <input type="hidden" name="form-name" value="feedbackform" />
        <p>
          <label className="input">
            Name:
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </p>
        <p>
          <label className="input">
            Email:
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </p>
        <p>
          <label className="input">
            Message:
            <textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </label>
        </p>
        <p>
          <button
            id="ButtonMood"
            type="submit"
            onClick={(event) => {
              event.preventDefault();
              console.log(event);

              fetch("/", {
                method: "POST",
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded",
                },
                body: encode({
                  "form-name": "feedbackform",
                  name,
                  email,
                  message,
                }),
              })
                .then(() => showSuccessMessage(true))
                .catch((error) => alert(error));
            }}
          >
            Send
          </button>
        </p>
      </form>
      {successMessage && (
        <div>
          <h1 className="Question-header">Feedback submitted successfully</h1>
          <p>Thank you for your feeback!</p>
        </div>
      )}
    
    </>
  );
}

export default ContactPage;
