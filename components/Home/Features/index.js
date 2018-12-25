import styled from 'styled-components'
import { FiFilter, FiPieChart, FiCrosshair } from 'react-icons/fi'
import Feature from './Feature'

const features = [{
    name: "Bộ lọc",
    description: "Lọc các cổ phiếu dựa trên các chỉ số thị trường, các chỉ số tài chính cơ bản và các tín hiệu kỹ thuật.",
    icon: <FiFilter/>
}, {
    name: "Tối ưu danh mục",
    description: "Xây dựng danh mục đầu tư cổ phiếu hợp lý dựa trên việc tối ưu các hàm mục tiêu của nhà đầu tư.",
    icon: <FiCrosshair/>
}, {
    name: "Kiểm định",
    description: "Kiểm định tính hiệu quả của các chiến thuật giao dịch, các danh mục đầu tư trên dữ liệu thực tế.",
    icon: <FiPieChart/>
}]

const Section = styled.section`
    background: white;
`;

export default function Features() {
    return (
        <Section className="section">
            <div className="container">
                <div className="columns is-mobile is-multiline is-centered">
                    {features.map(feature => (
                        <div key={feature.name} className="column is-narrow has-text-centered">
                            <Feature {...feature}/>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    )
}