import React, { Component } from 'react';
import List from './List';
import Sidebar from './Sidebar';
import tickets from './tickets.json'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valueOne: false,
            valueTwo: false,
            valueThree: false,
            all: false,
            nonStops: false,
            filter: [],
            course: 1
        }
    }

    handleClick = e => {
        this.setState({
            course: e.target.value
        })
    }

    handleChange = e => {
        const { name, checked, value } = e;
        const { filter, valueOne, valueTwo, valueThree, nonStops, all } = this.state;
        if (name === 'all' && !checked) {
            let result = [];
            if (nonStops) {
                result.push('0')
            }
            if (valueOne) {
                result.push('1')
            }
            if (valueTwo) {
                result.push('2')
            }
            if (valueThree) {
                result.push('3')
            }
            this.setState({
                [name]: checked,
                filter: [...result]
            })
        } else if (name === "all") {
            this.setState({
                [name]: checked,
                filter: ['0', '1', '2', '3']
            })
        } else {
            let index = filter.indexOf(value)
            if (all) {
                this.setState({
                    [name]: checked
                })
            } else {
                this.setState({
                    [name]: checked,
                    filter: index === -1 ? [...filter, value] : filter.filter(item => item !== value)
                })
            }
        }

    }

    handleSubmit = e => {
        e.preventDefault()
    }

    render() {
        const { valueOne, valueTwo, valueThree, all, nonStops, filter, course } = this.state
        console.log(all)
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-3">
                        <Sidebar
                            handleSubmit={this.handleSubmit}
                            handleClick={this.handleClick}
                            onChange={this.handleChange}
                            valueOne={valueOne}
                            valueTwo={valueTwo}
                            valueThree={valueThree}
                            all={all}
                            nonStops={nonStops}

                        />
                    </div>
                    <div className="col-9">
                        <List filter={filter} tickets={tickets.tickets} course={course} />
                    </div>
                </div>
            </div>
        )
    }
}

export default App;