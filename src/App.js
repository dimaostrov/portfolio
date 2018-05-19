import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Tachyons from "tachyons";
import { CSSTransitionGroup } from "react-transition-group";

class App extends Component {
  render() {
    return (
      <div className="">
        <Header />
        <Main />
      </div>
    );
  }
}

const Header = () => (
  <nav className="pa3 pa4-ns">
  <a className="link dim black b f1 f-headline-ns tc db mb3 mb4-ns" href="#" title="Home">Site Name</a>
  <div className="tc pb3">
    <a className="link dim gray f6 f5-ns dib mr3" href="#" title="Home">Home</a>
    <a className="link dim gray f6 f5-ns dib mr3" href="#" title="About">About</a>
    <a className="link dim gray f6 f5-ns dib mr3" href="#" title="Store">Store</a>
    <a className="link dim gray f6 f5-ns dib" href="#" title="Contact">Contact</a>
  </div>
</nav>
);

const Main = () =>
<div class="cf pa3 pa4-m pa5-l mw9 center gradient-lily">
  <div class="fr w-100 w-80-l">
    <p class="f6">
      Beitrage zut
    </p>
    <h1 class="f2 f1-l lh-title mt0 mb4 mb5-ns">
      Kunst<br class="dn db-ns" />> des 19. und 20.Jahrhunderts
    </h1>
  </div>
  <div class="f6 lh-copy fl w-100 mb4">
    <div class="fl-ns w-100 w-20-l pr3-m pr5-l">
      <p>
        Jahrbuch <small class="fw6">1968/69</small>
      </p> 
    </div>
    <div class="fl-ns w-50-m w-20-l pr3-m pr5-l">
      <p>
        Institut suisse pour l'étude de l'art
      </p> 
    </div>
    <div class="fl-ns w-50-m w-20-l pr3-m pr5-l">
      <p>
        Schweizerisches<br class="dn db-l"/>> Institut für Kunstwissenschaft
      </p> 
    </div>
    <div class="fl-ns w-50-m w-20-l pr3-m pr5-l">
      <p>
        Istituto svizzero di studi d'arte
      </p>
    </div>
    <div class="fl-ns w-50-m w-20-l pr3-m pr5-l">
      <p>
        Swiss Institute for Art Research
      </p>
    </div>
  </div>
</div>


const Animation = ({children}) => (
  <CSSTransitionGroup
    transitionName="example"
    transitionEnterTimeout={500}
    transitionLeaveTimeout={300}
  >
    {children}
  </CSSTransitionGroup>
);

export default App;
