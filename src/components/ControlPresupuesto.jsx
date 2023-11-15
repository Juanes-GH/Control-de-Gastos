import { useState, useEffect } from "react"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"

const ControlPresupuesto = ({gastos, presupuesto, setGastos, setPresupuesto, setIsValidPresupuesto}) => {

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

    const handleResetApp = () => {
        const resultado = confirm("Desea reiniciar presupuesto y gastos?")

        if(resultado){
            setGastos([])
            setPresupuesto(0)
            setIsValidPresupuesto(false)
        }
    }

  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <div>
            <CircularProgressbar 
                styles={buildStyles({
                    pathColor: porcentaje > 100 ? '#DC2626': '#3B82F6',
                    trailColor: '#F5F5F5',
                    textColor: porcentaje > 100 ? '#DC2626': '#3B82F6'
                })}
                value={porcentaje}
                text={`${porcentaje}% Gastado`}
            />
        </div>

        <div className='contenido-presupuesto'>
            <button 
                className="reset-app" 
                type="button"
                onClick={handleResetApp}
            >
                Resetear Gastos
            </button>
            <p>
                <span>Prespuesto: </span>{formatearCantidad(presupuesto)}
            </p>

            <p className={`${disponible < 0 ? 'negativo' : ''}`}>
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