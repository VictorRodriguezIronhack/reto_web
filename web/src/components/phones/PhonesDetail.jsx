import { useState, useEffect, Fragment/*, useContext*/ } from 'react';
import { useParams, useHistory } from 'react-router';
import { Link } from 'react-router-dom';
// import { AuthContext } from '../../contexts/AuthStore';

import phonesService from '../../services/phones-service';

function PhoneDetail() {

  const params = useParams();
  const history = useHistory();
  // const { user } = useContext(AuthContext);
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

      <div className="container justify-content-center bg-dark mx-4">
        <div className="card-body col-11 text-start">
          <img src={`${imageFileName}`} alt="phone" />
          <div className="row">
            <p className="card-text text-white col-8">{name} {color}, by {manufacturer}</p>
            <p className="card-text text-white col">{price}</p>
          </div>
          <p className="card-text text-secondary">{description}</p>
          <div className="row">
            <p className="card-text text-secondary col-5">{screen}</p>
            <p className="card-text text-secondary col-5">{processor}</p>
            <p className="card-text text-secondary col">{ram}</p></div>
            <Link to="/home" className="card-link float-end"><i className="fas fa-plus text-secondary me-3 text-white"></i></Link>
        </div>
      </div>

    </Fragment>
  );
}

export default PhoneDetail;
