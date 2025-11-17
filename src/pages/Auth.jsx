import React, { useState, useEffect } from "react";
import "../styles/auth.css";

export default function Auth() {
  const [tab, setTab] = useState("signin");
  const [showPassword, setShowPassword] = useState(false);
  const [showSignupPassword, setShowSignupPassword] = useState(false);

  // Restore remembered email
  useEffect(() => {
    const saved = localStorage.getItem("prepx:lastEmail");
    if (saved) setEmail(saved);
  }, []);

  // Local storage login system
  const getUsers = () =>
    JSON.parse(localStorage.getItem("prepx:users") || "[]");

  const saveUser = (u) => {
    const users = getUsers();
    users.push(u);
    localStorage.setItem("prepx:users", JSON.stringify(users));
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  const switchTab = (value) => {
    setTab(value);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const users = getUsers();
    const user = users.find((u) => u.email === email);

    if (!user) {
      alert("No account found. Please sign up first.");
      setTab("signup");
      return;
    }
    if (user.password !== password) {
      alert("Incorrect password.");
      return;
    }

    localStorage.setItem("prepx:lastEmail", email);
    alert(`Welcome back, ${user.name}!`);
  };

  const handleSignup = (e) => {
    e.preventDefault();

    if (signupData.password !== signupData.confirm) {
      alert("Passwords do not match");
      return;
    }

    if (getUsers().some((u) => u.email === signupData.email)) {
      alert("Account already exists. Please sign in.");
      setTab("signin");
      return;
    }

    saveUser({
      name: signupData.name,
      email: signupData.email,
      password: signupData.password,
    });

    alert("Account created! You may sign in now.");
    setTab("signin");
  };

  return (
    <main className="auth-page">

      <div className="auth-bg">
        <div className="auth-grid"></div>
        <div className="auth-gradient-1"></div>
        <div className="auth-gradient-2"></div>
      </div>

      <div className="auth-container">

        {/* Logo */}
        <div className="auth-brand">
          <div className="logo-icon"><span>P</span></div>
          <span className="logo-text">PrepX</span>
        </div>

        <section className="auth-card">
          {/* Tabs */}
          <div className="auth-tabs">
            <button
              className={`auth-tab ${tab === "signin" ? "active" : ""}`}
              onClick={() => switchTab("signin")}
            >
              Sign In
            </button>
            <button
              className={`auth-tab ${tab === "signup" ? "active" : ""}`}
              onClick={() => switchTab("signup")}
            >
              Sign Up
            </button>
          </div>

          {/* HEADINGS */}
          <h1 className="auth-title">
            {tab === "signin" ? "Welcome back" : "Create your account"}
          </h1>
          <p className="auth-subtitle">
            {tab === "signin"
              ? "Sign in to continue to your dashboard"
              : "Join PrepX and start today"}
          </p>

          {/* Social Buttons */}
          <div className="social-buttons">
            <button className="btn-social google">Google</button>
            <button className="btn-social microsoft">Microsoft</button>
            <button className="btn-social github">GitHub</button>
          </div>

          <div className="auth-divider"><span>or sign in with email</span></div>

          {/* SIGN IN FORM */}
          {tab === "signin" && (
            <form className="auth-form" onSubmit={handleLogin}>
              <label>Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label>Password</label>
              <div className="password-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="toggle-pass"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>

              <div className="auth-remember">
                <label>
                  <input type="checkbox" /> Remember me
                </label>

                <a href="#" className="forgot-link">Forgot password?</a>
              </div>

              <button className="btn-primary">Sign in</button>

              <p className="auth-footer">
                Don't have an account?
                <button
                  type="button"
                  className="link-btn"
                  onClick={() => switchTab("signup")}
                >
                  Start your free trial
                </button>
              </p>
            </form>
          )}

          {/* SIGN UP FORM */}
          {tab === "signup" && (
            <form className="auth-form" onSubmit={handleSignup}>
              <label>Full Name</label>
              <input
                type="text"
                required
                value={signupData.name}
                onChange={(e) =>
                  setSignupData({ ...signupData, name: e.target.value })
                }
              />

              <label>Email</label>
              <input
                type="email"
                required
                value={signupData.email}
                onChange={(e) =>
                  setSignupData({ ...signupData, email: e.target.value })
                }
              />

              <label>Password</label>
              <div className="password-wrapper">
                <input
                  type={showSignupPassword ? "text" : "password"}
                  required
                  value={signupData.password}
                  onChange={(e) =>
                    setSignupData({
                      ...signupData,
                      password: e.target.value,
                    })
                  }
                />
                <button
                  type="button"
                  className="toggle-pass"
                  onClick={() => setShowSignupPassword(!showSignupPassword)}
                >
                  {showSignupPassword ? "Hide" : "Show"}
                </button>
              </div>

              <label>Confirm Password</label>
              <input
                type="password"
                required
                value={signupData.confirm}
                onChange={(e) =>
                  setSignupData({ ...signupData, confirm: e.target.value })
                }
              />

              <button className="btn-primary">Create Account</button>
            </form>
          )}

        </section>

      </div>
    </main>
  );
}
