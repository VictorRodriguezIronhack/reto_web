import { Fragment } from 'react';
import { useEffect, useState } from 'react';
import service from '../../services/phones-service';
import PhoneItem from './PhoneItem';

const PhoneList = () => {

    const [state, setState] = useState({
        phones: [],
        loading: false
    });

    useEffect(() => {
        async function fetchPhones() {
            setState(state => ({
                ...state,
                loading: true
            }))
            const phones = await service.list()
            if (!isUnmounted) {
                setState({
                  phones: phones,
                  loading: false
                })
            }
        }
        let isUnmounted = false;
        fetchPhones()
        return () => {
            isUnmounted = true;
          }
    }, [])

    const { phones, loading } = state;
    return (
        <Fragment>
        {loading && <div className="d-flex justify-content-center align-items-center"><img src="loading.gif" alt="Loading..." /></div>}
        <div className="row">
            {phones.map((phone, i) => (
                <div key={i} className="col-lg-4 col-md-6 my-3">
                    <PhoneItem phone={phone}/>
                </div>
            ))}
        </div>
        </Fragment>
    )
}

export default PhoneList;
