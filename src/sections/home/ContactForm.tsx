"use client";

import { useState, useSyncExternalStore, type FormEvent } from "react";

import styles from "./ContactSection.module.scss";

const fields = [
  { id: "contact-name", label: "שם מלא", type: "text", limit: 80 },
  { id: "contact-phone", label: "מספר טלפון", type: "tel", limit: 30 },
  { id: "contact-email", label: "כתובת מייל", type: "email", limit: 254 },
] as const;

type FieldId = (typeof fields)[number]["id"];
type Errors = Partial<Record<FieldId, string>>;

const subscribe = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

export default function ContactForm() {
  const ready = useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);
  const [errors, setErrors] = useState<Errors>({});
  const [checked, setChecked] = useState(false);

  function validate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.querySelector<HTMLInputElement>("#contact-name");
    const phone = form.querySelector<HTMLInputElement>("#contact-phone");
    const email = form.querySelector<HTMLInputElement>("#contact-email");
    if (!name || !phone || !email) return;

    const next: Errors = {};
    if (!name.value.trim()) next["contact-name"] = "יש להזין שם מלא.";
    const telephone = phone.value.trim().replace(/[\s().-]/g, "");
    if (!/^\+?\d{7,15}$/.test(telephone)) next["contact-phone"] = "יש להזין מספר טלפון תקין.";
    if (!email.value.trim() || email.validity.typeMismatch) next["contact-email"] = "יש להזין כתובת מייל תקינה.";

    setErrors(next);
    const firstInvalid = [name, phone, email].find((input) => next[input.id as FieldId]);
    setChecked(!firstInvalid);
    if (firstInvalid) {
      firstInvalid.focus();
    } else {
      form.reset();
    }
  }

  return (
    <form className={styles.form} aria-labelledby="contact-form-title" noValidate onSubmit={validate}>
      <h3 id="contact-form-title">השאירו פרטים ונחזור אליכם</h3>
      <fieldset disabled={!ready} className={styles.fields}>
        {fields.map(({ id, type, label, limit }) => (
          <div key={id} className={styles.field}>
            <label htmlFor={id}>{label}</label>
            <input
              id={id}
              type={type}
              dir={type === "text" ? "auto" : "ltr"}
              autoComplete="off"
              maxLength={limit}
              required
              aria-invalid={errors[id] ? true : undefined}
              aria-describedby={errors[id] ? `${id}-error` : undefined}
              onChange={() => {
                setChecked(false);
                if (errors[id]) setErrors((previous) => ({...previous, [id]: undefined}));
              }}
            />
            {errors[id] && <p id={`${id}-error`} className={styles.error}>{errors[id]}</p>}
          </div>
        ))}
        <button type="submit" className={styles.submit} aria-describedby="contact-form-status">
          שליחת פנייה
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M3 10.5 21 3l-6 18-4-8-8-2.5ZM11 13l10-10" />
          </svg>
        </button>
      </fieldset>
      <p id="contact-form-status" role="status" className={styles.status}>
        {checked ? "הפרטים עברו בדיקה מקומית. הם לא נשלחו." : "הטופס בתצוגה בלבד. הפרטים אינם נשלחים."}
      </p>
    </form>
  );
}
