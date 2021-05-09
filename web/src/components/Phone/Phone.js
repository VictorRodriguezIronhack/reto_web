import styled from 'styled-components';


export const CardWapper = styled.div`
    overflow: hidden;
    padding: 0 0 32px;
    margin: 48px auto 0;
    width: 600px;
    height: 400px
    font-family: 'Poppins', sans-serif;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
    border-radius: 5px;
    display: flex;
    justify-content: between;
    align-items: center;
    background-color: #ffffff;
`;

export const ImgContainer = styled.img`
    border-radius: 10px;
    min-width: 200px;
    max-width: 250px;
    margin: 5px;
`;

export const DataContainer = styled.div`
    width: 250px;
    margin: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const DetailButton = styled.button`
    background-color: black;
    border: black;
    &:hover {
        background-color: black;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.2), 0 0px 40px rgba(0, 0, 0, 0.2);
    }
`;

export const Description = styled.p`
    text-align: start;
    font-size: 12px;
`;


function Phone(props) {

    const { phone } = props;

    return (
        <CardWapper>
            <DataContainer>
                <ImgContainer src={phone.imageFileName}/>
                <DetailButton className="btn btn-primary">Details</DetailButton>
            </DataContainer>
            <DataContainer>
                <h2>{phone.name}</h2>
                <Description>{phone.description}</Description>
                <h3>{phone.price}$</h3>
            </DataContainer>
        </CardWapper>       
    );
}

export default Phone;