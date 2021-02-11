import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

const Contact = ({ data }) => (
  <Layout>
    <div className="contact">
      <Link className="contact__link" to="/contact/">
        email
      </Link>
      <Link
        className="contact__link"
        to="https://www.linkedin.com/in/dmytro-bula-74a56a1a5/"
      >
        linkedIn
      </Link>
      <h1 className="contact__title">Contact me</h1>
      <p className="contact__para">
        I’m intrested in freelance{" "}
        <span className="red link">opportunities</span>, web development and web
        designing, large and small projects however, if you have any other
        requests or questions, my inbox is always open,{" "}
        <span className="red link">feel </span>
        free to <span className="red link">contact</span> me and say hi, I will
        do my best to get back to you!
      </p>
      <form
        action="https://formspree.io/f/mvovynve"
        method="POST"
        className="contact__form"
      >
        <div className="contact__form__first">
          <input
            className="contact__input"
            type="text"
            name="name"
            placeholder="Name"
          ></input>
          <input
            className="contact__input"
            type="email"
            name="_replyto"
            placeholder="Email"
          ></input>
        </div>
        <input
          className="contact__input"
          type="text"
          name="subject"
          placeholder="Subject"
        ></input>
        <input type="text" name="_gotcha" style={{ display: "none" }} />
        <textarea
          name="message"
          className="contact__input contact__input__textarea"
          placeholder="Message"
        ></textarea>
        <button type="submit" value="Send" className="contact__form__btn btn">
          Send
        </button>
      </form>
      <div className="contact__media">
        <div className="contact__media__left">
          <Link className="contact__media__item" to="https://vk.com/d1ma6z">
            vkontakte
          </Link>
          <Link
            className="contact__media__item"
            to="https://www.instagram.com/d1ma6/"
          >
            instagram
          </Link>
          <Link
            className="contact__media__item"
            to="https://www.facebook.com/d1ma6/"
          >
            facebook
          </Link>
        </div>
        <div className="contact__media__right">
          <Link
            className="contact__media__item"
            to="https://www.linkedin.com/in/dmytro-bula-74a56a1a5/"
          >
            linkedIn
          </Link>
          <Link className="contact__media__item" to="/">
            twitter
          </Link>
          <Link
            className="contact__media__item"
            to="https://www.behance.net/dmytrobula"
          >
            behance
          </Link>
        </div>
      </div>
    </div>
  </Layout>
)

export default Contact
