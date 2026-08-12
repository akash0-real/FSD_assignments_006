import { useState } from 'react'
import './App.css'

function App() {
  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    role: 'developer',
    projectType: 'fullstack',
    rating: 5,
    newsletter: true,
    comments: '',
    fileName: ''
  })

  // Errors state
  const [errors, setErrors] = useState({})
  // UI state: 'form' | 'submitting' | 'submitted'
  const [status, setStatus] = useState('form')

  const moodLabels = {
    1: 'Needs Improvement 🙁',
    2: 'Fair 😐',
    3: 'Good 😊',
    4: 'Very Good 😃',
    5: 'Outstanding 🤩'
  }

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))

    // Clear error on user edit
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  // File Upload Handle
  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setFormData((prev) => ({ ...prev, fileName: file.name }))
    }
  }

  // Validation Logic
  const validate = () => {
    const newErrors = {}
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required'
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = 'Name must be at least 3 characters'
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required'
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (formData.comments.length > 300) {
      newErrors.comments = 'Comments cannot exceed 300 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Form Submit
  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      setStatus('submitting')
      setTimeout(() => {
        setStatus('submitted')
      }, 1000)
    }
  }

  // Reset Form
  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      role: 'developer',
      projectType: 'fullstack',
      rating: 5,
      newsletter: true,
      comments: '',
      fileName: ''
    })
    setErrors({})
    setStatus('form')
  }

  return (
    <div className="app-container">
      {/* Header Banner */}
      <header style={{ textAlign: 'center', marginBottom: '1rem' }}>
        <div className="header-badge" style={{ margin: '0 auto 0.75rem auto' }}>
          <span className="badge-dot"></span>
          Form Studio Demo
        </div>
        <h1 className="main-title">Interactive Registration & Feedback</h1>
        <p className="main-subtitle" style={{ margin: '0 auto' }}>
          Experience real-time input validation, responsive visual preview, and modern glassmorphism design.
        </p>
      </header>

      {status === 'submitted' ? (
        /* Submission Success Card */
        <div className="submitted-card">
          <div className="success-icon-badge">✓</div>
          <h2 style={{ fontSize: '1.8rem', color: '#f8fafc', margin: 0 }}>
            Submission Complete!
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '450px' }}>
            Thank you, <strong style={{ color: '#ffffff' }}>{formData.fullName}</strong>. Your feedback and registration details have been received successfully.
          </p>

          <div className="submitted-summary">
            <div className="summary-row">
              <span className="summary-key">Full Name</span>
              <span className="summary-val">{formData.fullName}</span>
            </div>
            <div className="summary-row">
              <span className="summary-key">Email Address</span>
              <span className="summary-val">{formData.email}</span>
            </div>
            <div className="summary-row">
              <span className="summary-key">Primary Role</span>
              <span className="summary-val" style={{ textTransform: 'capitalize' }}>{formData.role}</span>
            </div>
            <div className="summary-row">
              <span className="summary-key">Project Domain</span>
              <span className="summary-val" style={{ textTransform: 'uppercase' }}>{formData.projectType}</span>
            </div>
            <div className="summary-row">
              <span className="summary-key">Satisfaction Score</span>
              <span className="summary-val">{formData.rating} / 5</span>
            </div>
            <div className="summary-row">
              <span className="summary-key">Updates Subscribed</span>
              <span className="summary-val">{formData.newsletter ? 'Yes' : 'No'}</span>
            </div>
            {formData.fileName && (
              <div className="summary-row">
                <span className="summary-key">Attachment</span>
                <span className="summary-val">{formData.fileName}</span>
              </div>
            )}
          </div>

          <button className="btn-submit" onClick={handleReset} style={{ maxWidth: '280px' }}>
            Submit Another Response
          </button>
        </div>
      ) : (
        /* Form & Live Preview Grid */
        <div className="content-grid">
          {/* Main Glass Form */}
          <form className="form-glass-card" onSubmit={handleSubmit} noValidate>
            <div className="form-grid">
              
              {/* Full Name */}
              <div className="form-group">
                <label className="form-label" htmlFor="fullName">
                  Full Name <span className="required-star">*</span>
                </label>
                <div className="input-wrapper">
                  <svg className="input-icon" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Alex Morgan"
                    className={`form-input ${errors.fullName ? 'has-error' : ''}`}
                  />
                </div>
                {errors.fullName && <div className="error-message">⚠️ {errors.fullName}</div>}
              </div>

              {/* Email Address */}
              <div className="form-group">
                <label className="form-label" htmlFor="email">
                  Email Address <span className="required-star">*</span>
                </label>
                <div className="input-wrapper">
                  <svg className="input-icon" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alex@example.com"
                    className={`form-input ${errors.email ? 'has-error' : ''}`}
                  />
                </div>
                {errors.email && <div className="error-message">⚠️ {errors.email}</div>}
              </div>

              {/* Select Role */}
              <div className="form-group">
                <label className="form-label" htmlFor="role">Primary Occupation / Role</label>
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="developer">Frontend / Software Engineer</option>
                  <option value="designer">UI/UX Designer</option>
                  <option value="product">Product Manager</option>
                  <option value="data">Data Scientist / AI Engineer</option>
                  <option value="student">Student / Educator</option>
                </select>
              </div>

              {/* Radio Group: Project Domain */}
              <div className="form-group">
                <label className="form-label">Preferred Focus Area</label>
                <div className="radio-group">
                  {[
                    { id: 'fullstack', label: '🚀 Fullstack' },
                    { id: 'frontend', label: '🎨 UI & Web' },
                    { id: 'ai', label: '🤖 AI & ML' },
                    { id: 'mobile', label: '📱 Mobile Apps' }
                  ].map((item) => (
                    <label
                      key={item.id}
                      className={`radio-pill ${formData.projectType === item.id ? 'selected' : ''}`}
                    >
                      <input
                        type="radio"
                        name="projectType"
                        value={item.id}
                        checked={formData.projectType === item.id}
                        onChange={handleChange}
                      />
                      {item.label}
                    </label>
                  ))}
                </div>
              </div>

              {/* Star Rating Selector */}
              <div className="form-group">
                <label className="form-label">Satisfaction Rating</label>
                <div className="rating-container">
                  <div className="stars-list">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        className={`star-btn ${star <= formData.rating ? 'active' : ''}`}
                        onClick={() => setFormData((prev) => ({ ...prev, rating: star }))}
                        aria-label={`Rate ${star} stars`}
                      >
                        ★
                      </button>
                    ))}
                  </div>
                  <div className="rating-mood">{moodLabels[formData.rating]}</div>
                </div>
              </div>

              {/* File Attachment Upload */}
              <div className="form-group">
                <label className="form-label">Attach File (Optional)</label>
                <div className="file-dropzone">
                  <input type="file" onChange={handleFileChange} />
                  <div className="dropzone-content">
                    <span className="upload-icon">📁</span>
                    <span>Click or drag a file to attach</span>
                    {formData.fileName && (
                      <span className="file-name-tag">
                        ✓ {formData.fileName}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Detailed Comments */}
              <div className="form-group">
                <div className="form-label">
                  <span>Additional Feedback</span>
                  <span className="char-count">{formData.comments.length}/300</span>
                </div>
                <textarea
                  name="comments"
                  value={formData.comments}
                  onChange={handleChange}
                  placeholder="Share any thoughts, requests, or notes..."
                  className={`form-textarea ${errors.comments ? 'has-error' : ''}`}
                  maxLength={300}
                />
                {errors.comments && <div className="error-message">⚠️ {errors.comments}</div>}
              </div>

              {/* Toggle Switch */}
              <div className="form-group">
                <div
                  className="switch-wrapper"
                  onClick={() =>
                    setFormData((prev) => ({ ...prev, newsletter: !prev.newsletter }))
                  }
                >
                  <div className="switch-info">
                    <span className="switch-title">Product & Feature Updates</span>
                    <span className="switch-subtitle">Receive occasional product tips & updates</span>
                  </div>
                  <div className={`toggle-switch ${formData.newsletter ? 'active' : ''}`}>
                    <div className="toggle-circle" />
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="button-row">
                <button
                  type="submit"
                  className="btn-submit"
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? (
                    <span>Processing...</span>
                  ) : (
                    <>
                      <span>Submit Details</span>
                      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>
                <button type="button" className="btn-reset" onClick={handleReset}>
                  Reset
                </button>
              </div>

            </div>
          </form>

          {/* Interactive Live Preview */}
          <aside className="preview-card">
            <div className="preview-header">
              <span className="preview-title">
                <span>⚡ Live State</span>
              </span>
              <span className="preview-badge">Real-Time</span>
            </div>

            <div className="preview-item">
              <span className="preview-label">Full Name</span>
              <span className={`preview-value ${!formData.fullName ? 'empty' : ''}`}>
                {formData.fullName || 'Not entered yet'}
              </span>
            </div>

            <div className="preview-item">
              <span className="preview-label">Email</span>
              <span className={`preview-value ${!formData.email ? 'empty' : ''}`}>
                {formData.email || 'Not entered yet'}
              </span>
            </div>

            <div className="preview-item">
              <span className="preview-label">Role</span>
              <span className="preview-value" style={{ textTransform: 'capitalize' }}>
                {formData.role}
              </span>
            </div>

            <div className="preview-item">
              <span className="preview-label">Focus Area</span>
              <span className="preview-value" style={{ textTransform: 'uppercase' }}>
                {formData.projectType}
              </span>
            </div>

            <div className="preview-item">
              <span className="preview-label">Rating</span>
              <span className="preview-value">
                {'★'.repeat(formData.rating)}{'☆'.repeat(5 - formData.rating)} ({formData.rating}/5)
              </span>
            </div>

            <div className="preview-item">
              <span className="preview-label">File Attachment</span>
              <span className={`preview-value ${!formData.fileName ? 'empty' : ''}`}>
                {formData.fileName || 'No file selected'}
              </span>
            </div>

            <div className="preview-item">
              <span className="preview-label">Newsletter</span>
              <span className="preview-value">
                {formData.newsletter ? 'Subscribed ✅' : 'Unsubscribed ❌'}
              </span>
            </div>
          </aside>
        </div>
      )}
    </div>
  )
}

export default App
