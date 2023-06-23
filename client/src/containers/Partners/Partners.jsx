import React from 'react'
import { PartnerCard } from '../../components'
import { data } from '../../constants'

import './Partners.scss'

const Partners = () => {
  return (
    <section className='app__section app__partners'>
        <h1 className='section__title'>Partners</h1>
        <div className='partners__list'>
            {data.partners.map((partner) => 
              <PartnerCard key={partner.id} partner={partner}/>
            )}
        </div>
    </section>
  )
}

export default Partners