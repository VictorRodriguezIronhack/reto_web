import Phone from './Phone';
import { useQuery, gql } from '@apollo/client';
import styled, { keyframes } from 'styled-components';



const PHONES_QUERY = gql`
    {
        feed {
            name
            description
            price
            imageFileName
        }
    }
`;


export const LoadingSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #333;
    overflow:hidden;
`;

const rotate = keyframes`
    from {
        transform: rotate(0deg);
        box-shadow: 0 0 1px 0px blue;

    }
    to {
        transform: rotate(360deg);
    }
`;

export const LoadingElement = styled.span`
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    color: #fff;
    height: 300px;
    border-radius: 50%;
    background-color: #222;
    box-shadow: 1px -5px 2px 5px crimson;
    transform: rotate(30deg);
    animation: ${rotate} 1s linear infinite reverse;
`;


const PhoneList = () => {

    const { data, loading } = useQuery(PHONES_QUERY);

    return (
        <div>
            {loading && (
                <LoadingSection>
                    <LoadingElement>
                        <span id="rote"></span>
                    </LoadingElement>
                </LoadingSection>
            )}
            {data && (
                <div className="container">
                    <div className="row">
                        {data.feed.map((phone) => (
                            <Phone key={phone.id} phone={phone} />
                        ))}
                    </div>
                </div>
            )}

        </div>
    );
}

export default PhoneList;