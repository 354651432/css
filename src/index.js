import React from "react"
import ReactDom from "react-dom"
import "./index.scss"
import QQ from "./Items/qq/index"
import Alipay from "./Items/alipay/index"

const app = document.createElement("div")
document.body.appendChild(app)
ReactDom.render(
    <div>
        <Alipay />
    </div>,
    app
)