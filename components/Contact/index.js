import styled from 'styled-components'
import { FaEnvelope, FaPhoneVolume } from 'react-icons/fa'

import Layout from '../Layout'

const Heading = styled.div`
    margin-bottom: 45px;
    text-align: center;
`;

const Title = styled.h3`
    margin-bottom: 0.4rem;
    font-size: 1.9rem;
    font-weight: 700;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const TableWrapper = styled.div`
  padding: 30px 20px;
  background: white;
  box-shadow: 0 0 1rem 0 rgba(10,10,10,.04);
  border-radius: 6px;
`;

const Td = styled.td`
  padding: 10px;
`;

const Icon = styled.span`
  display: inline-block;
  font-size: 40px;
  svg {
    float: left;
  }
`;

const H4 = styled.h4`
  font-size: 1.4rem;
  font-weight: 500;
`

export default function Contact() {
  return (
    <Layout>
      <section className="section">
        <div className="container">
          <Heading>
            <Title>Liên Hệ</Title>
          </Heading>
          <Wrapper>
            <TableWrapper>
              <table>
                <tbody>
                  <tr>
                    <Td>
                      <Icon>
                        <FaEnvelope/>
                      </Icon>
                    </Td>
                    <Td>
                      <H4>Email</H4>
                      <span>nhatnm@xquant.ai</span>
                    </Td>
                  </tr>
                  <tr>
                    <Td>
                      <Icon>
                        <FaPhoneVolume/>
                      </Icon>
                    </Td>
                    <Td>
                      <H4>Số điện thoại</H4>
                      <span>0987362226</span>
                    </Td>
                  </tr>
                </tbody>
              </table>
            </TableWrapper>
          </Wrapper>
        </div>
      </section>
    </Layout>
  )
}