'use client'
import { useModalContext } from "@/hooks/hooks"
import React from "react"
import Card from "../card/Card"
import './modal.css'

const Modal = (
    {
        children,
        className
    }:{
        children: React.ReactNode,
        className?: string
    }
) => {
  const { isOpen, closeModal } = useModalContext()
  return (
    <>
        {
            isOpen && (
                <>
                    <div 
                        className="backdrop"
                        onClick={closeModal}
                    >
                    </div>
                    <Card
                        className={className}
                    >
                        { children }
                    </Card>
                </>
            )
        }
    </>
  )
}

export default Modal