import React from 'react'

const firma = "<Maria Belén De Franchi/>";

const Footer = () => {
  return (
    <footer className=" bg-body-tertiary p-0">
      <div className="container-fluid">
        <div className='row d-flex align-items-center'>
          <div className='col'>
            <h4 className="Footer-brand m-auto">Desarrollado por:</h4>
            <h4 className="Footer-brand m-auto">{firma}</h4>
          </div>
          <div className='col'>
            <h4>Seguime en mis redes:</h4>
            <a href="https://www.linkedin.com/in/belendefranchi/" target='_blank'>
              <img className='img-fluid m-2' src="linkedin.png" alt="LinkedIn" width="15%"/>
            </a>
            <a href="https://github.com/Belendefranchi/" target='_blank'>
              <img className='img-fluid m-2' src="github.png" alt="GitHub" width="15%"/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer