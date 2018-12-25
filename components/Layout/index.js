import styled from 'styled-components'
import Head from './Head'
import Foot from './Foot'

const Wrapper = styled.section`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

const BodyWrapper = styled.div`
    position: relative;
    flex: 1;
`;

export default function Layout(props) {
    return (
        <Wrapper>
            <div>
                <Head/>
            </div>

            <BodyWrapper>
                {props.children}
            </BodyWrapper>
            <div>
                <Foot/>
            </div>
        </Wrapper>
    )
}