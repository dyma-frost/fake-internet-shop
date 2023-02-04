import React from 'react'
import ReactDOM from 'react-dom/client'

//React component

const Title = () => {
    return <h1>Helo App.js</h1>
}

const Content = () => {
    return (
        <React.Fragment>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
                nobis voluptatibus maxime, praesentium deserunt esse id a
                reiciendis nemo rem ab atque, molestiae at itaque delectus
                tenetur. Quam, unde saepe.
            </p>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
                nobis voluptatibus maxime, praesentium deserunt esse id a
                reiciendis nemo rem ab atque, molestiae at itaque delectus
                tenetur. Quam, unde saepe.
            </p>
        </React.Fragment>
    )
}

//component name OlwaysInPaskalCase

function App() {
    return (
        <>
            <Title />
            <Content />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
