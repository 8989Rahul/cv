import React, { Component } from "react";

class ContactMe extends Component {
  render() {
    return (
      <div>
        <h1>My Contact Deatails</h1>
        <p>9421160486</p>
        <p>abc@gmail.com</p>
        <hr />
        <form
          action="mailto:daghalerahul0@gmail.com"
          method="post"
          encType="text/plain"
        >
          <label>Your Name</label>
          <input type="text" name="yourName" id="" />
          <br />
          <label>Your Email</label>
          <input type="email" name="yourEmail" id="" />
          <br />
          <label> Your Message</label>
          <br />
          <textarea name="yourMessage" id="" cols="30" rows="10" />
          <br />
          <input type="submit" name="" value="Submit" />
        </form>
      </div>
    );
  }
}

export default ContactMe;
