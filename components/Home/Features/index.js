import styled from 'styled-components'
import { FiFilter, FiPieChart, FiCrosshair } from 'react-icons/fi'
import Feature from './Feature'

const features = [{
    name: "Filter",
    description: "Aut et ea atque tempora sed sed omnis sapiente et.",
    icon: <FiFilter/>
}, {
    name: "Optimization",
    description: "Aut et ea atque tempora sed sed omnis sapiente et.",
    icon: <FiCrosshair/>
}, {
    name: "Backtest",
    description: "Aut et ea atque tempora sed sed omnis sapiente et. Aut et ea atque tempora sed sed omnis sapiente et.",
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
                        <div className="column is-narrow has-text-centered">
                            <Feature {...feature}/>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    )
}