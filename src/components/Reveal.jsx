import { motion, useReducedMotion } from "framer-motion";

export const LOGIN = {
  emailInput: "login-email-input",
  passwordInput: "login-password-input",
  submitButton: "login-submit-button",
  forgotPasswordLink: "login-forgot-password-link",
  registerLink: "login-register-link",
};

export const REGISTER = {
  nameInput: "register-name-input",
  emailInput: "register-email-input",
  passwordInput: "register-password-input",
  passwordConfirmInput: "register-password-confirm-input",
  submitButton: "register-submit-button",
  loginLink: "register-login-link",
};

export const LOGOUT = {
  button: "logout-button",
};

export function FadeUp({ children, delay = 0, className = "", as: Component = "div", style, ...props }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      as={Component}
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={reduceMotion ? undefined : { once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      style={style}
      {...props}
    >
      {children}
    </motion.div>
  );
}
export function Overline({ children, light = false, className = "", ...props }) {
  return (
    <p
      className={`font-mono-tech text-[11px] font-semibold uppercase tracking-[0.25em] ${
        light ? "text-white/70" : "text-brand-red"
      } ${className}`}
      {...props}
    >
      {children}
    </p>
  );
}

export function AccentLine({ className = "", ...props }) {
  return (
    <div
      className={`h-[3px] w-20 rounded-full bg-brand-red ${className}`}
      aria-hidden="true"
      {...props}
    />
  );
}

export function MaskedLines({ lines = [], lineClass = "" }) {
  return (
    <span className="block">
      {lines.map((line, index) => (
        <span key={`${typeof line === "string" ? line : index}-${index}`} className={`block ${lineClass}`}>
          {line}
        </span>
      ))}
    </span>
  );
}
