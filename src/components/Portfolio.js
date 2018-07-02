import React from 'react'

import bamazon from '../images/bamazon.png';
import aframe from '../images/aframe.png';
import giffer from '../images/giffer.png';
import liri from '../images/liri.png';
import guessword from '../images/guessword.png';
import faceSquared from '../images/faceSquared.png';

const Portfolio = () => 
<div>
  <Main>
    <Article image={faceSquared} title="FaceSquared" description="A face recognition software that allows you to hook up your home IP camera or NVR to analyze all motion sensitive streams" link="https://pure-sea-66381.herokuapp.com" />
    <Article image={aframe} title="Aframe Cryptocurrency example" description="Just messin round with a-frame" link='https://github.com/dimaostrov/aframe-example' />
    <Article image={bamazon} title='Bamazon' description="Cli app to interface with an inventory in MySql" link='https://github.com/dimaostrov/bamazon'/>
    <Article image={liri} title='LIRI NODE APP' description="a beginners Siri like app that has functionality to look up various movie/music APIs." link='https://github.com/dimaostrov/liri-node-app' />
    <Article image={guessword} title='Word Guesser' description='Hangman style cli implementation' link='https://github.com/dimaostrov/word_guesser' />
    <Article image={giffer} title="Giffer" description="Using giphy API to pull gifs" link="https://github.com/dimaostrov/giphy-api" />
  </Main>
</div>

const Main = props => (
  <div className="cf pa3 pa4-m pa5-l mw9 center gradient-lily">
    <div className="fr w-100 w-80-l">
      <p className="f6">full-stack js developer</p>
      <h1 className="f2 f1-l lh-title mt0 mb4 mb5-ns">
        Specializing in front end development
      </h1>
    </div>
    <div className="f6 fl w-100 mb4">
      {props.children}
    </div>
  </div>
);

const Article = ({image, title, description, link}) =>
<article className="bb b--black-10">
    <a className="db pv4 ph3 ph0-l no-underline black dim" href={link}>
      <div className="flex flex-column flex-row-ns">
        <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
          <img src={image} className="db" alt=""/>
        </div>
        <div className="w-100 w-60-ns pl3-ns">
          <h1 className="f3 fw1 baskerville mt0 lh-title">{title}</h1>
          <p className="f6 f5-l lh-copy">
            {description}
          </p>
        </div>
      </div>
    </a>
  </article>


export default Portfolio;