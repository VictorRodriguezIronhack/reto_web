import styled from '@emotion/styled'

const HeaderContainer = styled.header`
    background-color:#26C6DA;
    margin-bottom:2rem;
    padding:10px;
    font-weight:bold;
    color:#FFFFFF;
`
const TextoHeader = styled.h1`
    font-size:2rem;
    margin:0;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif,serif;
    text-align:center;
`

const Header = ({ title }) => {
    return (
        <HeaderContainer>
            <TextoHeader>{title}</TextoHeader>
        </HeaderContainer>
    )
}

export default Header