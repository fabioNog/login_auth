import React, { Component } from 'react'


export default class Main extends Component {

    constructor(props){
        super(props);
        /* this.handleImage = this.handleImage.bind(this); */

       const  handleImage = event => {
            return console.log("Teste");
        };
    }
    render() {
        const mystyle = {
            paddingTop: "50%!important",
            width: "50%!important"
          };
        return (
            <div className="slider-area ">
            <div className="slider-active">
                <div className="single-slider slider-height d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-7 col-lg-7 col-md-8">
                                <div className="hero__caption">
                                    <span data-animation="fadeInUp" data-delay=".4s" className="tituloHome">Desenvolvemos com muito amor 
                                    <i className="fas fa-heart" style={{paddingLeft: "10px"}}></i>
                                    <i className="fas fa-desktop" style={{paddingLeft: "10px"}}></i>
                                    </span>
                                    <h1 data-animation="fadeInUp" data-delay=".6s">Alavancamos o seu Negócio!</h1>
                                    <div className="hero__btn">
                                        <a href="industries.html" className="btn hero-btn"  data-animation="fadeInLeft" data-delay=".8s">Meu Portfolio</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hero-man flip-container " id="shake">
                        <img 
                            className="imgHome flipper"
                            src="assets/img/fabio/fabio4.jpg"
                            style={mystyle}
                            onClick={this.handleImage}                            
                        />
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
