import {} from 'react-icons/fa';
import Feature from './Feature';

const features = [{
    name: "Filter",
    description: "Aut et ea atque tempora sed sed omnis sapiente et.",
    icon: ""
}, {
    name: "Optimization",
    description: "Aut et ea atque tempora sed sed omnis sapiente et.",
    icon: ""
}, {
    name: "Backtest",
    description: "Aut et ea atque tempora sed sed omnis sapiente et. Aut et ea atque tempora sed sed omnis sapiente et.",
    icon: ""
}]

export default function Features() {
    return (
        <section className="section">
            <div className="container">
                <div className="columns is-mobile is-multiline is-centered">
                    {features.map(feature => (
                        <div className="column is-narrow has-text-centered">
                            <Feature {...feature}/>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}