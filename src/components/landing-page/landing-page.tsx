'use client';

import { useEffect, useState } from 'react';

export const LandingPage = () => {
    const [data, setData] = useState({ title: "", body: "", githubUrl: "" });

    const getData = async () => {
        const res = await fetch('/api/about-project');
        const data = await res.json();
        setData(data);
    };

    useEffect(() => {
        getData();
    }, [])

    return (
        <>
            <h1 style={{ color: "#fff" }}>{data.title}</h1>
            <p style={{ color: "#fff" }}>{data.body}</p>
        </>
    )
};