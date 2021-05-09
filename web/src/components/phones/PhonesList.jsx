import { useState, useEffect } from 'react';
import PhoneItem from './PhoneItem';

import phonesService from '../../services/phones-service';
import { Fragment } from 'react';
import Spinner from '../spinner/Spinner';

function PhonesList({ minSearchChars }) {

    const [state, setState] = useState({
        phones: [],
        loading: false
    });
    const [search] = useState({});

    useEffect(() => {
        async function fetchPhones() {
            console.log('Fetching phones...');
            setState(state => ({
                ...state,
                loading: true
            }))
            const phones = await phonesService.list(search);
            if (!isUnmounted) {
                // setState({
                //     phones: phones,
                //     loading: false
                // })

  // debido a que la bd carga muy rapido, he puesto el setTimeout para ver el efecto del spinner
                setTimeout(()=>{
                    setState({
                        phones: phones,
                        loading: false
                    })
                },3000);
                
            }
        }

        let isUnmounted = false;

        fetchPhones();


        return () => {
            isUnmounted = true;
        }
    }, [search, minSearchChars]);

    const { phones, loading } = state;

    return (
        <Fragment>
            <div className="container">
            <Spinner loading={loading}  />
                <div className="row">
                    {phones.map(phone => (
                        <div className="col-md-3 mt-1" key={phone.id} >
                            <div className="col mb-4"><PhoneItem phone={phone} /></div>
                        </div>
                    ))}
                </div>
            </div>
        </Fragment>
    )
}

PhonesList.defaultProps = {
    loading: false,
    minSearchChars: 4
}

export default PhonesList;
