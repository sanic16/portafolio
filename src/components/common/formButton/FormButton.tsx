"use client";

import { useFormStatus } from "react-dom";

const FormButton = ({
  className,
  label,
  loadingLabel,
}: {
  className: string;
  label: string;
  loadingLabel: string;
}) => {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending} className={className}>
      {pending ? loadingLabel : label}
    </button>
  );
};

export default FormButton;
