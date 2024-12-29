"use client";

import { useEffect, useState, useTransition } from "react";
import DocumentModal from "../document-modal/DocumentModal";
import { requestAWSFile, verifyToken } from "@/actions/jwtActions";
import { useSearchParams } from "next/navigation";
import ErrorModal from "../error-modal/ErrorModal";
import { getTokenFromLocalStorage } from "@/utils/localStorage";

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
    const localTokenStorage = getTokenFromLocalStorage("token");

    if (!localTokenStorage) {
      setError("No se ha proporcionado un token");
      return;
    }

    startTransition(() => {
      requestAWSFile(localTokenStorage.token, pdfFile)
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

  useEffect(() => {
    const updateTokenInLocalStorage = async () => {
      if (!token) return;
      const isLocalTokenStorage = getTokenFromLocalStorage("token");
      try {
        const response = await verifyToken(token);
        if (!response.success) return;

        const { exp } = response.decoded;

        if (exp > Math.floor(Date.now() / 1000)) {
          const shouldUpdateLocalStorage =
            !isLocalTokenStorage || exp > isLocalTokenStorage.exp;

          if (shouldUpdateLocalStorage) {
            localStorage.setItem(
              "token",
              JSON.stringify({
                token,
                exp,
              })
            );
          }
        }
      } catch {}
    };

    updateTokenInLocalStorage();
  }, [token]);

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
