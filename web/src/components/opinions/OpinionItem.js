import moment from 'moment';
import OpinionStars from './OpinionStars';


const OpinionItem = ({ opinion }) => {


    return (
        <div className="col-md-12 rounded mb-3 bg-secondary shadow border-0">
            <div className="row d-flex align-items-center">
                <div className="col-md-4">
                    <img src={opinion?.owner?.avatar} alt={opinion?.owner?.name} className="img-fluid rounded-circle shadow-lg" style={{maxWidth: "140px"}}/>
                </div>
                <div className="col-md-8">
                    <h3><b>{opinion?.title}</b></h3>
                    <OpinionStars rate={opinion?.rate} isSimplified={false}/>
                    <p>{opinion?.text}</p>
                    <div className="d-flex justify-content-start">
                        <p className="mr-2 font-weight-bold">{opinion?.owner?.name}</p>
                        <p>{moment(opinion?.createdAt).fromNow()}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OpinionItem;
