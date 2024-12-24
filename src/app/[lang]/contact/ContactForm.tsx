"use client";
import { useFormState } from "react-dom";
import { contactFormAction } from "@/actions/contactAction";
import { useEffect, useState } from "react";
import FormButton from "@/components/common/formButton/FormButton";
import ReCAPTCHA from "react-google-recaptcha";
import "./page.css";

interface ContactProps {
  t: {
    title: string;
    description: string;
    nameInputPlaceholder: string;
    emailInputPlaceholder: string;
    messageInputPlaceholder: string;
    sendButton: string;
    sendingButton: string;
    thanksTitle: string;
    thanksMessage: string;
    sendAnotherMessage: string;
    sendAnotherMessageLink: string;
  };
}

const ContactForm: React.FC<ContactProps> = ({ t }) => {
  const [captcha, setCaptcha] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formState, action] = useFormState(
    contactFormAction.bind(null, { captcha }),
    {
      errors: {},
    }
  );

  //   Verificar en "mount" si el formulario fue enviado
  useEffect(() => {
    const formSubmitted = localStorage.getItem("contactFormSubmitted");
    if (formSubmitted) {
      setIsSubmitted(true);
    }
  }, []);

  // Almancenar el estado de envío del formulario en localStorage
  useEffect(() => {
    if (formState.success) {
      localStorage.setItem("contactFormSubmitted", "true");
      setIsSubmitted(true);
    }
  }, [formState.success]);

  const resetFormState = () => {
    setIsSubmitted(false);
    localStorage.removeItem("contactFormSubmitted");
  };
  return (
    <div className="contact">
      <div className="container">
        <div className="contact__container">
          {!isSubmitted ? (
            <>
              <h3>{t.title}</h3>
              <p>{t.description}</p>
              <form className="contact__form" action={action}>
                <div className="contact__form-group">
                  <input
                    name="name"
                    type="text"
                    placeholder={t.nameInputPlaceholder}
                  />
                  {formState.errors.name && (
                    <div className="contact__form-error">
                      {formState.errors.name.join(", ")}
                    </div>
                  )}
                </div>
                <div className="contact__form-group">
                  <input
                    name="email"
                    type="email"
                    placeholder={t.emailInputPlaceholder}
                  />
                  {formState.errors.email && (
                    <div className="contact__form-error">
                      {formState.errors.email.join(", ")}
                    </div>
                  )}
                </div>
                <div className="contact__form-group">
                  <textarea
                    name="message"
                    placeholder={t.messageInputPlaceholder}
                  ></textarea>
                  {formState.errors.message && (
                    <div className="contact__form-error">
                      {formState.errors.message.join(", ")}
                    </div>
                  )}
                </div>

                {formState.errors._form && (
                  <div className="contact__form-error">
                    {formState.errors._form.join(", ")}
                  </div>
                )}

                <div className="contact__actions">
                  <FormButton
                    className="btn primary"
                    label={t.sendButton}
                    loadingLabel={t.sendingButton}
                  />
                  <ReCAPTCHA
                    sitekey={
                      process.env
                        .NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY as string
                    }
                    onChange={setCaptcha}
                  />
                </div>
              </form>
            </>
          ) : (
            <div>
              <h3>{t.thanksTitle}</h3>
              <p>{t.thanksMessage}</p>
              <p>
                {t.sendAnotherMessage}{" "}
                <a
                  href="#"
                  className="contact__form-link-action"
                  onClick={resetFormState}
                >
                  {t.sendAnotherMessageLink}
                </a>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
