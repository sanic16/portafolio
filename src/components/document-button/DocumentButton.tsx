"use client";

import { useState, useTransition } from "react";
import DocumentModal from "../document-modal/DocumentModal";
import { requestAWSFile } from "@/actions/jwtActions";
import { useSearchParams } from "next/navigation";
import ErrorModal from "../error-modal/ErrorModal";

const DocumentButton = ({
  className,
  title,
  pdfFile,
}: {
  className: string;
  title: string;
  pdfFile: string;
}) => {
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);
  const [pdf, setPdf] = useState("");
  const [error, setError] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const closeModal = () => setIsOpen(false);
  const handleDocumentRequest = () => {
    if (!token) {
      setError("No se ha proporcionado un token");
      return;
    }
    startTransition(() => {
      requestAWSFile(token, pdfFile)
        .then((response) => {
          if (response.success) {
            setPdf(response.message);
            setIsOpen(true);
          } else {
            setError(response?.message || "Error desconocido");
          }
        })
        .catch(() => {
          setError("Error desconocido");
        });
    });
  };

  return (
    <>
      <button
        className={className}
        onClick={handleDocumentRequest}
        disabled={isPending}
      >
        {isPending ? "cargando..." : title}
      </button>
      <DocumentModal closeModal={closeModal} isOpen={isOpen} pdfFile={pdf} />
      <ErrorModal
        isOpen={!!error}
        closeModal={() => setError(null)}
        message={error || ""}
      />
    </>
  );
};

export default DocumentButton;
