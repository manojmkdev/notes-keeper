import React, { useState } from 'react';
import { toast } from 'react-toastify';
import './Profile.css';

export default function Profile() {
  const currentUser = JSON.parse(localStorage.getItem('nk_user') || '{}');
  const [form, setForm] = useState({
    name: currentUser.name || '',
    email: currentUser.email || '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!form.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (form.password) {
      if (form.password.length < 6) {
        newErrors.password = 'Password must be at least 6 characters';
      }
      if (form.password !== form.confirmPassword) {
        newErrors.confirmPassword = 'Password do not match';
      }
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Update nk_users array
    const users = JSON.parse(localStorage.getItem('nk_users') || '[]');
    const userIndex = users.findIndex(u => u.email === form.email);
    
    if (userIndex !== -1) {
      // Validate that the new password is not the same as the old password
      if (form.password && users[userIndex].password === form.password) {
        toast.error("New password cannot be old one. Add a new password.");
        return;
      }

      const updatedUser = {
        ...users[userIndex],
        name: form.name
      };
      if (form.password) {
        updatedUser.password = form.password;
      }
      users[userIndex] = updatedUser;
      localStorage.setItem('nk_users', JSON.stringify(users));

      // Update current user
      const updatedCurrentUser = {
        ...currentUser,
        name: form.name
      };
      localStorage.setItem('nk_user', JSON.stringify(updatedCurrentUser));
      toast.success('Profile updated successfully!');
      
      // Clear password fields
      setForm(prev => ({ ...prev, password: '', confirmPassword: '' }));
    } else {
      toast.error('Error updating profile.');
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-avatar-large">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="7" r="4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="profile-title-group">
            <h2 className="profile-title">{currentUser.name}</h2>
            <p className="profile-subtitle">Personal Account Details</p>
          </div>
        </div>

        <div className="profile-stats">
          <div className="profile-stat-box">
            <span className="profile-stat-label">Member Since</span>
            <span className="profile-stat-value">{currentUser.memberSince || 'June 2026'}</span>
          </div>
          <div className="profile-stat-box">
            <span className="profile-stat-label">Last Login</span>
            <span className="profile-stat-value">{currentUser.lastLogin || 'Today'}</span>
          </div>
        </div>

        <form onSubmit={handleUpdate} className="profile-form" noValidate>
          <div className="profile-form-row">
            <div className="profile-form-group">
              <label className="profile-label">Email Address</label>
              <input
                type="email"
                className="profile-input form-control"
                value={form.email}
                disabled
              />
              <span className="profile-input-help">Cannot be changed.</span>
            </div>

            <div className="profile-form-group">
              <label className="profile-label">Full Name</label>
              <input
                type="text"
                name="name"
                className={`profile-input form-control ${errors.name ? 'is-invalid' : ''}`}
                value={form.name}
                onChange={handleChange}
              />
              {errors.name && <div className="invalid-feedback">{errors.name}</div>}
            </div>
          </div>

          <div className="profile-divider">
            <span>Change Password</span>
          </div>

          <div className="profile-form-row">
            <div className="profile-form-group">
              <label className="profile-label">New Password</label>
              <input
                type="password"
                name="password"
                className={`profile-input form-control ${errors.password ? 'is-invalid' : ''}`}
                placeholder="Leave blank to keep current"
                value={form.password}
                onChange={handleChange}
              />
              {errors.password && <div className="invalid-feedback">{errors.password}</div>}
            </div>

            <div className="profile-form-group">
              <label className="profile-label">Confirm New Password</label>
              <input
                type="password"
                name="confirmPassword"
                className={`profile-input form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                placeholder="Confirm new password"
                value={form.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
            </div>
          </div>

          <button type="submit" className="profile-save-btn">Save Changes</button>
        </form>
      </div>
    </div>
  );
}
