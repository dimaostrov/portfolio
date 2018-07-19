import React from 'react'

const Home = () => 
<div><Main /></div>

const Main = () => (
  <div class="cf pa3 pa4-m pa5-l mw9 center gradient-lily">
    <div class="fr w-100 w-80-l">
      <p class="f6">full-stack</p>
      <h1 class="f2 f1-l lh-title mt0 mb4 mb5-ns">
        JS Developer
      </h1>
    </div>
    <div class="f6 lh-copy fl w-100 mb4">
      <div class="fl-ns w-100 w-20-l pr3-m pr5-l">
        <p className="ttu b">
          Node.js
        </p>
      </div>
      <div class="fl-ns w-50-m w-20-l pr3-m pr5-l">
        <p className="ttu b">React</p>
      </div>
      <div class="fl-ns w-50-m w-20-l pr3-m pr5-l">
        <p className="ttu b">
          Express
        </p>
      </div>
      <div class="fl-ns w-50-m w-20-l pr3-m pr5-l ttu b">
        Custom CSS Components
      </div>
      <div class="fl-ns w-50-m w-20-l pr3-m pr5-l ttu b">
        Mysql
      </div>
    </div>
  </div>
);

export default Home;