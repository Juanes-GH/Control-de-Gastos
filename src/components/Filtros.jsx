import { useState, useEffect } from "react"

const Filtros = () => {
  return (
    <div className="filtros sombra contenedor">
      <form>
        <div className="campo">
          <label>Filtrar Gastos</label>
          <select>
                    <option value=""> -- Seleccione -- </option>
                    <option value="casa">Casa</option>
                    <option value="ocio">Ocio</option>
                    <option value="salud">Salud</option>
                    <option value="comida">Comida</option>
                    <option value="ahorros">Ahorros</option>
                    <option value="transporte">Transporte</option>
                    <option value="suscripciones">Suscripciones</option>
                    <option value="gastos">Gastos Varios</option>
                    <option value="seguro">Seguro Coche</option>
                    <option value="otros">Otros</option>
          </select>
        </div>
      </form>
    </div>
  )
}

export default Filtros