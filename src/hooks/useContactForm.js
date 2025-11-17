// src/hooks/useContactForm.js
import { useEffect } from "react";

export default function useContactForm() {
  useEffect(() => {
    // small helpers
    const qs = (sel, el = document) => el.querySelector(sel);
    const qsa = (sel, el = document) => Array.from(el.querySelectorAll(sel));
    const on = (el, ev, fn, opts) => el && el.addEventListener(ev, fn, opts);
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // ------- form & nodes
    const form = qs("#contactForm");
    const success = qs("#successMessage");

    // If no form on page, exit early
    if (!form) {
      // still init FAQ and smooth anchors even if there's no form
      initFAQ();
      initSmoothHashLinks();
      return;
    }

    const nameInp = qs("#name", form);
    const emailInp = qs("#email", form);
    const phoneInp = qs("#phone", form);
    const subjectSel = qs("#subject", form);
    const examInp = qs("#exam", form);
    const prioritySel = qs("#priority", form);
    const messageTA = qs("#message", form);
    const submitBtn = qs("#submitBtn", form);

    function setError(input, msg = "") {
      const field = input.closest(".form-field") || input;
      field.setAttribute("data-error", msg);
      field.classList.toggle("has-error", Boolean(msg));
    }

    function clearErrors() {
      qsa("[data-error]", form).forEach((el) => {
        el.removeAttribute("data-error");
        el.classList.remove("has-error");
      });
    }

    function validate() {
      clearErrors();
      let ok = true;

      if (!nameInp.value.trim()) {
        setError(nameInp, "Full name is required");
        ok = false;
      }

      if (!emailInp.value.trim() || !emailRe.test(emailInp.value)) {
        setError(emailInp, "Enter a valid email like name@example.com");
        ok = false;
      }

      if (!subjectSel.value) {
        setError(subjectSel, "Please choose a query type");
        ok = false;
      }

      if (phoneInp.value.trim() && !/^[0-9+\-\s()]{7,}$/.test(phoneInp.value)) {
        setError(phoneInp, "Use digits and + - ( ) only");
        ok = false;
      }

      if (!messageTA.value.trim()) {
        setError(messageTA, "Tell us a bit about your query");
        ok = false;
      }

      return ok;
    }

    // Live inline feedback
    qsa("input, textarea, select", form).forEach((ctrl) => {
      on(ctrl, "input", () => setError(ctrl, ""));
      on(ctrl, "blur", () => {
        if (ctrl === emailInp && ctrl.value && !emailRe.test(ctrl.value)) {
          setError(ctrl, "Email looks invalid");
        }
      });
    });

    // Character count
    (function initCharCount() {
      if (!messageTA) return;
      const counter = document.createElement("div");
      counter.className = "char-count";
      counter.setAttribute("aria-live", "polite");
      messageTA.after(counter);
      const max = 1000;
      const update = () => {
        const n = messageTA.value.length;
        counter.textContent = `${n}/${max} characters`;
        counter.classList.toggle("over", n > max);
      };
      on(messageTA, "input", update);
      update();
    })();

    // Autosave draft
    const STORAGE_KEY = "prepx-contact-draft";
    (function restoreDraft() {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return;
        const data = JSON.parse(raw);
        if (nameInp) nameInp.value = data.name || "";
        if (emailInp) emailInp.value = data.email || "";
        if (phoneInp) phoneInp.value = data.phone || "";
        if (subjectSel) subjectSel.value = data.subject || "";
        if (examInp) examInp.value = data.exam || "";
        if (prioritySel) prioritySel.value = data.priority || "medium";
        if (messageTA) messageTA.value = data.message || "";
      } catch (e) {
        // ignore
      }
    })();

    const saveDraft = () => {
      const data = {
        name: nameInp?.value || "",
        email: emailInp?.value || "",
        phone: phoneInp?.value || "",
        subject: subjectSel?.value || "",
        exam: examInp?.value || "",
        priority: prioritySel?.value || "medium",
        message: messageTA?.value || "",
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    };
    on(form, "input", saveDraft);

    // Submit handler
    const submitHandler = async (e) => {
      e.preventDefault();
      if (!validate()) return;

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Sending...";
      }

      const payload = {
        ...Object.fromEntries(new FormData(form)),
        createdAt: new Date().toISOString(),
      };

      try {
        // Replace this with a real API call if available.
        await new Promise((r) => setTimeout(r, 1200));
        if (success) success.style.display = "block";
        form.reset();
        localStorage.removeItem(STORAGE_KEY);
      } catch (err) {
        // fallback
        // eslint-disable-next-line no-alert
        alert("Sorry, something went wrong. Please try again.");
        console.error(err);
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = "Send Message";
        }
        if (success) {
          setTimeout(() => (success.style.display = "none"), 5000);
        }
      }
    };

    on(form, "submit", submitHandler);

    // Initialize FAQ and smooth hash links for page
    initFAQ();
    initSmoothHashLinks();

    // Cleanup on unmount
    return () => {
      // remove listeners we added to form (simple approach: replace form with clone)
      if (form) {
        try {
          const clone = form.cloneNode(true);
          form.parentNode.replaceChild(clone, form);
        } catch (e) {
          // ignore
        }
      }
      // remove char-count nodes if any
      qsa(".char-count").forEach((n) => n.remove());
    };

    // ---------- functions used above ----------

    function initFAQ() {
      qsa(".faq-item").forEach((item) => {
        const title = qs("h3", item);
        const body = qs("p", item);
        if (!title || !body) return;
        body.hidden = true;
        title.tabIndex = 0;
        const toggle = () => (body.hidden = !body.hidden);
        on(title, "click", toggle);
        on(title, "keydown", (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggle();
          }
        });
      });
    }

    function initSmoothHashLinks() {
      qsa('a[href^="#"]').forEach((a) => {
        on(a, "click", (e) => {
          const href = a.getAttribute("href");
          if (!href || href === "#" || href === "#!") return;
          const id = href.slice(1);
          const target = id && document.getElementById(id);
          if (!target) return;
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
          if (history.pushState) {
            history.pushState(null, "", `#${id}`);
          }
        });
      });
    }
  }, []);
}
