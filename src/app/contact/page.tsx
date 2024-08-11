"use client";
import { useFormState } from "react-dom";
import { contactFormAction } from "@/actions/contactAction";
import { useEffect, useState, useRef } from "react";
import FormButton from "@/components/common/formButton/FormButton";
import ReCAPTCHA from "react-google-recaptcha";
import "./page.css";

export default function ContactPage() {
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
              <h3>Contacto</h3>
              <p>Consulta cualquier duda o sugerencia que tengas.</p>
              <form className="contact__form" action={action}>
                <div className="contact__form-group">
                  <input name="name" type="text" placeholder="Nombre" />
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
                    placeholder="Correo Electrónico"
                  />
                  {formState.errors.email && (
                    <div className="contact__form-error">
                      {formState.errors.email.join(", ")}
                    </div>
                  )}
                </div>
                <div className="contact__form-group">
                  <textarea name="message" placeholder="Mensaje"></textarea>
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
                    label="Enviar"
                    loadingLabel="Enviando..."
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
              <h3>Gracias por tu mensaje</h3>
              <p>Nos pondremos en contacto contigo lo antes posible.</p>
              <p>
                Deseas enviar otro mensaje?{" "}
                <a
                  href="#"
                  className="contact__form-link-action"
                  onClick={resetFormState}
                >
                  Haz clic aquí
                </a>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
