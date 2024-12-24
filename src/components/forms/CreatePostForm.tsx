"use client";

import classes from "./createPostForm.module.css";
import { useFormState } from "react-dom";
import { createPostAction } from "@/actions";
import FormButton from "../common/formButton/FormButton";
import { useState } from "react";

const CreatePostForm = ({ category }: { category: string[] }) => {
  // const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [description, setDescription] = useState("");

  let handleThumbnail;
  if (typeof window !== "undefined") {
    handleThumbnail = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files;
      if (file) {
        // setThumbnail(file[0]);
      }
    };
  } else {
    handleThumbnail = () => {};
  }
  const changeDescription = (value: string) => {
    setDescription(value);
  };

  const [formState, action] = useFormState(
    createPostAction.bind(null, description),
    {
      errors: {},
    }
  );

  console.log(formState);

  return (
    <form action={action} className={classes.form}>
      <div className={classes.form__group}>
        <label htmlFor="title" className={classes.form__label} />
        <input
          type="text"
          name="title"
          id="title"
          className={classes.form__input}
          placeholder="Título"
        />
        <span className={classes.form__error}>
          {formState.errors.title?.join(", ")}
        </span>
      </div>
      <div className={classes.form__group}>
        <label htmlFor="category" className={classes.form__label} />
        <select name="category" id="category" className={classes.form__input}>
          <option value="">Categoría</option>
          {category.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <span className={classes.form__error}>
          {formState.errors.category?.join(", ")}
        </span>
      </div>
      <div className={classes.form__group}>
        <label htmlFor="description" className={classes.form__label} />
        <textarea
          name="description"
          id="description"
          className={classes.form__input}
          placeholder="Descripción"
          onChange={(e) => changeDescription(e.target.value)}
        />
        <span className={classes.form__error}>
          {formState.errors.description?.join(", ")}
        </span>
      </div>
      <div className={classes.form__group}>
        <label htmlFor="image" className={classes.form__label} />
        <input
          type="file"
          name="image"
          id="image"
          className={classes.form__input}
          onChange={handleThumbnail}
        />
        <span className={classes.form__error}>
          {formState.errors.image?.join(", ")}
        </span>
      </div>
      <FormButton
        label="Crear"
        loadingLabel="Creando..."
        className="btn primary"
      />
    </form>
  );
};

export default CreatePostForm;
