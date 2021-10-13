import React from "react"
import ReactDom from "react-dom"
import "./index.scss"
import QQ from "./Items/qq.jsx"

const app = document.createElement("div")
document.body.appendChild(app)
ReactDom.render(
    <div>
        <QQ />
    </div>,
    app
)