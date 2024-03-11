import React from 'react'
import CardIten from './CardIten'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <h1>Check out these EPIC Destinations! </h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardIten
                    src='images/img-9.jpg' 
                    text='Explore the hidden waterfall deep inisde the Amazon Jungle'
                    label='Adventure'
                    path='/services'
                    />
                    <CardIten
                    src='images/img-1.jpg'
                    text='Check the amazing sunset in Patagonia mountains'
                    label='Adventure'
                    path='/services'    
                    />
                 </ul>
                 <ul className='cards__items'>
                  <CardIten
                  src='images/img-2.jpg'
                  text='Travel to Bali with the best price options during Summer'
                  label='Nature'
                  path='/services'
                  />
                  <CardIten
                  src='images/img-3.jpg'
                  text='Set a sail in the Atlantic visiting uncharted waters'
                  label='Adventure'
                  path='/services'
                  />
                  <CardIten
                  src='images/img-4.jpg'
                  text='Experience football on top of Hilayam mountains'
                  label='Sports'
                  path='/services'
                  />
                 </ul>
            </div>
        </div>
      
    </div>
  )
}

export default Cards
