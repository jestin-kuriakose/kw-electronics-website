// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React, { Fragment } from "react";
import { useForm, ValidationError } from "@formspree/react";
import classes from "./ContactForm.module.css";
import Card from "../components/UI/Card";

function ContactForm() {
  const [state, handleSubmit] = useForm("xdoyvynl");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <div className={classes.contact}>
      <Card>
        <h1>Contact us</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email Address</label>
          <input id="email" type="email" name="email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <label>Message</label>
          <textarea id="message" name="message" />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button type="submit" disabled={state.submitting}>
            Submit
          </button>
        </form>
      </Card>
    </div>
  );
}

export default ContactForm;
