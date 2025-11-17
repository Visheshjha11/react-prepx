// src/components/Modal.jsx
import React from "react";

export default function Modal() {
  return (
    <div id="authModal" className="auth-modal" aria-hidden="true">
      <div className="auth-modal-overlay" id="authModalOverlay"></div>

      <div
        className="auth-modal-content"
        role="dialog"
        aria-labelledby="authModalTitle"
        aria-modal="true"
      >
        <button
          className="auth-modal-close"
          id="authModalClose"
          aria-label="Close modal"
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>

        <div className="auth-container-modal">
          <div className="brand-modal">
            <div className="logo-icon"><span>P</span></div>
            <span className="logo-text">Prepx</span>
          </div>

          {/* Log In Form */}
          <section
            className="auth-card-modal active"
            id="signinCardModal"
            aria-labelledby="signinTitleModal"
          >
            <header className="auth-header-modal">
              <div className="auth-tabs-modal">
                <button className="auth-tab-modal active" data-tab="signin">
                  Log In
                </button>
                <button className="auth-tab-modal" data-tab="signup">
                  Sign Up
                </button>
              </div>
              <h1 id="signinTitleModal">Welcome back</h1>
              <p className="subtitle-modal">Log in to continue to your dashboard</p>
            </header>

            <div
              className="social-buttons-modal"
              aria-label="Log in with social account"
            >
              <button
                className="btn btn-social-modal google"
                data-provider="google"
                aria-label="Google"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M21.35 11.1H12v2.9h5.35c-.25 1.5-1.7 4.3-5.35 4.3-3.2 0-5.8-2.7-5.8-6s2.6-6 5.8-6c1.8 0 3 .8 3.7 1.5l2.5-2.4C16.8 3.5 14.6 2.5 12 2.5 6.9 2.5 2.8 6.6 2.8 11.7S6.9 20.9 12 20.9c6.6 0 9.2-4.6 9.2-8.1 0-.6-.06-1.02-.15-1.7z"></path>
                </svg>
                Google
              </button>

              <button
                className="btn btn-social-modal microsoft"
                data-provider="microsoft"
                aria-label="Microsoft"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z"></path>
                </svg>
                Microsoft
              </button>

              <button
                className="btn btn-social-modal github"
                data-provider="github"
                aria-label="GitHub"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 .5a12 12 0 00-3.79 23.4c.6.1.82-.26.82-.58v-2.2c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.35-1.78-1.35-1.78-1.1-.77.08-.75.08-.75 1.2.08 1.84 1.25 1.84 1.25 1.07 1.84 2.82 1.31 3.5 1 .1-.8.42-1.32.76-1.62-2.67-.31-5.47-1.36-5.47-6.06 0-1.34.47-2.44 1.25-3.3-.13-.31-.54-1.57.12-3.27 0 0 1.01-.32 3.3 1.25a11.3 11.3 0 016 0c2.3-1.57 3.3-1.25 3.3-1.25.66 1.7.25 2.96.12 3.27.78.86 1.25 1.96 1.25 3.3 0 4.7-2.8 5.75-5.48 6.06.43.37.81 1.1.81 2.24v3.32c0 .32.22.68.82.58A12 12 0 0012 .5z"></path>
                </svg>
                GitHub
              </button>
            </div>

            <div className="divider-modal" role="separator" aria-label="or">
              <span>or log in with email</span>
            </div>

            <form id="emailFormModal" className="auth-form-modal" autoComplete="on">
              <div className="form-field-modal">
                <label htmlFor="emailModal">Email</label>
                <input type="email" id="emailModal" name="email" autoComplete="email" required />
              </div>

              <div className="form-field-modal password-field-modal">
                <label htmlFor="passwordModal">Password</label>

                <div className="password-input-modal">
                  <input
                    type="password"
                    id="passwordModal"
                    name="password"
                    autoComplete="current-password"
                    required
                  />
                  <button
                    type="button"
                    className="toggle-password-modal"
                    aria-label="Show password"
                    aria-pressed="false"
                  >
                    Show
                  </button>
                </div>
              </div>

              <div className="form-meta-modal">
                <label className="checkbox-modal">
                  <input type="checkbox" id="rememberModal" name="remember" />
                  <span>Remember me</span>
                </label>

                <a href="#" className="link-modal">Forgot password?</a>
              </div>

              <button type="submit" className="btn btn-primary-modal">Log in</button>
            </form>

            <p className="auth-footer-modal">
              Don't have an account?
              <a className="link-modal" href="#" data-action="switch-to-signup">
                Start your free trial
              </a>
            </p>
          </section>

          {/* Sign Up Form */}
          <section
            className="auth-card-modal"
            id="signupCardModal"
            aria-labelledby="signupTitleModal"
          >
            <header className="auth-header-modal">
              <div className="auth-tabs-modal">
                <button className="auth-tab-modal" data-tab="signin">Log In</button>
                <button className="auth-tab-modal active" data-tab="signup">Sign Up</button>
              </div>

              <h1 id="signupTitleModal">Create your account</h1>
              <p className="subtitle-modal">Join Prepx and start creating exams today</p>
            </header>

            <div
              className="social-buttons-modal"
              aria-label="Sign up with social account"
            >
              {/* SOCIAL BUTTONS (same as login) */}
              
              <button
                className="btn btn-social-modal google"
                data-provider="google"
                aria-label="Google"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M21.35 11.1H12v2.9..."></path>
                </svg>
                Google
              </button>

              <button
                className="btn btn-social-modal microsoft"
                data-provider="microsoft"
                aria-label="Microsoft"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4 4h7..."></path>
                </svg>
                Microsoft
              </button>

              <button
                className="btn btn-social-modal github"
                data-provider="github"
                aria-label="GitHub"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 .5a12..."></path>
                </svg>
                GitHub
              </button>
            </div>

            <div className="divider-modal" role="separator" aria-label="or">
              <span>or sign up with email</span>
            </div>

            <form id="signupFormModal" className="auth-form-modal" autoComplete="on">
              <div className="form-field-modal">
                <label htmlFor="signupNameModal">Full Name</label>
                <input type="text" id="signupNameModal" name="name" autoComplete="name" required />
              </div>

              <div className="form-field-modal">
                <label htmlFor="signupEmailModal">Email</label>
                <input type="email" id="signupEmailModal" name="email" autoComplete="email" required />
              </div>

              <div className="form-field-modal password-field-modal">
                <label htmlFor="signupPasswordModal">Password</label>

                <div className="password-input-modal">
                  <input
                    type="password"
                    id="signupPasswordModal"
                    name="password"
                    autoComplete="new-password"
                    required
                  />
                  <button
                    type="button"
                    className="toggle-password-modal"
                    aria-label="Show password"
                    aria-pressed="false"
                  >
                    Show
                  </button>
                </div>
              </div>

              <div className="form-field-modal">
                <label htmlFor="signupConfirmPasswordModal">Confirm Password</label>

                <div className="password-input-modal">
                  <input
                    type="password"
                    id="signupConfirmPasswordModal"
                    name="confirmPassword"
                    autoComplete="new-password"
                    required
                  />
                  <button
                    type="button"
                    className="toggle-password-modal"
                    aria-label="Show password"
                    aria-pressed="false"
                  >
                    Show
                  </button>
                </div>
              </div>

              <button type="submit" className="btn btn-primary-modal">
                Create Account
              </button>
            </form>

            <p className="auth-footer-modal">
              Already have an account?
              <a className="link-modal" href="#" data-action="switch-to-signin">
                Log in here
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
