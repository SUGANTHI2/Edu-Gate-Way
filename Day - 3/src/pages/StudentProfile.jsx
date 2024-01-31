import React from 'react';
import '../assets/css/StudentProfile.css'
const StudentProfile = () => {
  return (
    <form>
      <h2>Student Profile Form</h2>

      {/* Personal Information */}
      <label>
        First Name:
        <input type="text" required />
      </label>
      <label>
        Middle Name:
        <input type="text" />
      </label>
      <label>
        Last Name:
        <input type="text" required />
      </label>

      {/* Date of Birth */}
      <label>
        Date of Birth:
        <input type="number" placeholder="Day" required />
        <input type="number" placeholder="Month" required />
        <input type="number" placeholder="Year" required />
      </label>

      {/* Gender */}
      <label>
        Gender:
        <select required>
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </label>

      {/* Contact Information */}
      <label>
        Email Address:
        <input type="email" required />
      </label>
      <label>
        Phone Number:
        <input type="tel" required />
      </label>

      {/* Permanent Address */}
      <label>
        Street Address:
        <input type="text" required />
      </label>
      <label>
        City:
        <input type="text" required />
      </label>
      <label>
        State/Province:
        <input type="text" required />
      </label>

      {/* Submit Button */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default StudentProfile;
