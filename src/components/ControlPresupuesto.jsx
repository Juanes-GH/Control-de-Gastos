import { useState, useEffect } from "react"

const ControlPresupuesto = ({gastos, presupuesto}) => {

    const [disponible, setDisponible] = useState(0);
    const [gasto, setGastado] = useState(0);

    useEffect(() => {
        const totalGasto = gastos.reduce( (total, gasto) => gasto.cantidad + total, 0)

        const totalDisponible = presupuesto - totalGasto

        setGastado(totalGasto)
        setDisponible(totalDisponible)
    }, [gastos])

    const formatearCantidad = (cantidad) => {
        return cantidad.toLocaleString( 'en-US',{
                style: 'currency',
                currency: 'USD'
            }
        )
    }

  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <div>
            <p>Grafica aquí</p>
        </div>

        <div className='contenido-presupuesto'>
            <p>
                <span>Prespuesto: </span>{formatearCantidad(presupuesto)}
            </p>

            <p>
                <span>Disponible: </span>{formatearCantidad(disponible)}
            </p>

            <p>
                <span>Gastado: </span>{formatearCantidad(gasto)}
            </p>
        </div>
        
        
    </div>
  )
}

export default ControlPresupuesto