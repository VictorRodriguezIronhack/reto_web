import { useState, useEffect, Fragment, useContext } from 'react';
import { useParams, useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthStore';

import phonesService from '../../services/phones-service';
// import Carrusel from '../carousel/Carrusel';

const validations = {
  docImage: (value) => {
    let message;
    if (!value) {
      message = 'El documento es requerido';
    }
    return message;
  }
}

function PhoneDetail() {

  const params = useParams();
  const history = useHistory();
  const { user } = useContext(AuthContext);
  const [phone, setState] = useState({
    image: '',
    // errors: {
    //   docImage: validations.docImage()
    // },
    touch: {}
  });

  useEffect(() => {
    async function fetchPhone() {
      const { id } = params;
      console.info(`Buscando teléfono ${id}...`)
      const phone = await phonesService.get(id)
      if (!isUnmounted) {
        setState(phone);
      }
    }

    let isUnmounted = false;
    fetchPhone();

    return () => {
      console.info(`Unmounting component...`);
      isUnmounted = true;
    }
  }, [history, params]);


  const { name, manufacturer, description, color, price, imageFileName, screen, processor, ram } = phone;
  return (
    <Fragment>

      <div className="row row-col-3 justify-content-center">

        <div className="col-4 my-2 bg-light text-secondary border rounded g-0">
          <div className="ratio ratio-4x3">
            {/* <img src={images[0]} alt="images" className="image-fluid rounded" />
            <Carrusel images={images}></Carrusel>
            {
              sponsored && (
                <div className="sponsored p-1">Vivienda patrocinada</div>
              )
            } */}
          </div>

          <div className="card-body">
            <div className="text-start">
              <div className="card-body">


                {/* <p className="card-text">{name}</p>
                    <p className="card-text">{manufacturer}</p>
                    <p className="card-text">{description}</p>
                    <p className="card-text">{color}</p>
                    <p className="card-text">{price}</p>
                    <img className="card-text" alt="image">{imageFileName}</img>
                    <p className="card-text">{screen}</p>
                    <p className="card-text">{processor}</p>
                    <p className="card-text">{ram}</p> */}

                {/* <Link className="stretched-link" to={`/phones/${id}`} /> */}

                

                {/* <p className="card-text"><small className="text-danger">Libre a partir del:
                <i className=""></i> {moment(end).format('llll')}</small></p> */}

                <p className="card-text">{description}</p>
                {/* <p className="card-text">Dirección: {address}. {city}</p> */}

                {/* <div className="d-flex flex-row mb-2">
                  <span className="badge rounded-pill border border-secondary text-secondary me-2 p-2">
                    <i className="fa fa-users me-1"></i>{capacity}</span>

                  {
                    enabled && (
                      <span className="badge rounded-pill border border-secondary text-secondary  me-1">
                        Adaptada</span>
                    )
                  }

                  {
                    pet && (
                      <span className="badge rounded-pill border border-secondary text-secondary me-1">
                        Mascotas</span>
                    )
                  }
                </div> */}
                {/* {
                  farmacia && (
                    <span className="badge rounded-pill border border-secondary text-white bg-secondary me-1">
                      farmacia</span>
                  )
                }

                {
                  metro && (
                    <span className="badge rounded-pill border border-secondary text-white bg-secondary me-1">
                      metro</span>
                  )
                }

                {
                  escuela && (
                    <span className="badge rounded-pill border border-secondary text-white bg-secondary me-1">
                      escuela</span>
                  )
                }

                {
                  supermercado && (
                    <span className="badge rounded-pill border border-secondary text-white bg-secondary me-1 mt-2">
                      supermercado</span>
                  )
                } */}

              </div>
            </div>
            {/* 
            {user?.id === house.idHost && (
              <div className="col my-3 text-center">
                <div className="alert alert-secondary" role="alert">
                  <h4 className="fw-light mb-2">Admin Area</h4>
                  <div className="btn-group" role="group">
                    <Link className="btn btn-secondary" to={`/houses/${idHost}/edit`}>Actualiza</Link>
                    <button type="button" className="btn btn-danger" onClick={handleDeleteHouse}>Delete</button>
                  </div>
                </div>
              </div>
            )} */}

            {/* <Link className="btn btn-secondary mt-3" to={`/houses/${house.id}/booking`} >Ir a la reserva</Link> */}
          </div>
        </div>

      </div>


    </Fragment>
  );
}

export default PhoneDetail;
