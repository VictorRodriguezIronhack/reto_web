
import { Fragment } from 'react';

const OpinionStars = ({ phone, isSimplified, rate }) => {

    const rateStars = () => {
        if (rate === 5) {
            return <div>
                <i className="fa fa-star starColor" aria-hidden="true"></i><i className="fa fa-star starColor" aria-hidden="true"></i><i className="fa fa-star starColor" aria-hidden="true"></i><i className="fa fa-star starColor" aria-hidden="true"></i><i className="fa fa-star starColor" aria-hidden="true"></i>
            </div>

        } else if (rate === 4) {
            return <div>
                <i className="fa fa-star starColor" aria-hidden="true"></i><i className="fa fa-star starColor" aria-hidden="true"></i><i className="fa fa-star starColor" aria-hidden="true"></i><i className="fa fa-star starColor" aria-hidden="true"></i><i className="fa fa-star-o starColor" aria-hidden="true"></i>
            </div>
        } else if (rate === 3) {
            return <div>
                <i className="fa fa-star starColor" aria-hidden="true"></i><i className="fa fa-star starColor" aria-hidden="true"></i><i className="fa fa-star starColor" aria-hidden="true"></i><i className="fa fa-star-o starColor" aria-hidden="true"></i><i className="fa fa-star-o starColor" aria-hidden="true"></i>
            </div>
        } else if (rate === 2) {
            return <div>
                <i className="fa fa-star starColor" aria-hidden="true"></i><i className="fa fa-star starColor" aria-hidden="true"></i><i className="fa fa-star-o starColor" aria-hidden="true"></i><i className="fa fa-star-o starColor" aria-hidden="true"></i><i className="fa fa-star-o starColor" aria-hidden="true"></i>
            </div>
        } else if (rate === 1) {
            return <div>
                <i className="fa fa-star starColor" aria-hidden="true"></i><i className="fa fa-star-o starColor" aria-hidden="true"></i><i className="fa fa-star-o starColor" aria-hidden="true"></i><i className="fa fa-star-o starColor" aria-hidden="true"></i><i className="fa fa-star-o starColor" aria-hidden="true"></i>
            </div>
        }
    }

    const rateAverageSimplified = () => {
        let phoneOpinion = phone?.opinions?.map(opinion => opinion.rate)
        let sumRates = phoneOpinion?.reduce((acc, el) => acc + el, 0)
        let total = Math.round(sumRates / phoneOpinion?.length);
        if (total === 5) {
            return <div className="row">
                <p style={{ fontSize: "25px" }}><i className="fa fa-star starColor" aria-hidden="true"></i>5</p>
            </div>
        } else if (total === 4) {
            return <div className="row">
                <p style={{ fontSize: "25px" }}><i className="fa fa-star starColor" aria-hidden="true"></i>4</p>
            </div>
        } else if (total === 3) {
            return <div className="row">
                <p style={{ fontSize: "25px" }}><i className="fa fa-star starColor" aria-hidden="true"></i>3</p>
            </div>
        } else if (total === 2) {
            return <div className="row">
                <p style={{ fontSize: "25px" }}><i className="fa fa-star starColor" aria-hidden="true"></i>2</p>
            </div>
        } else if (total === 1) {
            return <div className="row">
                <p style={{ fontSize: "25px" }}><i className="fa fa-star starColor" aria-hidden="true"></i>1</p>
            </div>
        }
    }

    return (
        <Fragment>
            {isSimplified ?
                <div>
                    {rateAverageSimplified()}
                </div>
                :
                <div>
                    {rateStars()}
                </div>
            }

        </Fragment>
    )
}

export default OpinionStars
