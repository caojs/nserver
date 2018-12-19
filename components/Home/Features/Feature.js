import styled from 'styled-components';

const Wrapper = styled.div`
    display: inline-block;
    max-width: 300px;
`;

const Circle = styled.div`
    display: inline-block;
    width: 88px;
    height: 88px;
    line-height: 88px;
    border-radius: 100%;
    border: 1px solid rgba(0,0,0,.15);
`;

const Description = styled.div`
    margin: 1rem 0 1.5rem 0;
`;

const H = styled.h5`
    margin-bottom: 0.1rem;
`;

const Soon = styled.span`
    display: inline-block;
    margin-top: 0.3rem;
    border-bottom: 1px dashed hsl(204, 86%, 53%);
    color: hsl(204, 86%, 53%);
`;

export default function Feature({ name, description, link, icon }) {
    return (
        <Wrapper>
            <div className="has-text-centered">
                <Circle>
                    <span>{icon}</span>
                </Circle>
            </div>
            <Description className="has-text-centered">
                <H className="is-size-5 has-text-black-ter">{name}</H>
                <p>{description}</p>
                <Soon>Comming soon</Soon>
            </Description>
        </Wrapper>
    )
}