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

const Soon = styled.span`
    color: hsl(204, 86%, 53%);
    border-bottom: 1px dashed hsl(204, 86%, 53%);
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
                <h5 className="is-size-5 has-text-black-ter">{name}</h5>
                <p>{description}</p>
                <Soon>Comming soon</Soon>
            </Description>
        </Wrapper>
    )
}