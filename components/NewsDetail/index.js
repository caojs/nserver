import React, { Component } from 'react'
import Link from 'next/link'
import slugify from 'slugify'
import styled from 'styled-components'
import fecha from 'fecha'

import request from '~/request'
import {fillPath} from '~/utils/images'
import Layout from '~/components/Layout'

const Figure = styled.figure`
    margin-bottom: 30px;
`;

const Heading = styled.div`
    margin-bottom: 30px;
`;

const Title = styled.h3`
    font-size: 1.6rem;
    font-weight: 600;
    margin-bottom: 0.4rem;

    &&& {
        a {
            color: hsl(0, 0%, 7%);
            transition: color 0.2s ease;
            :hover {
                color: hsl(204, 86%, 53%);
            }
        }
    }
`;

const Time = styled.time`
    display: block;
    margin-bottom: 0.4rem;
    font-size: 0.9rem;
    color: hsl(0, 0%, 71%);
`;

const Description = styled.p`
    color: hsl(0, 0%, 29%);
    font-size: 1.1rem;
    font-weight: 400;
`;

const Content = styled.div`
    color: hsl(0, 0%, 29%);
`;

export default class NewsDetail extends Component {
    static async getInitialProps({ query }) {
        const { slug } = query
        const id = slug.split('.').pop()
        return request.get(`/posts/${id}`)
            .then(data => ({ data }))
    }

    render() {
        const {
            id,
            title,
            description,
            image,
            content,
            created_at
        } = this.props.data;

        const createdAt = fecha.format(new Date(created_at), 'mediumDate')

        const as = `/news/${slugify(title)}.${id}`

        const href = {
            pathname: '/news-detail',
            query: {
            slug: `${slugify(title)}.${id}`
            }
        }
        return (
            <Layout>
                <section className="section">
                    <div className="container">
                        <Heading>
                            <Title>
                                <Link as={as} href={href}>
                                    <a>{title}</a>
                                </Link>
                            </Title>
                            <Time dateTime={createdAt}>{createdAt}</Time>
                            <Description>{description}</Description>
                        </Heading>
                        {image &&
                            <Figure className="image">
                                <img src={fillPath(image.url)}/>
                            </Figure>}
                        <Content>
                            <div className="ql-editor" dangerouslySetInnerHTML={{ __html: content }} />
                        </Content>
                    </div>
                </section>
            </Layout>
        )
    }
}