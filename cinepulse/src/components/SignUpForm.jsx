import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/SignUpForm.css';

const SignUpForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [reenterPassword, setReenterPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    if (password !== reenterPassword) {
      setError('Passwords do not match.');
      return;
    }
    // Handle sign-up logic here
    setError('');
    alert('Sign-up successful!');
  };

  return (
    <div className="login-form">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUpSubmit}>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
          required
        />
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="tel"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          placeholder="Mobile Number"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <input
          type="password"
          value={reenterPassword}
          onChange={(e) => setReenterPassword(e.target.value)}
          placeholder="Re-enter Password"
          required
        />
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Sign Up</button>
      </form>
      <div className="login-form-footer">
        <Link to="/login">Back to Sign In</Link>
      </div>
    </div>
  );
};

export default SignUpForm;




