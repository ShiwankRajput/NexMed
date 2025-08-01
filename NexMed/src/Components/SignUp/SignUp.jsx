import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './SignUp.module.css'; // Changed to module.css

function SignUp() {
  const [userType, setUserType] = useState('donor');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    address: '',
    medicalLicense: '',
    specialization: '',
    organizationName: '',
    registrationNumber: '',
    contactPerson: '',
    website: '',
    taxExemptStatus: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className={styles.signupContainer}>
      <div className={styles.signupHeader}>
        <h2>Create Your NextMed Account</h2>
        <p>Join us in making healthcare accessible to all</p>
      </div>

      <div className={styles.userTypeSelector}>
        <button
          className={`${styles.typeBtn} ${userType === 'donor' ? styles.active : ''}`}
          onClick={() => setUserType('donor')}
        >
          I'm a Medicine Donor
        </button>
        <button
          className={`${styles.typeBtn} ${userType === 'ngo' ? styles.active : ''}`}
          onClick={() => setUserType('ngo')}
        >
          I'm an NGO/Organization
        </button>
      </div>

      <form onSubmit={handleSubmit} className={styles.signupForm}>
        <div className={styles.formGroup}>
          <label htmlFor="name">{userType === 'donor' ? 'Full Name' : 'Contact Person Name'}</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            minLength="8"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="address">Address</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        {userType === 'donor' ? (
          <>
            <div className={styles.formGroup}>
              <label htmlFor="medicalLicense">Medical License Number (if applicable)</label>
              <input
                type="text"
                id="medicalLicense"
                name="medicalLicense"
                value={formData.medicalLicense}
                onChange={handleChange}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="specialization">Specialization/Profession</label>
              <input
                type="text"
                id="specialization"
                name="specialization"
                value={formData.specialization}
                onChange={handleChange}
              />
            </div>

            <div className={styles.verificationSection}>
              <h4>Verification Documents</h4>
              <p>Please be ready to provide the following for verification:</p>
              <ul>
                <li>Government-issued ID</li>
                <li>Medical license (if applicable)</li>
                <li>Proof of address</li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <div className={styles.formGroup}>
              <label htmlFor="organizationName">Organization Name</label>
              <input
                type="text"
                id="organizationName"
                name="organizationName"
                value={formData.organizationName}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="registrationNumber">Registration Number</label>
              <input
                type="text"
                id="registrationNumber"
                name="registrationNumber"
                value={formData.registrationNumber}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="website">Website URL</label>
              <input
                type="url"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleChange}
              />
            </div>

            <div className={`${styles.formGroup} ${styles.checkboxGroup}`}>
              <input
                type="checkbox"
                id="taxExemptStatus"
                name="taxExemptStatus"
                checked={formData.taxExemptStatus}
                onChange={handleChange}
              />
              <label htmlFor="taxExemptStatus">Tax-exempt organization (501(c)(3) or equivalent)</label>
            </div>

            <div className={styles.verificationSection}>
              <h4>Organization Verification</h4>
              <p>Please be ready to provide the following documents:</p>
              <ul>
                <li>Certificate of registration</li>
                <li>Tax exemption certificate (if applicable)</li>
                <li>Organization bank details for verification</li>
                <li>Letter of authorization for the contact person</li>
              </ul>
            </div>
          </>
        )}

        <div className={`${styles.formGroup} ${styles.checkboxGroup}`}>
          <input
            type="checkbox"
            id="terms"
            name="terms"
            required
          />
          <label htmlFor="terms">
            I agree to the <Link to="/terms">Terms of Service</Link> and <Link to="/privacy">Privacy Policy</Link>
          </label>
        </div>

        <button type="submit" className={styles.submitBtn}>Create Account</button>

        <div className={styles.loginLink}>
          Already have an account? <Link to="/login">Log in</Link>
        </div>
      </form>
    </div>
  );
}

export default SignUp;