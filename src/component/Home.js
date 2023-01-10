import React from 'react'
import HeroImg from '../assets/img/pngwing.png'
import Fade from 'react-reveal/Fade';
import '../App.css'

export default function Hero() {
    return (
        <section className="pt-0 hero" id="home">
            <div className="wave-container">
                <div className="container">                
                <div className="row align-item-center" style={{ width: "360" }}>
                    <Fade right delay={300}>
                        <div className="col-auto pr-5">
                            <h1 className="font-weight-bold my-5">
                                NEON CODE TEAM
                            </h1>
                            <p className="mb-5 text-hero font-weight-light text-gray w-80 mt-3">
                                Providing Satisfying Service <br />
                                with style and charm <br />
                                Please create your website here. 
                            </p>
                            <button className="btn btn-shop btn-primary" >
                                Shop Now
                            </button>
                            <div className="row  icons-hero mt-100">
                                <div className="col-auto icons">
                                    <i className="far fa-paper-plane icon"></i>
                                    <h6 className="mt-3">
                                        Best Price <br />
                                        <span className="text-gray-500 font-weight-light">
                                            Guaranteed
                                    </span>
                                    </h6>
                                </div>
                                <div className="col-auto icons">
                                    <i className="fas fa-tag"></i>
                                    <h6 className="mt-3">
                                        100% Secure <br />
                                        <span className="text-gray-500 font-weight-light">
                                            Payment online
                                    </span>
                                    </h6>
                                </div>
                                <div className="col-auto icons">
                                    <i className="fas fa-undo-alt"></i>
                                    <h6 className="mt-3">
                                        Free revision <br />
                                        <span className="text-gray-500 font-weight-light">
                                            Within 2x
                                    </span>
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </Fade>
                    <div className="col-1 offset-md-2 pl-0 hero-img">
                        <Fade bottom delay={350}>
                            <div >
                                <img src={HeroImg} alt="my-hero" height={560}/>
                            </div>
                        </Fade>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}