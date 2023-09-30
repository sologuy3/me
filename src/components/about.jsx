import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-about" data-section="about">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                                    <div className="col-md-12">
                                        <div className="about-desc">
                                            <span className="heading-meta">About Us</span>
                                            <h2 className="colorlib-heading">Who Am I?</h2>
                                            <p>Hello its me Yohan beep boop </p>                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="colorlib-about">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <span className="heading-meta">What I do?</span>
                                <h2 className="colorlib-heading">Here are some of my expertise</h2>
                            </div>
                        </div>
                        <div className="row row-pt-md">
                            <AOE_generate aoe={aoe_content} />
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

const aoe_content = [{
    head: "Web Development",
    text: "I have experience building websites and chrome extentions using JavaScript,React,HTML,CSS",
    icon: "icon-support",
    color: "services color-2"
}, {
    head: "Web Development",
    text: "I have experience building websites and chrome extentions using JavaScript,React,HTML,CSS",
    icon: "icon-bulb",
    color: "services color-1"
}]

function AOE_generate({ aoe }) {
    const boxes = []
    aoe.forEach(contentbox => {
        boxes.push(
            <AoEBox content={contentbox} />
        )
    });

    return (
        <div>{boxes}</div>
    )
}

function AoEBox({ content }) {
    return (
        <div className="col-md-4 text-center animate-box">
            <div className={content.color}>
                <span className="icon">
                    <i className={content.icon} />
                </span>
                <div className="desc">
                    <h3>{content.head}</h3>
                    <p>{content.text}</p>
                </div>
            </div>
        </div>);
}