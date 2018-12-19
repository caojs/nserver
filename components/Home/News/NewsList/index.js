import styled from 'styled-components'

import NewsItem from '../NewsItem';

const List = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-left: -0.75rem;
    margin-right: -0.75rem;
    overflow: hidden;
`;

const Item = styled(NewsItem)`
    flex: 1 1 350px;
    margin: 0.75rem;
`;

export default function NewsList({ news }) {
    return (
        <List>
            {news.map((item, id) => (
                <Item key={id} {...item}/>
            ))}
        </List>
    )
}