import Layout from '../Layout'
import styled from 'styled-components'

const Section = styled.section`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Logo = styled.span`
  display: flex;
  align-items: center;
  position: relative;
  font-size: 2.4rem;
  font-weight: bold;
  margin-right: 40px;
  :after {
    content: "";
    position: absolute;
    top: 0;
    right: -20px;
    width: 1px;
    height: 100%;
    background: linear-gradient(to bottom, #f5f6f6 0%,#a09d9d 25%,#7a7a7a 50%,#a09d9d 75%,#f5f6f6 100%);
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 20px 0;
`;

const Text = styled.span`
  display: block;
  font-size: 1.1rem;
  font-weight: 500;
`;

export default function ComingSoon() {
  return (
    <Layout>
      <Section className="section">
          <Wrapper>
            <Logo className="has-text-primary">XQuant</Logo>
            <TextWrapper>
              <Text>Tính năng đang được hoàn thiện.</Text>
            </TextWrapper>
          </Wrapper>
      </Section>
    </Layout>
  )
}