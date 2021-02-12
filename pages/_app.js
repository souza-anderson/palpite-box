import React from 'react'
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