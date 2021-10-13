import React from "react"

const gentooImgSrc = "data:image/jpeg;base64,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"
const avatorSrc = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgSEhIYGBIYGBERGBEYERgSGBIYGBgZGRgYGBgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTQBDAwMEA8QHhISHzErJSs0NDQ0NDQ0NDQ0NDQ0NDU0NDQ0NDQ0NDY0NDQ0NDQ0NDE0NjQ0NDQxNDQ0NDQ0NDQ0NP/AABEIALcBEwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAABAgAEBQMGB//EADoQAAIBAgQDBgQEBAYDAAAAAAABAgMRBBIhMQVBUQYiYXGBkRMyofBCUrHBFHKC0QcjM2Ky4SSS8f/EABoBAAIDAQEAAAAAAAAAAAAAAAABAgMFBAb/xAArEQADAAEEAQIGAQUBAAAAAAAAAQIRAwQSITFBURMyYXGBkTMFIlKxwRT/2gAMAwEAAhEDEQA/AOSQ0URIKPSnnUGwUiIKEMNiEIABSGSAMAEsSxAoQESDYlhhEgWCkGwQAFiWCGwgBYlgkYDBYlhJV4r8S0312M2HGoZ5Qlsm7Sjd6eN9uXuV1qxPllk6F14Rq2JYr08bCV3GSaVtb23LCJTapZTI1FT8ywCxLDAJEBbAsOAYCgGY2XQQHNgCAYAIEAABojQSMAEsAYgwOIUKhkSKwhIkFAMMUNJD0IdQ1Y66EM94JY6OYUDKEZEiGQEMA0RBIhhEgBQSCAhAgbsrvZXdwAE5WV2eT4lxiUp3g7QjdWte/wD2LxvjOeThGTUI3/qa69Dz88bK+ZRvHkr8vNfeplbrdOnxjx7+5r7XbKFyvz/ouSm1FuMruTSSu20vFc3p9QQqOUlHXk7pK8X4Pfr9opOs27ptadbPy8h4avurVWlv96me2/U7016GlUtDRPWTfO1mvw68rW9y3geKTTSV3C6d796+t1bfl9DJpV1dQu49V68rnZxVm81tbqbsn1aWuvL3HN1DygpTSwz2GD4pCcsl+9a6eyltezt4mieBhVlC04uLtdp5Vq1r76s9fwnGqrBP8S3RrbTdfE/tryZG72qj+6fBeAMBnccAYR1OtWCQtKS2Zdw9NS3IVWOycznoy2hTcnhYpGXVo691aBOoqCoclcgZIBYQAyMjIwABAkGBXCiJDJEisKCgDIQyxRmadGgmjKoI2MI7o59XrwXaXfkrYqnFaLcpTotas15Udbs4YqCsKLx0Ooz2ZdhkdYUbnRYYtdoqUsrjI7rDDRwwckSUsrkSLX8MT+GFzQ+DKtjznazimSHwovvSXe8Fy9z186KSbeyTZ8vxk3XryqSblHN3XtaK+Ve37nLutbjGF6nVtNHleX6HThmATjmnq5a2fI2IYZWtlXscaGxsYSK6HnrbbPRxKSKcMFD8i/8AVCS4bC98iXkrG5kXKwJU0QSfuTbn2PM1ODwcsy7r12Wjv1RzfAZxvOEsz6PkelnRRxbtoS5UvUjxh+h4mc2nZx76ea3R8/C3manBsfkqJtNRdoea5fpv4DcbpaOorXV09L6PcwqEttXpbyl009Lep16VNNUvKOTVldy/DPqSBY4YCpmpwle7cY387alix6Ga5JNHm7njTTJBamjg3qU6VMuYKGtyGo8pk4XZZxEG1ocVSsixWnZXMqpjGUxNPwWU5T7OOJp2l5iugwSm27stKpodLdJIpWG2Vnh2T+HZ3lXB8V7i5MeEVvgsh2+P4EHyoWEZyGQEMi4pIPFCoaLsJjRZhCyNbCwtEzKUr2Nel8py6rZ0aaRSx2ItoijKo3uy1j6WtykizTS4kLb5FqhJ2OjmxaMtDsqiI158Ep8CKbIpsf4iB8VC/AfkGaQU5DxqInx0HfsPr3M/jVdwoVJf7JL1l3V+p4LC0LfzP9OR7DtZipfDhTjbLOeWXWyWZW9UeRxNXJ8usnol98jL3lZrj7Gtso4zyfqXaV07W1NnCwb5Hmo1MTbOkpW5JK/sXeHdoVfJUjkltz+vQzKl+UaU3PhnpFBLdAfgcIY1PmvcWfE4R3kkurIJlrWBpvx/cr1KiRznxihLTOjnUxFOXyzT8EyeGV8l6Mp46OaMl4M8tKDi3br+jv8AserqyTuuWxjYzDZHpzvbnp0OjTfoc+svU9b2Xq5sOvCUo679dfc1zI7Jwth14zm72tflp7GxY9Bo/Ivsee1v5H9zvCd0aGDWhn042L2Eg0tSGp4HHkOOi3HQxZI38yaZi4mFpMlov0Fqr1OMN0XU0U4LUtzo7WLKwRnI1ogvHYSFHqwToeJDC9x9+wbxIVSE+P1Fkq2GQqHRcUBGghRoPUTGi9Rp3saObKkY8cQ0NLFNnPUVTL5tSjRxSzRMtxHWIdrCNk4lz0RqlXZcoQVh1TRTjNob4jIuXkapYLjgipNakzsA1LQqeQoiIgkiJkdoY9yL6Nv1en9zyNdyd1GN3rZ9D13aKPcT8ev34mHhcEpvXn42MLevjqts9DsVy0Ul9TOp8OqNJxqQvrdcvDWzlffmc6+ClFxzTz3inJ5Wssr2aT6bdPJHpHwOHPNbp9q5Sr4WCllhGyWm92zh+IsHX8J56O/C8OnB7aeZg8SoWlbO7Pl09T1uEoqMLfQy54e87bO+5XNYotuMz0YkKVOlGM6lDMpptScs17Ozsrqz15pEjiac3/lrI91q9edmnqn9PE2auErxenfXKV8r9SpiMBKTU507SW0oJX9eperRz/DY9CWivo+hyxybSSV3suY1Om1v+lvoSc5JKUY3tKKfRLn+3uWS0s0KpdYk3OzmMk//AB/hpRpwTU1fvtvW69fobpkcCo96dTlJQW3NLX9jXZs7J1WinX1/Rib9TOs1K8Y/Z3hUSLCxqtYzwHQ4T8nKqa8FuGLszjiaykcQElCTyJ02sATO38ScGAk5T8kU2jq8QyPEM5MAcUHJhzEFIMDghkKhkTKxgoCGQgIFACgGMhkKhkIYwUAKIkhkECCIAoKAEAMrtJK1H+qFvMx+G4hR3NbtTBvDTa3ThL0Ulc8ZSqZ0o3drpO29uhjf1GOVL7G3/Tb4x+T0mJ4vn7kHps5dfC4mFxdJOMXJZ3+G6u+tkebnjVnaWijpGK0W/JdQV6iaUrrMrPZNxe6f6e6M34LZo/8AoSPo9P4Lg25NPk7XMjEwUb1IzXhZ6s8nW4hXcHapHLtdLveNl1OfDaso3cpykr3Wablp16CWi/LG9ws4R7zA14y7s1aXVLR+h1x0YRjpqeQeKbknCevyp30vyUkuTtudZ8Vco97SS7so/laE4rJJakteRsVVu/I64S8o2/Ct3vfVd2K9zOpPPNRWt3t1S1Z63hnCo0+89ZWSS5RVre53aW2eouK8epxa25nSfJ/hfUu4anlglaz3a6eH6HRhAbsQolSvCMDUt3TqvLABhAyZADAxhWACsAwBgBgCwAACEIAHBDIVBRMrHCKhkIAhQEQAHQyEQyESHQUKhkRJDBuKhhAEKAFAAlampxlCXyyUovyasfM50nRqOEnqpNX6We/tqfWMJgp1NYrurebeWMfNnzfidJTedv5Z5b7qV5PL9+Jnb1y8L1NLZK0m/QxKOElOeksrV8sr7y5ac0fQuGdnZVqcalGrCU7QU6c1llF3s02r6Ly1seTw0bJuMNbtJvT0XsbnC8TFa5nGV94u0ovmZl9Ps1NJZXT7NaXYvEvMnQotRaXzpKei1j3dtedtmUcf2PqQi3U/hqabkleo1md0tNFrdpepflxBtPNXqyvq4/Fmv30M3E1k5X1vvZtybbteUr/ehHkkTcV6tfo8VThUhNtqzvpFyzXT8/ctYyqru273sdeKpZ88Lt3aau36r75FFwlKVlq2loufjctU57KHWMpG/wBmMJnqKTbSj3rdWrc+h7dmB2apZbx/KtXr80n+yRvM19pPGM+5kbunV49iAYRWdRyEAyEYwAALFYABgCwDAgrCwMYEIAgETggoVDIkQGQyFQUADIKFQyEMZDIRDoRJDIZCouYHh9Sq7Qi2uctorzZCqUrLJzLp4RWR2oYeU3lhByfRK56rAdmYRs6rzy/Ku7Ffuzcp04wWWEVFdErHDqb1LqVk7dPZN908Hk8J2aqS1nJQXT5pey0+puYTgdGC1hnf5p976bI0py6HFyfM4719S/Lx9jrjQ048Lv6nku3/ABF06cKFO0VO90tO6t7Jea9z5ZiIXTXJ8+nie5/xITWIpSb7rpSS84z73/KJ4qtG6ZzZxR14zBQwV0prNq2orpz1v6fU6Twrl8j76V3JN6p81fd8/A4OWWTkk27NNeu/1YIYyUWsys773tfR29P7eJJ99lSfHouYSnVdrzkotv8AFo1rqm+ZYxM0pqK703fW26tpp6PQ5rHLLJppd2Orbfp5v9yt8dqaqW71pW89Vt5WEo7yTd9YDjNYuSskk5LbVNWS+m36HPA0koqbvm1UeWr1d+v/AMHhezz2Ue7pdtvn7rRW8jqnma0eVaRT1svF9epY3hFcrLPV9n8O40s7T78pSTa3tp663NI3Oxbp4jCfAnD/AEZOm+TTklUUk/HOTiXZ6cLyp9+HT8S9OfoaG33M8VL6Zn7nbVydLtGGBhYGdxxAAyEYxAYoQMYAAQgAADCKxkSEIQAK7QUPiI2kIiSeUQawxgoVDIACh0Ija4FwZ1mpz7tJO1+c7cl/cr1NSdNcq8FmnFXXGTJRfwXC61T5Kbt+ZrLH3Z7nC8IoU7OFON/zPvP3ZdTM+9//AIL9mjGwS+Z/o87w3stGNpVpZn+RaR9Xuz0dOnGKUYpKK2SVkgpkucN6l6jzTOyNOIWEsCykIhmhSI2xhJoYACPJ9vOFutQjUgr1KLc7c3Brvpeyf9J8zqQPuko8uZ857W9mnScq1GLdJ96UEv8ATb3aX5P08iu59UXaVL5WfO8ZHX9jPnO7V973vbTy8eps4mjcpTwDeyIzZZUZOMa61jN8kr2vs3t9+VtzrCortwg+Vm3fbS+XqcPgOLs167lmlB8l9CbsqUdkjFuzfkvA0cPG5UjTZpYCm3JRim5SeVRSu23ySK+WWWqUj6R/h1BqFaXJzpwXjlgr/wDJHtMz9DK7P4H4FGFL8aWeb/3y3Xpt6GsWJddlVVl9GZxLgtOteS7lT8yW/wDMuZ5DiPDp0ZWnHTlNaxl6n0FMFWnGacJxTi901e506O5vT6faOXW286nfhnzJgZ6Xi3ZuUbzod6O+R/MvJ8zzc1bRrVaW2sa2lqzqLMszdTSqHhoRgYRWWlRAEuC4wIBkuBsCJCEIMeCu3fcKEuMhlY6CKixgsM6k1CPPd8kubYqpSsslMumki/wThTrT72lOPzS6/wC1eJ7eEVFKMUlFJJJckVMBSjCChDSK+r5t+JaUjD3Gu9Wvp6GzoaK0px6+pbhK6GTOFKR1uc+C/J0uEQYYgitBSCACWJFDBAAZRZQT+9xggB43jnYmlVbnQap1OcGu5J+CXyemngeNxvZrE0r5qE2l+KEXUi/WN/qfYrffP3Fa+7f2K60pZbOs568nwl4WV+9Ta8JQa/U70uGzlpCnOT6RhKX0SPtzl4r3An4/Uj8H6k/j/Q+TYDsXiajTnBUoc5Tdn6QXev7HuuAdmqWG1gs9TZ1pLVdVBfhX18TeyX6v6I6xh19lsTmFJVV1Rzgrfe51TJJARJkURkuFoAYGPFmZxbgkKyv8lT86W/8AMuZpDXHNVDzLwwqZpYpZR864jwmrR+eF4/njrH/r1M1s+q76NXXQ832j4DFwlVpRyzjeUopaTXOy5M0dDe5am1+TP1tnhOof4PGNgzCti3NIzx8wcxyuS4AdbkOdyABxGQtwomQHPScBoqMM73l+i2PNwV2l1sj1mGdkorZWj7Gfv7xKn3/4d+xjLdexsUHoWIyKVKWh3UjJNItZixFlBTLsHoAHWIbixZEwAchLguABIS5AAIES4LgAyAS5GABYLEQQAgLkA2AEuS5LgAB4sWSsLca99BEgXDcVvwA2MDopElJWOQtSVkLAJnz3tDw/4FVpL/Ll34Pwe69H+xk3PoHabB/GoNpf5kO/Hxt8y9j562be01fiR35XTMjdafC+vD7DcmYW4Mx14ObJ1zBOdyCwBxUxlMhCZUWuH6zXRd72PQ4WpqEhkb/+RfY1tl8n5NalO6OimQhwHYdc2hcw0+6QggOsp28x4shAGMpEUiEACOQcxCABLkbIQADclyEAAXDmIQAA5EIQAJmFciEACXFlMhAGyZ7gciEAQMxXxNTVIhBgLCofN+K0Ph1Z01tGTt5PVfRkId2w+d/Y4958i+5SzEzEIa5mDZwkIAH/2Q=="
const linkSrc = "https://www.svgrepo.com/show/355649/discount-solid.svg"

export default () => {
    const [theme, setTheme] = React.useState()
    window.switchTheme = () => setTheme(theme => theme ? null : "light")

    return <App theme={theme} />
}

const App = (props) =>
    <div className={`qq container ${props.theme}`}>
        <header>
            <span>📢</span>
            <span>🎙</span>
            <span style={{ fontFamily: "serif" }}>支</span>
            <span className="spead"><sup>0.3</sup><sub>K/S</sub></span>
            <i className="split"></i>
            <span >🅱️</span>
            <span >12:20</span>
        </header>
        <section className="sec1">
            <figure className="avator">
                <img src={avatorSrc} alt="" />
                <figcaption></figcaption>
            </figure>
            <div className="nickname">
                <h2>Aniki</h2>
                <small> <i className="green-dot"></i> 手机在线-WIFI&gt;</small>
            </div>
            <i className="split"></i>
            <span>🌐</span>
            <span>✝</span>
        </section>
        <main>
            <section className="search">
                <input type="text" placeholder="🔎搜索" />
            </section>
            <section className="message">
                {Array.from({ length: 30 }).map((it, key) =>
                    <article key={key} className="row-flex">
                        <img src={gentooImgSrc} alt="" />
                        <div className="middle">
                            <h6>LFS/Gentoo/Arch</h6>
                            <div>Kernel About 为什么不买外星人呢</div>
                        </div>
                        <aside className="right col-flex">
                            <time>12:00</time>
                            <div className="message-count">20+</div>
                        </aside>
                    </article>
                )}
            </section>
        </main>
        <footer className="row-flex">
            {Array.from({ length: 3 }).map((it, key) =>
                <figure key={key}>
                    <img src={linkSrc} alt="" />
                    <figcaption>消息</figcaption>
                    <div className="message-count">99+</div>
                </figure>
            )}
        </footer>
    </div>