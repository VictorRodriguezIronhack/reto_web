import styled from 'styled-components';
import { Link } from 'react-router-dom';


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
    @media screen and (max-width: 500px){
       width: 40px;
       margin: 0;
    }
`;

export const DataContainer = styled.div`
    width: 250px;
    margin: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const DetailButton = styled.a`
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

export const HiddenWrapper = styled.section`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba( 0,0,0,0.5 );
    transition: opacity 500ms;
    visibility: hidden;
    opacity: 0;
    &:target {
        visibility: visible;
        opacity: 1;
    }
`;

export const HiddenSection = styled.div`
    display:flex;
    justify-content: flex-start;
    align-items: center;
    margin: 70px auto;
    padding: 40px 30px 50px;
    background: white;
    width: 40%;
    position: relative;
    transition: all 3s ease-in-out;
    @media screen and (max-width: 1024px){
          width: 70%;
      }
    @media screen and (max-width: 500px){
        flex-direction: column;
        height: 500px;
        width: 100%;
    }
`;

export const PhoneCharacteristics = styled.div`
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    margin-bottom: 1rem;
    @media screen and (max-width: 500px){
        width: 200px;
    }
`;

export const HiddenDataContainer = styled.div`
    width: 400px;
    margin: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 500px){
        width: 300px;
    }
`;

export const HiddenPrice = styled.h3`
    font-size: 3rem;
`;

export const HiddenImgContainer = styled.img`
    border-radius: 10px;
    min-width: 200px;
    max-width: 250px;
    margin: 5px;
    @media screen and (max-width: 500px){
       display: none; 
    }
`;




function Phone(props) {

    const { phone } = props;

    return (
        <CardWapper>
            <DataContainer>
                <ImgContainer src={phone.imageFileName} />
                <DetailButton href={`#${phone.name}pop`} className="btn btn-primary">Details</DetailButton>
            </DataContainer>
            <DataContainer>
                <h2>{phone.name}</h2>
                <Description>{phone.description}</Description>
                <h3>{phone.price}$</h3>
            </DataContainer>
            <HiddenWrapper id={`${phone.name}pop`}>
                <HiddenSection>
                    <DataContainer>
                        <HiddenImgContainer src={phone.imageFileName} />
                    </DataContainer>
                    <div>
                        <HiddenDataContainer>
                            <h2 className="mb-3">{phone.name}</h2>
                            <Description>{phone.description}</Description>
                            <div className="d-flex justify-content-between align-items-center">
                                <PhoneCharacteristics>
                                    <h6 className="me-2">{phone.manufacturer}</h6>
                                    <h6 className="me-2">{phone.color}</h6>
                                    <h6 className="me-2">{phone.screen}</h6>
                                    <h6 className="me-2">{phone.processor}</h6>
                                    <h6>{phone.ram}Gb RAM</h6>
                                </PhoneCharacteristics>
                                <HiddenPrice>{phone.price}$</HiddenPrice>
                            </div>
                            <DetailButton href="#popdetail" className="btn btn-primary">Close</DetailButton>
                        </HiddenDataContainer>

                    </div>
                </HiddenSection>
            </HiddenWrapper>
        </CardWapper>
    );
}

export default Phone;