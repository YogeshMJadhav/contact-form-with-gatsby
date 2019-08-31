import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
      <form name="contact" method="post" netlify netlify-honeypot="bot-field" hidden>
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label>Your Name: <input type="text" name="name"/></label>
        </p>
        <p>
          <label>Your Email: <input type="email" name="email"/></label>
        </p>
        <p>
          <label>Message: <textarea name="message"></textarea></label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
