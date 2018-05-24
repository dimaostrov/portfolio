import React from "react";

const Contact = () => (
  <div>
    <Main />
  </div>
);

const Main = () => (
  <div class="cf pa3 pa4-m pa5-l mw9 center gradient-lily">
    <div class="fr w-100 w-80-l">
      <p class="f6">social links</p>
    </div>
    <div class="flex justify-between f1 lh-copy fl w-100 mb4">
      <a className="link black" href="https://www.facebook.com/dima.ostrovskiy?ref=bookmarks">
        <i className="fab fa-facebook" />
      </a>
      <a className="link black" href="https://github.com/dimaostrov">
        <i className="fab fa-github" />
      </a>
      <a className="link black" href="https://www.linkedin.com/in/dima-ostrov/">
        <i className="fab fa-linkedin-in" />
      </a>
      <a className="link black" href="https://stackoverflow.com/users/9411028/dmitriy-ostrovskiy">
        <i className="fab fa-stack-overflow" />
      </a>
      <a className="link black" href="mailto:dmtrostrovskiy@gmail.com">
        <i className="fas fa-envelope" />
      </a>
    </div>
  </div>
);

export default Contact;
