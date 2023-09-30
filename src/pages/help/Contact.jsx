export default function Contact() {
    return (
      <div className="contact">
        <h3>Contact Us</h3>
        <form>
          <label>
            <span>Your email:</span>
            <input type="email" name="email" required />
          </label>
          <label>
            <span>Your message:</span>
            <textarea name="message" required col></textarea>
          </label>
          <button className="contact-btn">Submit</button>
        </form>
      </div>
    )
  }