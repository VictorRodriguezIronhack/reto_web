import './Landing.css'
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'

const Landing = props => {
    return (
        <>
            <header className="hero" style={{ backgroundImage: `url(${props.img})` }}>
                <div className="content">
                    <p>{props.msg}</p>
                    <Link to={props.to} className="newInvLink">
                        <Button
                            variant="contained"
                            color="secondary"

                            startIcon={<EditIcon />}

                        >
                            {props.btn}
                        </Button>
                    </Link>
                </div>
            </header>
        </>
    );
}

export default Landing;