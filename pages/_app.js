import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Layout from '../components/Layout'
import '../css/styles.css'

const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <Layout>
        <div className='container mx-auto'>
          <Component {...pageProps} />
        </div>
      </Layout>

    </div>
  )
}

export default MyApp