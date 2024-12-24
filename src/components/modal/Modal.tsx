"use client";
import React from "react";
import Card from "../card/Card";
import "./modal.css";

const Modal = ({
  children,
  className,
  isOpen,
  closeModal,
}: {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  closeModal: () => void;
}) => {
  return (
    <>
      {isOpen && (
        <>
          <div className="backdrop" onClick={closeModal}></div>
          <Card className={className}>{children}</Card>
        </>
      )}
    </>
  );
};

export default Modal;
