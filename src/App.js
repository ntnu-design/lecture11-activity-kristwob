import "./App.css";
import CoffeeButton from "./components/CoffeeButton";
import CoffeeControl from "./components/CoffeeControl";
import CoffeeInfo from "./components/CoffeeInfo";
import Thermos from "./components/Thermos";
import CoffeeDisplay from "./components/CoffeeDisplay";

import React, { Component } from "react";
const coffee = { brewedAt: "2022-02-28T09:17:57.652Z", litersBrewed: "1.5", coffeeBrand: "Evergood classic", rating: 4 };

export default class App extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      ...coffee,
      onClick: this.handleClick,
    };
  }

  handleClick(newLiters) {
    //console.log("Hello")
    //console.log(newLiters)
    this.setState((prev) => {
      return {
        litersBrewed: newLiters,
        ...prev.onClick,
      };
    });
  }

  render() {
    return (
      <div className="App">
        <header></header>
        <main>
          <div id="examples">
            <h1>Examples</h1>
            <Thermos {...this.state} />

            <Thermos {...this.state} className="neumorphism-card" />

            <CoffeeInfo {...this.state} />

            <CoffeeButton />

            <CoffeeButton litersToBrew="1.1" />

            <CoffeeButton litersToBrew="0.5" />

            <CoffeeButton litersToBrew="3.1" />
          </div>

          <span>This is Thermos and CoffeeInfo</span>
          <section id="top-container" className="container neumorphism-card">
            <Thermos {...this.state} />
            <CoffeeInfo {...this.state} />
          </section>

          <span>This is Thermos and CoffeeButtons (individual components)</span>
          <section id="prepare-coffee-container" className="container neumorphism-card">
            <Thermos {...this.state} />

            <div className="flex-columns">
              <CoffeeButton litersToBrew="2.1" />

              <CoffeeButton litersToBrew="1.1" />

              <CoffeeButton litersToBrew="0.5" />
            </div>
          </section>

          <span>This is CoffeeControl (composition: Thermos and CoffeeButton(s)))</span>
          <section>
            <CoffeeControl {...this.state} />
          </section>

          <span>This is CoffeeDisplay (composition: Thermos, CoffeeInfo and CoffeeRecipe)</span>
          <section>
            <CoffeeDisplay {...this.state} />
          </section>
        </main>
      </div>
    );
  }
}
