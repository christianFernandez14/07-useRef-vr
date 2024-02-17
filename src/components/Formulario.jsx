import { useRef } from "react"

const Formulario = () => {

  const nombreInput = useRef()
  const apellidoInput = useRef()
  const emailInput = useRef()
  const miCaja = useRef()


  const mostrar = e => {
    e.preventDefault()

    console.log(nombreInput.current.value)
    console.log(apellidoInput.current.value)
    console.log(emailInput.current.value)

    // Veamos que hay en miCaja
    console.log(miCaja)
    // Utilizamos unas de muchas propiedades que tiene el current, como por ejemplo agregar una clasr
    miCaja.current.classList.add('fondoVerde')
    // Realemnte puede hacer lo que sea, ahora cambiemos el nombre del texto de la caja
    // En este caso hagao una pequeña restructuración del obejeto

    const { current: caja } = miCaja
    caja.innerHTML = 'Formulario enviado !'
  }
  return (
    <div>
      <div className="mi-caja" ref={miCaja}>
        <h2>Formulario</h2>
      </div>
      <form className="form" onSubmit={mostrar}>
        <input type="text" name="nombre" placeholder="Nombre" ref={nombreInput} />
        <input type="text" name="apellido" placeholder="Apellido" ref={apellidoInput} />
        <input type="text" name="apellido" placeholder="Email" ref={emailInput} />

        <div className="btn">
          <button onClick={() => nombreInput.current.select()}>Inciar Form</button>
          <input type="submit" value='Enviar' />
        </div>
      </form>

    </div>
  )
}

export default Formulario