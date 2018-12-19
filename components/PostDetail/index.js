import React, { Component } from 'react'
import styled from 'styled-components'

import request from '~/request'
import Layout from '~/components/Layout'

const Heading = styled.div`
`;

export default class PostDetail extends Component {
    static async getInitialProps({ query }) {
        const { slug } = query
        const id = slug.split('.').pop()
        return request.get(`/posts/${id}`)
            .then(data => ({ data }))
    }

    render() {
        const {
            title,
            description,
            image,
            content
        } = this.props.data;

        return (
            <Layout>
                <section className="section">
                    <div className="container">
                        <Heading>
                            <h3>{title}</h3>
                            <p>{description}</p>
                        </Heading>
                        <div>
                            <div className="ql-editor" dangerouslySetInnerHTML={{ __html: content }} />
                        </div>
                    </div>
                </section>
            </Layout>
        )
    }
}