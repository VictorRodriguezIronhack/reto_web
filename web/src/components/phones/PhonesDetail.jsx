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

      <div className="container justify-content-center bg-dark mx-4">
        <div className="card-body col-11 text-start">
          <img src={`../images/${imageFileName}`} className="img-fluid w-50" alt="phone" />
          <div className="row">
            <p className="card-text text-white col-8">{name} {color}, by {manufacturer}</p>
            <p className="card-text text-white col">{price} $</p>
          </div>
          <ul className="card-text text-secondary">{description}</ul>

          <li className="card-text text-secondary"><small>{screen}</small></li>
          <li className="card-text text-secondary"><small>processor: {processor}</small></li>
          <li className="card-text text-secondary"><small>ram: {ram}</small></li>

          <Link to={`/cart`} className="card-link float-end"><i className="fas fa-plus text-secondary me-3 text-white"></i></Link>
        </div>
      </div>

    </Fragment>
  );
}

export default PhoneDetail;
