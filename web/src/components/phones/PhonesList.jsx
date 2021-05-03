import { useState, useEffect } from 'react';
import PhoneItem from './PhoneItem';
// import HousesFilter from './HousesFilter';
// import child from '../../images/child-and-clown.jpg';
// import family from '../../images/family.jpg';

import phonesService from '../../services/phones-service';
import { Fragment } from 'react';

function PhonesList({ minSearchChars }) {

    const [state, setState] = useState({
        phones: [],
        loading: false
    });
    const [search/*, setSearch*/] = useState({});

    useEffect(() => {
        async function fetchPhones() {
            console.log('Buscando teléfonos...');
            setState(state => ({
                ...state,
                loading: true
            }))
            const phones = await phonesService.list(search);
            if (!isUnmounted) {
                setState({
                    phones: phones,
                    loading: false
                })
            }
        }

        let isUnmounted = false;

        fetchPhones();


        return () => {
            isUnmounted = true;
        }
    }, [search, minSearchChars]);

    // const handleSearch = search => {
    //     //Aqui habria que hacer comprobaciones. Si se pasa capacity en blanco, o es un texto, etc.
    //     //Comprobacion que capacity sea un numero
    //     if (Number.isNaN(parseInt(search.capacity))) {
    //         delete search.capacity;
    //     }
    //     setSearch(search);
    // }

    const { phones/*, loading*/ } = state;

    return (
        <Fragment>

            <div className="row row-col-3 justify-content-center">

                {/* <div className="col-3 ms-5 my-2">
                    <div className="card bg-light">
                        <PhonesFilter className="mb-3" onSearch={handleSearch} loading={loading} />
                    </div>
                </div> */}

                <div className="col-8 mt-2">
                    {phones.map(phone => (
                        <div key={phone.id} className="col mb-4"><PhoneItem phone={phones} /></div>
                    ))}
                </div>
                {/* <div className="col-2 my-2">
                    <div className="card bg-light text-secondary">

                        <img src={family} alt="child" className="ratio ratio-16x9 image-fluid mb-4" />

                        <p>Si tienes una casa y no le das uso colabora con nosotros, tendrás muchas ventajas.</p>
                        <img src={child} alt="child" className="ratio ratio-16x9 image-fluid my-3" />

                        <p className="mt-2">O también puedes hacer una donación para los gastos de la vivienda con un simple Bizum al</p>
                        <p><i className="fa fa-whatsapp me-2 mb-3"></i>555 666 777</p>

                    </div>
                </div> */}
            </div>
        </Fragment>
    )
}

PhonesList.defaultProps = {
    minSearchChars: 4
}

export default PhonesList;
