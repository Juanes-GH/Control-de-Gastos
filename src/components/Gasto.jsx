import { formatearFecha } from '../helpers/index'

import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions

} from 'react-swipeable-list'
import "react-swipeable-list/dist/styles.css"


import IconoAhorro from '../img/icono_ahorro.svg'
import IconoCasa from '../img/icono_casa.svg'
import IconoComida from '../img/icono_comida.svg'
import IconoGastos from '../img/icono_gastos.svg'
import IconoOcio from '../img/icono_ocio.svg'
import IconoSalud from '../img/icono_salud.svg'
import IconoSuscripcion from '../img/icono_suscripciones.svg'
import IconoCoche from '../img/icons8-coche-100.png'
import IconoTransporte from '../img/icons8-autobús-48.png'
import IconoOtros from '../img/icons8-more-information-25.png'

const diccionarioIconos = {
  casa:IconoCasa,
  ocio:IconoOcio,
  salud:IconoSalud,
  comida: IconoComida,
  ahorros:IconoAhorro,
  transporte:IconoTransporte,
  suscripciones:IconoSuscripcion,
  gastos:IconoGastos,
  seguro:IconoCoche,
  otros:IconoOtros,
}

const Gasto = ({gasto, setGastoEditar}) => {
  const {categoria, nombre, cantidad, id, fecha} = gasto

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => setGastoEditar(gasto)}>
          Editar
      </SwipeAction>
    </LeadingActions>
  )

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction onClick={() => console.log('eliminar')}>
          Eliminar
      </SwipeAction>
    </TrailingActions>
  )

  return (
    <SwipeableList>
      <SwipeableListItem 
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className="gasto sombra">
          <div className="contenido-gasto">
              <img
                src={diccionarioIconos[categoria]}
                alt='Icono'
              />
            <div className="descripcion-gasto">
              <p className="categoria">{categoria}</p>
              <p className="nombre-gasto">{nombre}</p>
              <p className="fecha-gasto">
                Agregado el: {''}
                  <span>{formatearFecha(fecha)}</span>
              </p>
            </div>
          </div>

          <p className='cantidad-gasto'>${cantidad}</p>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  )
}

export default Gasto