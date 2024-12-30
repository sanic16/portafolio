"use client";

import { useCallback, useEffect, useState, useTransition } from "react";
import ImageModal from "../image-modal/ImageModal";
import { useSearchParams } from "next/navigation";
import { requestAWSFile, verifyToken } from "@/actions/jwtActions";
import ErrorModal from "../error-modal/ErrorModal";
import { getTokenFromLocalStorage } from "@/utils/localStorage";

const ImageButton = ({
  className,
  title,
  images,
}: {
  className: string;
  title: string;
  images: string[];
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState<string | null>(null);
  const token = useSearchParams().get("token");

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const handleOpenModal = () => {
    openModal();
    handleImage(currentImageIndex);
  };

  useEffect(() => {
    const updateTokenInLocalStorage = async () => {
      if (!token) return;

      try {
        const isLocalTokenStorage = getTokenFromLocalStorage("token");
        const response = await verifyToken(token);

        if (!response.success) return;

        const { exp } = response.decoded;

        if (exp > Math.floor(Date.now() / 1000)) {
          const shouldUpdateLoclStorage =
            !isLocalTokenStorage || exp > isLocalTokenStorage.exp;

          if (shouldUpdateLoclStorage) {
            localStorage.setItem("token", JSON.stringify({ token, exp }));
          }
        }
      } catch {}
    };

    updateTokenInLocalStorage();
  });

  const handleImage = useCallback(
    (currentImageIndex: number) => {
      const localTokenStorage = getTokenFromLocalStorage("token");

      if (
        !localTokenStorage ||
        localTokenStorage.exp < Math.floor(Date.now() / 1000)
      ) {
        setError("El token no ha sido proporcionado o ha expirado");
        return;
      }
      startTransition(() => {
        requestAWSFile(localTokenStorage.token, images[currentImageIndex])
          .then((res) => {
            if (res.success) {
              setCurrentImage(res.message);
              setError(null);
            } else {
              setError(res.message);
            }
          })
          .catch(() => {
            setError("Error al cargar la imagen");
          });
      });
    },
    [images, startTransition]
  );

  const handleNextImage = () => {
    const nextIndex =
      currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(nextIndex);
    handleImage(nextIndex);
  };

  const handlePrevImage = () => {
    const prevIndex =
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(prevIndex);
    handleImage(prevIndex);
  };

  return (
    <>
      <button
        className={className}
        onClick={handleOpenModal}
        disabled={isPending || !images.length}
        aria-label="Ver imagen"
      >
        {isPending ? "Cargando..." : title}
      </button>
      {currentImage && (
        <ImageModal
          isOpen={isOpen}
          closeModal={closeModal}
          currentImage={currentImage}
          handleNextImage={handleNextImage}
          handlePrevImage={handlePrevImage}
        />
      )}
      <ErrorModal
        isOpen={!!error}
        closeModal={() => setError(null)}
        message={error || ""}
      />
    </>
  );
};

export default ImageButton;
