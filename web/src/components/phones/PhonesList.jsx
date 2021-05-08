import { useState, useEffect } from 'react';
import PhoneItem from './PhoneItem';

import phonesService from '../../services/phones-service';
import { Fragment } from 'react';

function PhonesList({ minSearchChars }) {

    const [state, setState] = useState({
        phones: []
    });
    const [search/*, setSearch*/] = useState({});

    useEffect(() => {
        async function fetchPhones() {
            const phones = await phonesService.list(search);
            if (!isUnmounted) {
                setState({
                    phones: phones
                })
            }
        }

        let isUnmounted = false;

        fetchPhones();


        return () => {
            isUnmounted = true;
        }
    }, [search, minSearchChars]);

    const { phones } = state;

    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    {phones.map(phone => (
                        <div className="col-md-3 mt-1">
                            <div key={phone.id} className="col mb-4"><PhoneItem phone={phone} /></div>
                        </div>
                    ))}
                </div>
            </div>
        </Fragment>
    )
}

PhonesList.defaultProps = {
    minSearchChars: 4
}

export default PhonesList;
