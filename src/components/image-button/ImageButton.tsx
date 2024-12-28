"use client";

import { useCallback, useState, useTransition } from "react";
import ImageModal from "../image-modal/ImageModal";
import { useSearchParams } from "next/navigation";
import { requestAWSFile } from "@/actions/jwtActions";
import ErrorModal from "../error-modal/ErrorModal";

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

  const handleImage = useCallback(
    (index: number) => {
      if (!token) {
        setError("El token no ha sido proporcionado");
        return;
      }
      startTransition(() => {
        requestAWSFile(token, images[index])
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
    [images, startTransition, token]
  );

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    handleImage(currentImageIndex);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    handleImage(currentImageIndex);
  };

  return (
    <>
      <button
        className={className}
        onClick={handleOpenModal}
        disabled={isPending || !images.length}
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
