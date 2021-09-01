import './App.css';
import CovidStat from './CovidStat';
import MealFooter from './Meal/MealFooter';
import MealHeader from './Meal/MealHeader';
import MealHome from './Meal/MealHome';


import ProFeature from './HOC/ProFeature';
import React, { Component } from 'react'
import SortedList from './HOC/SortedList';
import GeneralList from './HOC/GeneralList';
import Temp, { GradConverter } from './Temperature/Temp'
import Calculator from './Temperature/Calculator';
import TemperatureConverter from './Temperature/TemperatureConverter';
import DisplayText from './DisplayText';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: ["Zoe", "Bob", "Alice", "Dora", "Joe"],
      cities: ["London", "New York", "Paris", "Milan", "Boston"],
      proMode: false
    }
  }
  toggleProMode = () => {
    this.setState({ proMode: !this.state.proMode });
  }
  render() {

    return (
      <div>

        <MealHeader />
        <MealFooter />
        {/* <CovidStat/> */}
        {/* <TemperatureConverter/> */}
      </div>
    )
  }
}
