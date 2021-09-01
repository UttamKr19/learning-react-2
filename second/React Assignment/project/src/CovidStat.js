import { useEffect, useState } from "react";
import axios from "axios";
import React from 'react'
import 'jquery/dist/jquery.min.js';
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import { MDBContainer } from "mdbreact";
import { Line } from "react-chartjs-2";
import { Bar } from 'react-chartjs-2';


export default function CovidStat() {

    const [covidData, setCovidData] = useState([]);
    const [tableContent, setTableContent] = useState();
    const [graphContent, setGraphContent] = useState();
    const [tableShow, setTableShow] = useState('block')
    const [graphShow, setGraphShow] = useState('none')

    useEffect(() => {
        axios.get('https://api.covid19api.com/summary').then((res) => {
            setCovidData(res.data.Countries);

        }).catch(error => { console.log(error) })

    }, [])


    function max() {
        let maxNew = 0;
        let maxIdTemp;
        covidData.map(obj => {
            if (obj.TotalConfirmed > maxNew) {
                maxNew = obj.TotalConfirmed;
                maxIdTemp = obj.ID;
            }
        })

        let tableDataMax = covidData.map(obj => {
            if (maxIdTemp === obj.ID) {
                return (
                    <tr key={obj.ID}>
                        <td>{obj.Country}</td>
                        <td>{obj.TotalConfirmed}</td>
                        <td>{obj.TotalDeaths}</td>
                        <td>{obj.TotalConfirmed - obj.TotalRecovered - obj.TotalDeaths}</td>
                        <td>{obj.TotalRecovered}</td>
                        <td>{obj.NewConfirmed}</td>
                        <td>{obj.NewDeaths}</td>
                        <td>{obj.NewRecovered}</td>
                    </tr>

                )
            }

        })

        setTableShow('block');
        setGraphShow('none');
        setTableContent(tableDataMax);
    }

    function zero() {
        let tableDataZero = covidData.map(obj => {
            if (obj.NewConfirmed === 0) {
                return (

                    <tr key={obj.ID}>
                        <td>{obj.Country}</td>
                        <td>{obj.TotalConfirmed}</td>
                        <td>{obj.TotalDeaths}</td>
                        <td>{obj.TotalConfirmed - obj.TotalRecovered - obj.TotalDeaths}</td>
                        <td>{obj.TotalRecovered}</td>
                        <td>{obj.NewConfirmed}</td>
                        <td>{obj.NewDeaths}</td>
                        <td>{obj.NewRecovered}</td>
                    </tr>

                )
            }

        })

        setTableShow('block');
        setGraphShow('none');
        setTableContent(tableDataZero);

    }

    function all() {
        let tableDataAll = covidData.map(obj => {
            return (

                <tr key={obj.ID}>
                    <td>{obj.Country}</td>
                    <td>{obj.TotalConfirmed}</td>
                    <td>{obj.TotalDeaths}</td>
                    <td>{obj.TotalConfirmed - obj.TotalRecovered - obj.TotalDeaths}</td>
                    <td>{obj.TotalRecovered}</td>
                    <td>{obj.NewConfirmed}</td>
                    <td>{obj.NewDeaths}</td>
                    <td>{obj.NewRecovered}</td>
                </tr>

            )
        })

        setTableShow('block');
        setGraphShow('none');
        setTableContent(tableDataAll);

    }

    function bestRecovery() {

        let best = Number.MIN_VALUE;
        let bestIdTemp;
        covidData.map(obj => {
            if (obj.TotalRecovered / obj.TotalConfirmed > best) {
                best = obj.TotalRecovered / obj.TotalConfirmed;
                bestIdTemp = obj.ID;
            }
        })

        let tableDataBest = covidData.map(obj => {
            if (bestIdTemp === obj.ID) {
                return (
                    <tr key={obj.ID}>
                        <td>{obj.Country}</td>
                        <td>{obj.TotalConfirmed}</td>
                        <td>{obj.TotalDeaths}</td>
                        <td>{obj.TotalConfirmed - obj.TotalRecovered - obj.TotalDeaths}</td>
                        <td>{obj.TotalRecovered}</td>
                        <td>{obj.NewConfirmed}</td>
                        <td>{obj.NewDeaths}</td>
                        <td>{obj.NewRecovered}</td>
                    </tr>

                )
            }

        })

        setTableShow('block');
        setGraphShow('none');
        setTableContent(tableDataBest);

    }

    function graph() {

        let countryList = [];
        let totalConfirmedList = [];
        let totalDeathsList = [];

        covidData.map((item) => {
            countryList.push(item.Country);
            totalConfirmedList.push(item.TotalConfirmed);
            totalDeathsList.push(item.TotalDeaths);
        })
        countryList = countryList.slice(0, 20);
        totalConfirmedList = totalConfirmedList.slice(0, 20);
        totalDeathsList = totalDeathsList.slice(0, 20);

        // console.log(countryList);
        // console.log(totalConfirmedList);

        const graphState = {
            labels: countryList,
            datasets: [
                {
                    label: 'Total Confirmed',
                    backgroundColor: 'rgba(75,192,192,1)',
                    borderColor: 'rgba(0,0,0,1)',
                    borderWidth: 2,
                    data: totalConfirmedList
                },
                {
                    label: 'Total Deaths',
                    backgroundColor: 'red',
                    borderColor: 'rgba(0,0,0,1)',
                    borderWidth: 2,
                    data: totalDeathsList
                }
            ]
        }

        const graphData =
            <div>
                <Bar
                    data={graphState}
                    options={{
                        title: {
                            display: true,
                            text: 'Covid data',
                            fontSize: 20
                        },
                        legend: {
                            display: true,
                            position: 'right'
                        }
                    }}
                />

            </div>


        setGraphShow('block');
        setTableShow('none')
        setGraphContent(graphData);

    }

    return (
        <div>
            <div>
                <button className="btn btn-info btn-lg" onClick={all}>All</button>
                <button className="btn btn-warning btn-lg" onClick={max}>Max</button>
                <button className="btn btn-success btn-lg" onClick={zero}>Zero</button>
                <button className="btn btn-dark btn-lg" onClick={bestRecovery}>Best</button>
                <button className="btn btn-danger btn-lg" onClick={graph}>Graph</button>
            </div>

            <div id="myTable" style={{ display: tableShow }}>
                <table className="table table-striped table-hover text-left">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Country</th>
                            <th scope="col">Total Confirmed</th>
                            <th scope="col">Total Deaths</th>
                            <th scope="col">Total Active</th>
                            <th scope="col">Total Recovered</th>
                            <th scope="col">New Confirmed</th>
                            <th scope="col">New Deaths</th>
                            <th scope="col">New Recovered</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableContent}
                    </tbody>
                </table>
            </div>


            <div id="myGraph" style={{ display: graphShow }}>
                {graphContent}
            </div>


        </div>
    )
}
