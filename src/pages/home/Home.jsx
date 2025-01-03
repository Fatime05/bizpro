import React from 'react'
import Layout from '../../components/common/layout/Layout'
import Bizpro from './components/bizpro/Bizpro'
import Blog from './components/blog/Blog'
import Herosection from './components/hero/Herosection'
import Team from './components/team/Team'

const Home = () => {
  return (
    <Layout>
        <Herosection/>
        <Bizpro/>
        <Team/>
        <Blog/>
    </Layout>
  )
}

export default Home