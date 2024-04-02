'use client'
import React, { useState } from 'react'
import './education.css'
import education__data from './education-data'
import { useAnimate, stagger } from 'framer-motion'
import DocumentModal from './DocumentModal'
import ImageModal from './ImageModa'

const Education = () => {
  const [scope, animate] = useAnimate()
  const [cursor, setCursor] = useState(0)

  const [isOpenModalPDF, setIsOpenModalPDF] = useState(false)
  const [isOpenModalImage, setIsOpenModalImage] = useState(false)
  const setEdu = (index: number) => {
    console.log(index)
    setCursor(index)
    animate('.education__desc-title, .education__desc-content, .education__desc-btn', {
      y: [100, 0],
      opacity: [0, 1]
    },{
      duration: 0.5,
      type: 'spring',
      delay: stagger(0.1),      
    }
    )
  }
  const userAgent = navigator.userAgent.toLowerCase();

  const isIOS = userAgent.indexOf('iphone') > -1 || userAgent.indexOf('ipad') > -1 || userAgent.indexOf('ipod') > -1;
  const isAndroid = userAgent.indexOf('android') > -1;
  const isDesktop = !isIOS && !isAndroid;

  console.log(isIOS, isAndroid, isDesktop)
  return (
    <section id='education' className='education'>
        <h1>
            Educación
        </h1>
        <p>
            Aquí encontrarás información sobre mi educación
        </p>
        <div className="container">
           <div className="education__container" ref={scope}>
              <div className="education__title">
                {
                  education__data.map(education => (
                    <h5 
                      key={education.id}
                      onClick={() => setEdu(education.id - 1)}
                      className={`education__title-item ${cursor === education.id - 1 ? 'active' : ''}`}
                    >
                      {education.title}
                    </h5>
                  ))
                }
              </div>
              <div
                className='education__desc'
              >
                {
                  <>
                  <h3 className='education__desc-title'>
                    {education__data[cursor].institution}
                  </h3>
                  <div className='education__desc-content'  dangerouslySetInnerHTML={{__html: education__data[cursor].desc}}
                  />

                   {
                    isDesktop && (
                      <button 
                        className="education__desc-btn btn primary"
                        onClick={() => setIsOpenModalPDF(true)}
                      >
                        Documentos
                      </button>
                    )
                   }

                    {
                      (isAndroid || isIOS) && (
                        <button 
                          className="education__desc-btn btn primary"
                          onClick={() => setIsOpenModalImage(true)}
                        >
                          Documentos
                        </button>
                      )
                    }
                  </>
                }
              </div>
           </div>
        </div>
        {
          isDesktop && (
          <DocumentModal
            isOpen={isOpenModalPDF}
            closeModal={() => setIsOpenModalPDF(false)}
            pdfFile={education__data[cursor].pdf}
          />
          )
        }
        {
          (isAndroid || isIOS) && (
            <ImageModal
            key={education__data[cursor].id}
            isOpen={isOpenModalImage}
            closeModal={() => setIsOpenModalImage(false)}
            images={education__data[cursor].images}
          />
          ) 
        }
    </section>
  )
}

export default Education