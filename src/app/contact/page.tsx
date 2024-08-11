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

  console.log(formState);

  return (
    <div className="contact">
      <div className="container">
        {!isSubmitted ? (
          <div className="contact__container">
            <h3>Contacto</h3>
            <p>Consulta cualquier duda o sugerencia que tengas.</p>
            <form className="contact__form" action={action}>
              {formState.errors._form && (
                <p className="contact__form-error">
                  {formState.errors._form?.join(", ")}
                </p>
              )}
              <input name="name" type="text" placeholder="Nombre" />
              <input
                name="email"
                type="email"
                placeholder="Correo Electrónico"
              />
              <textarea name="message" placeholder="Mensaje"></textarea>

              <div className="contact__actions">
                <FormButton
                  className="btn primary"
                  label="Enviar"
                  loadingLabel="Enviando..."
                />
                <ReCAPTCHA
                  sitekey={
                    process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY as string
                  }
                  onChange={setCaptcha}
                />
              </div>
            </form>
          </div>
        ) : (
          <div>
            <h3>Gracias por tu mensaje</h3>
            <p>Nos pondremos en contacto contigo lo antes posible.</p>
          </div>
        )}
      </div>
    </div>
  );
}
