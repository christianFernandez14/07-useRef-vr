import { useEffect, useRef, useState } from "react"

const Ejemplo = () => {

  const [numeroSaludo, setNumeroSaludo] = useState(0)
  const saludoEnCola = useRef(numeroSaludo)

  useEffect(() => {
    saludoEnCola.current = numeroSaludo

    setTimeout(() => {
      console.log('Saludo en cola: ' + saludoEnCola.current)
    }, 2000);

  }, [numeroSaludo])


  const enviarSaludo = e => {
    setNumeroSaludo(numeroSaludo + 1)
  }
  return (
    <div className="mi-caja2">
      <h1>Ejemplo con useRef</h1>

      <h2>Saludos enviados: {numeroSaludo}</h2>
      <button onClick={enviarSaludo}>enviar saludo !!!</button>
    </div>
  )
}

export default Ejemplo