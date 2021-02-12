import React from 'react'
import PageTitle from '../components/PageTitle'

const Sobre = () => {
  return (
    <div>
      <PageTitle title={'Sobre'} />
      <h1 className="text-center font-bold my-4 text-4x1">O que é este projeto?</h1>
      <p className='text-center mb-4'>Este projeto tem como objetivo oferecer um serviço de sugestões para melhorias do estabelecimento</p>

    </div>
  )
}

export default Sobre