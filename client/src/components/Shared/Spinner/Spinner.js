import './Spinner.css'

const Spinner = ({tittle, message}) => {
    return <>
        <div className="spinner"></div>
        <i>
            <h5>{ tittle }</h5>
            <p>{ message }</p>
        </i>
    </> 
}

export default Spinner