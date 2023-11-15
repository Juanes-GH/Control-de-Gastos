import { useState, useEffect } from "react"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"

const ControlPresupuesto = ({gastos, presupuesto}) => {

    const [porcentaje, setPorcentaje] = useState(0);
    const [disponible, setDisponible] = useState(0);
    const [gasto, setGastado] = useState(0);

    useEffect(() => {
        const totalGasto = gastos.reduce( (total, gasto) => gasto.cantidad + total, 0)

        const totalDisponible = presupuesto - totalGasto;

        //Calcula rel porcentaje gastaod
        const nuevoProcentaje = (((presupuesto - totalDisponible) / presupuesto) * 100).toFixed(2);

        
        setGastado(totalGasto)
        setDisponible(totalDisponible)
        setTimeout(() => {
            setPorcentaje(nuevoProcentaje)
        }, 1200);
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
            <CircularProgressbar 
                styles={buildStyles({
                    pathColor: '#3B82F6',
                    trailColor: '#F5F5F5'
                })}
                value={porcentaje}
            />
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