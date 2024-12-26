"use client";

import { useState, useTransition } from "react";
import DocumentModal from "../document-modal/DocumentModal";
import { requestAWSFile } from "@/actions/jwtActions";
import { useSearchParams } from "next/navigation";

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
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const closeModal = () => setIsOpen(false);
  const handleDocumentRequest = () => {
    startTransition(() => {
      requestAWSFile(token || "", "documents/cv.pdf")
        .then((response) => {
          if (response.success) {
            setPdf(response.data!);
            setIsOpen(true);
          } else {
            console.error("Error al solicitar el archivo", response.message);
          }
        })
        .catch((error) => {
          console.error("Error al solicitar el archivo", error);
        });
    });
  };
  const props = {
    isOpen,
    closeModal,
    pdfFile,
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
      <DocumentModal {...props} pdfFile={pdf} />
    </>
  );
};

export default DocumentButton;
