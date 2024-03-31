'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import classes from './FloatMenu.module.css'
import { FaCaretDown, FaCaretUp, FaEnvelope, FaHome, FaInfoCircle, FaProjectDiagram, FaTools } from 'react-icons/fa'

const FloatMenu = () => {
  const [showFloatMenu, setShowFloatMenu] = useState(false)
  let width : undefined | number = undefined
  if(typeof window !== 'undefined'){
    width = window.innerWidth
  }
  
  
  return (
    <div 
        className={classes.flaotMenu__wrapper}
    >
        <AnimatePresence>
        {
            
            !showFloatMenu && (
            <motion.div
                initial={{
                    opacity: 0,
                    right: '-5vw' 
                }}
                animate={{
                    opacity: 1,
                    right: width ? width > 1024 ? '5vw' : '3vw' : '5vw'
                }}
                exit={{
                    opacity: 0,
                    right: '-5vw'
                
                }}
                transition={{
                    duration: 2,
                    type: 'spring',
                    bounce: 0.5
                }}
                className={classes.float__menu}        
            >          
                <a href='#header'>
                    <FaHome />
                </a>
            
                <a href="#about">
                    <FaInfoCircle />
                </a>
            
                <a href="#services">
                    <FaTools />
                </a>

                <a href="#projects">
                    <FaProjectDiagram />
                </a>
                            <a href="#contact">
                    <FaEnvelope />
                </a>            
            </motion.div>
            )
        }
                    </AnimatePresence>

            <div
                className={classes.float__toggle}
            >
                <button
                    className={classes['float__toggle-btn']}
                    onClick={() => setShowFloatMenu(!showFloatMenu)}
                >
                    <motion.span
                        animate={{
                            rotate: showFloatMenu ? 180 : 0 
                        }}
                        transition={{
                            duration: 0.3,
                            type: 'spring',
                            bounce: 0.5
                        }}
                    >
                        <FaCaretUp />
                    </motion.span>
                </button>
            </div>
    </div>
  )
}

export default FloatMenu