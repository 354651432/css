import React from "react"


const alipayUrl = "https://is1-ssl.mzstatic.com/image/thumb/Purple125/v4/09/81/db/0981db0a-5e1d-80ba-bb7f-801edda1dac4/AppIcon-1x_U007emarketing-0-7-0-0-85-220.png/1200x630wa.png"
export default () =>
    <div className="alipay">
        <header>
            <span>↘</span>
            <span>↘</span>
            <span>↘</span>
            <span>↘</span>
            <span className="split"></span>
            <time>18:32</time>
        </header>
        <section className="top-1">
            <div className="prefix">
                <h6>上海</h6>
                <sub>多云 24☪</sub>
            </div>
            <div className="search">
                <span>🔍</span>
                <input type="text" placeholder="菜鸟驿站取件" />
                <button>搜索</button>
            </div>
            <div className="suffix">
                ®️
            </div>
        </section>
        <section className="top-2">
            {Array.from({ length: 4 }).map((_, id) =>
                <figure key={id}>
                    <img src="http://pic.616pic.com/ys_img/00/11/67/3gdo7JnJGW.jpg" alt="" />
                    <figcaption>扫一扫</figcaption>
                </figure>)}
        </section>
        <main>
            <div className="tools">
                {Array.from({ length: 15 }).map((_, id) =>
                    <figure key={id}>
                        <img src="http://pic.616pic.com/ys_img/00/11/67/3gdo7JnJGW.jpg" alt="" />
                        <figcaption>菜鸟</figcaption>
                    </figure>
                )}
            </div>
            <div className="message">
                <ul>
                    <li>快递运输中<span>2小时前</span></li>
                    <li>你有87积分即将消失<span>4小时前</span></li>
                </ul>
                <div>
                    <div className="red-dot"></div>
                    &gt;
                </div>
            </div>
            <div className="slug">
                <img src="http://static.616pic.com/img/dhlogo.png" alt="" />
            </div>
            <div className="epidemic">
                <div className="top">
                    <p>抗击新冠疫情</p>
                    <div className="line"></div>
                    <span>截止 2021.10.13 17:03</span>
                </div>
                <div className="assis">
                    <h4>疫情服务助手</h4>
                    <div>
                        当前城市 <span className="tip">低风险地区</span>
                    </div>
                    <ul>
                        <li>核酸证明</li>
                        <li>新冠病例轨迹</li>
                        <li>通信行程卡</li>
                    </ul>
                </div>
                <ul className="summary">
                    <li><span>上海新增</span><span>2 &gt;</span></li>
                    <li><span>国内新增</span><span>30 &gt;</span></li>
                    <li><span>现有确诊</span><span>2489 &gt;</span></li>
                </ul>
                <div className="info">
                    <h4>实时资讯</h4>
                    <p>这是文字这是文字这是文字这是文字这是文字这是<br />文字这是文字这是文字这是文字这是文字这是文字这是文字这是文字</p>
                    <time>人民网 3小时前</time>
                </div>
            </div>
        </main>

        <footer>
            {Array.from({ length: 5 }).map((_, id) =>
                <figure key={id}>
                    <img src={alipayUrl} alt="" />
                    <figcaption>理财</figcaption>
                </figure>)}
        </footer>
    </div>