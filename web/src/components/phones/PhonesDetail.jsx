import { useState, useEffect, Fragment } from 'react';
import { useParams, useHistory } from 'react-router';
import { Link } from 'react-router-dom';

import phonesService from '../../services/phones-service';

function PhoneDetail() {

  const params = useParams();
  const history = useHistory();

  const [phone, setState] = useState({
    image: '',
    touch: {}
  });

  useEffect(() => {
    async function fetchPhone() {
      const { id } = params;
      console.info(`Fetching phone ${id}...`)
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

      <div className="container bg-dark">
        <div className="card-body col-11">
          <img src={`../images/${imageFileName}`} className="img-fluid w-50 mb-2" alt="phone" />
          <div className="row">
            <p className="card-text text-white col-8">{name} {color}, by {manufacturer}</p>
            <p className="card-text text-white col">{price} $</p>
          </div>
          <p className="card-text text-secondary text-start">{description}</p>
            <ul className="text-start">
              <li className="card-text text-secondary"><small>Screen: {screen}</small></li>
              <li className="card-text text-secondary"><small>Processor: {processor}</small></li>
              <li className="card-text text-secondary"><small>Ram: {ram}</small></li>
            </ul>

            <Link to={`/cart`} className="card-link float-end"><i className="fas fa-plus text-secondary me-3 text-white"></i></Link>
        </div>
        </div>

    </Fragment>
  );
}

export default PhoneDetail;
