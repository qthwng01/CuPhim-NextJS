'use client'

import React from 'react'

interface IEkipProps {
  actor: string[]
  director: string[]
}

const Ekip = ({ actor, director }: IEkipProps) => {
  return (
    <>
      <span style={{ color: 'white' }}>
        Diễn viên:{' '}
        {actor?.map((item, index: number) => (
          <React.Fragment key={index}>
            {item}
            {index !== actor.length - 1 && ', '}
          </React.Fragment>
        ))}
      </span>
      <br />
      <br />
      <span style={{ color: 'white' }}>Đạo diễn: {director[0] !== '' ? director[0] : 'Đang cập nhật'}.</span>
    </>
  )
}

export default Ekip
