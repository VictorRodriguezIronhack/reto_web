import moment from 'moment';

const OpinionItem = ({ opinion }) => {

    const starsRate = (rate) => {
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
            <i className="fa fa-star starColor" aria-hidden="true"></i><i className="fa fa-star starColor" aria-hidden="true"></i><i className="fa fa-star starColor-o" aria-hidden="true"></i><i className="fa fa-star-o starColor" aria-hidden="true"></i><i className="fa fa-star-o starColor" aria-hidden="true"></i>
            </div>
        } else if (rate === 1) {
            return <div>
            <i className="fa fa-star starColor" aria-hidden="true"></i><i className="fa fa-star starColor-o" aria-hidden="true"></i><i className="fa fa-star starColor-o" aria-hidden="true"></i><i className="fa fa-star-o starColor" aria-hidden="true"></i><i className="fa fa-star-o starColor" aria-hidden="true"></i>
            </div>
        }
    }


    return (
        <div className="col-md-12 border rounded mb-3">
            <h3><b>{opinion?.title}</b></h3>
            {starsRate(opinion?.rate)}
            <h4>{opinion?.text}</h4>
            <div className="d-flex justify-content-start">
                <p className="mr-2 font-weight-bold">{opinion?.owner?.name}</p>
                <p>{moment(opinion?.createdAt).fromNow()}</p>
            </div>
        </div>
    )
}

export default OpinionItem;
