import moment from 'moment';

const OpinionItem = ({ opinion }) => {

    const starsRate = (rate) => {
        if (rate === 5) {
            return <div className="icon icon-warning">
                <span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star</span>
            </div>
        } else if (rate === 4) {
            return <div className="icon icon-warning">
                <span className="material-icons icon-warning">star</span><span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star_border</span>
            </div>
        } else if (rate === 3) {
            return <div className="icon icon-warning">
                <span className="material-icons icon-warning">star</span><span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star_border</span><span className="material-icons">star_border</span>
            </div>
        } else if (rate === 2) {
            return <div className="icon icon-warning">
                <span className="material-icons icon-warning">star</span><span className="material-icons">star</span><span className="material-icons">star_border</span><span className="material-icons">star_border</span><span className="material-icons">star_border</span>
            </div>
        } else if (rate === 1) {
            return <div className="icon icon-warning">
                <span className="material-icons icon-warning">star</span><span className="material-icons">star_border</span><span className="material-icons">star_border</span><span className="material-icons">star_border</span><span className="material-icons">star_border</span>
            </div>
        }
    }


    return (
        <div className="col-md-12 border rounded">
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
