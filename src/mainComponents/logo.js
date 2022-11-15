import styled from "styled-components";

export default function Logo() {
    return(
            <LogoName>
                MyWallet 
            </LogoName>
    )
}

const LogoName = styled.h2`
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 147px;
    height: 50px;

    font-family: 'Saira Stencil One';
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 50px;

    color: #FFFFFF; 
`