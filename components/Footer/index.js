import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-700 p-4'>
      <div className='container mx-auto text-center font-bold text-white'>
        Projeto desenvolvido por: {' '}
        <a className='hover:underline' href='#'>Anderson Souza</a> / {' '}
        <a className='hover:underline' href='https://linkedin.com/in/anderson-felipe-souza'>Linkedin</a> / {' '}
        <a className='hover:underline' href='https://github.com/souza-anderson'>Github</a>
        <div className='mt-4'>
          <img className='inline p-2 max-h-28' src='/logo_semana_fsm.png' />
          <img className='inline p-2 max-h-28' src='/logo_devpleno.png' />
        </div>
      </div>

    </div>
  )
}

export default Footer