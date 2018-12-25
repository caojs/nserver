import Layout from '../Layout'
import styled from 'styled-components'

const Section = styled.section`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  margin-top: -20px;
`;

const Logo = styled.div`
  font-size: 3rem;
  line-height: 1;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Text = styled.span`
  display: block;
  margin-bottom: 5px;
  font-size: 1.1rem;
`;

const TextOne = styled(Text)`
  font-size: 1.3rem;
`;

export default function ComingSoon() {
  return (
    <Layout>
      <Section>
          <Wrapper>
            <Logo className="has-text-primary">XQuant</Logo>
            <div>
              <TextOne>Tính năng đang được hoàn thiện. Xin hãy quay lại sau.</TextOne>
            </div>
          </Wrapper>
      </Section>
    </Layout>
  )
}