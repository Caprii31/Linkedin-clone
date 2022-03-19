import React from 'react'

function LinkIcon({ Icon , title , Avatar }) {
  return (
    <div className="header__icon">
        {Icon && <Icon className="link__icon" />}
        {Avatar && <img  src={Avatar} className="link__icon" alt=''/>}
        {title && <h3>{title}</h3>}
    </div>
  )
}

export default LinkIcon