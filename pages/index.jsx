import React from 'react'
import Container from '../components/container/Container';
import Head from 'next/head';

const Index = () => {
    return (
        <>
            <Head>
                <title>Inicio | Mercadolibre</title>
            </Head>
            <Container>
                <h1>Hello index</h1>
            </Container>
        </>
    )
}

export default Index;