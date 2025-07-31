import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import css from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.footerContainer}>
        {/* Top Section */}
        <div className={css.footerTop}>
          <div className={css.footerColumn}>
            <h3 className={css.footerTitle}>About NexMed</h3>
            <p className={css.footerAbout}>
              NexMed is a platform connecting medicine donors with those in need, ensuring safe and responsible distribution of unused medications to underserved communities.
            </p>
            <div className={css.socialLinks}>
              <a href="#" aria-label="Facebook"><FaFacebook /></a>
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
            </div>
          </div>

          <div className={css.footerColumn}>
            <h3 className={css.footerTitle}>Quick Links</h3>
            <ul className={css.footerLinks}>
              <li><a href="#">Home</a></li>
              <li><a href="#">Donate Medicines</a></li>
              <li><a href="#">Request Medicines</a></li>
              <li><a href="#">How It Works</a></li>
              <li><a href="#">Success Stories</a></li>
              <li><a href="#">AI Health Assistant</a></li>
            </ul>
          </div>

          <div className={css.footerColumn}>
            <h3 className={css.footerTitle}>Important Info</h3>
            <ul className={css.footerLinks}>
              <li><a href="#">Eligible Medicines</a></li>
              <li><a href="#">Safety Guidelines</a></li>
              <li><a href="#">Legal Disclaimer</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>

          <div className={css.footerColumn}>
            <h3 className={css.footerTitle}>Contact Us</h3>
            <ul className={css.contactInfo}>
              <li>
                <FaMapMarkerAlt />
                <span>123 Health Avenue, Medical City, 100001</span>
              </li>
              <li>
                <FaPhone />
                <span>+1 (800) MED-HELP</span>
              </li>
              <li>
                <FaEnvelope />
                <span>help@nexmed.org</span>
              </li>
            </ul>
            <div className={css.newsletter}>
              <h4>Subscribe to our Newsletter</h4>
              <form className={css.newsletterForm}>
                <input type="email" placeholder="Your email address" required />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={css.footerBottom}>
          <div className={css.copyright}>
            &copy; {new Date().getFullYear()} NexMed. All rights reserved.
          </div>
          <div className={css.legalLinks}>
            <a href="#">Privacy Policy</a>
            <span>|</span>
            <a href="#">Terms of Use</a>
            <span>|</span>
            <a href="#">Cookie Policy</a>
          </div>
          <div className={css.healthDisclaimer}>
            <p>
              <strong>Important:</strong> NexMed facilitates medicine redistribution but does not provide medical advice. 
              Always consult a healthcare professional before using any medication.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;