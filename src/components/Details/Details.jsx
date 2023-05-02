import React from 'react'
import "./details.css"

export default function Details() {
  return (
    <div className='container-block'>
        <h1>Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic</h1>
    <p>Код товара: 366666-2</p>    
    <div className='detail'>
    <div>Производитель</div>
    <div>Канада</div>
    <div>Количество мест, шт</div>
    <div>3</div>
    <div>Мощность, л.с.</div>
    <div>155</div>
    <div>Тип двигателя</div>
    <div>Бензиновый</div>
    <div>Год выпуска</div>
    <div>2018</div>
    </div>
    <p className='extra'>Показать ещё</p>
    <button>КУПИТЬ</button>
    </div>
  )
}
