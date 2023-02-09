import React from 'react'
import ReactDOM from 'react-dom/client'
import { Content } from './Content'
import Title from './Title'

//component name OlwaysInPaskalCase

function App() {
    return (
        <>
            <Title text="React" />
            <Title text="TS" />
            <Content
                text1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt minima, eligendi, eius omnis mollitia libero "
                text2="alias necessitatibus nihil molestiae eveniet eos sint et exercitationem harum quod! Dolores aliquid alias voluptatibus!"
                year={2023}
            />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
