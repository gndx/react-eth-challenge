import React from 'react'
import '../styles/components/App.styl'
import Header from '../components/Header'
import About from '../components/About'
import Profile from '../components/Profile'
import Experience from '../components/Experience'
import Academic from '../components/Academic'
import Skills from '../components/Skills'
import Interest from '../components/Interest'
import Languages from '../components/Languages'
import { useData } from '../hooks/useData'

function App() {
  const { data, loading } = useData()
  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Header
        name={data?.name}
        profile={data?.profile}
        social={data?.social}
        avatar={data?.avatar}
        profession={data?.profession}
      >
        <About
          profile={data?.profile}
          address={data?.address}
          email={data?.email}
          website={data?.website}
          phone={data?.phone}
        />
      </Header>
      <Profile profile={data?.profile} />
      <Experience exp={data?.experience} />
      <section className='container1'>
        <Academic academic={data?.academic} certificate={data?.certificate} />
        <Skills skills={data?.skills} />
      </section>
      <section className='container2'>
        <Interest interests={data?.interest} />
        <Languages languages={data?.languages} />
      </section>
    </>
  )
}

export default App
