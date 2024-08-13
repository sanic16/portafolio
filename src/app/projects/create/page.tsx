"use client";
import { createProjectAction } from "@/actions";
import React from "react";
import { useFormState } from "react-dom";
import "./style.css";
import FormButton from "@/components/common/formButton/FormButton";

export default function CreateProjectsForm() {
  const [formState, action] = useFormState(createProjectAction, { errors: {} });
  return (
    <div className="projects__form">
      <div className="projects__container container">
        <h1>Crear Proyecto</h1>
        <form action={action} className="form__create-project">
          <div className="form__group">
            <label htmlFor="title">Título</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Título del proyecto"
            />
            {formState.errors.title && (
              <p className="form__error">{formState.errors.title.join(", ")}</p>
            )}
          </div>

          <div className="form__group">
            <label htmlFor="websiteUrl">URL del Proyecto</label>
            <input
              type="url"
              id="websiteUrl"
              name="websiteUrl"
              placeholder="URL del proyecto"
            />
            {formState.errors.url && (
              <p className="form__error">{formState.errors.url.join(", ")}</p>
            )}
          </div>
          <div className="form__group">
            <label htmlFor="githubUrl">URL del Repositorio</label>
            <input
              type="url"
              id="githubUrl"
              name="githubUrl"
              placeholder="GitHub del proyecto"
            />
            {formState.errors.github && (
              <p className="form__error">
                {formState.errors.github.join(", ")}
              </p>
            )}
          </div>
          <div className="form__group">
            <label htmlFor="description">Descripción</label>
            <textarea
              name="description"
              id="description"
              placeholder="Descripción del proyecto"
            ></textarea>
            {formState.errors.description && (
              <p className="form__error">
                {formState.errors.description.join(", ")}
              </p>
            )}
          </div>
          <div className="form__group">
            <label htmlFor="image">Imagen</label>
            <input type="file" id="image" name="image" />
            {formState.errors.image && (
              <p className="form__error">{formState.errors.image.join(", ")}</p>
            )}
          </div>
          {formState.errors._form && (
            <p className="form__error">{formState.errors._form.join(", ")}</p>
          )}
          <FormButton
            label="Crear"
            loadingLabel="Creando"
            className="btn primary"
          />
        </form>
      </div>
    </div>
  );
}
