import React, { Component } from 'react'
import ActionButton from './ActionButton';
import GeneralList from './GeneralList';

export default class SortedList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sort: false
        }
    }

    getList() {
        return this.state.sort ? [...this.props.list].sort() : this.props.list;
    }


    toggleSort = () => {
        this.setState({ sort: !this.state.sort });
    }

    render() {
        return (
            <div>
                <GeneralList list={this.getList()} theme="danger" />
                <div className="text-center m-2">
                    <ActionButton theme="outline-info" text="sort" 
                    callback={this.toggleSort}/>
                </div>

            </div>
        )
    }
}
