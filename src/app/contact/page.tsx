import './page.css'

export default function page() {
  return (
    <div className='contact'>
        <div className='container'>
            <div className='contact__container'>
                <h3>
                    Contacto
                </h3>
                <p>
                    Consulta cualquier duda o sugerencia que tengas.
                </p>
                <form className='contact__form'>
                    <input
                        type='text'
                        placeholder='Nombre'
                    />
                    <input
                        type='email'
                        placeholder='Correo Electrónico'
                    />
                    <textarea
                        placeholder='Mensaje'
                    >
                    </textarea>  

                    <button
                        className='btn primary'
                    >
                        Enviar
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}
