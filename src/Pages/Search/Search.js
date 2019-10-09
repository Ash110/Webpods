import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Input,Button,Icon } from 'semantic-ui-react';

import './Search.css';
import { EventEmitter } from 'events';

class Search extends React.Component {
    state={
        searchText:""
    }
    render() {
        return (
            <div>
                <div className="backg"></div>
                <div className="searchContainer">
                    <p className="searchText">Search for a podcast</p>
                    <Input
                        placeholder='Search for a podcast'
                        className="searchBar"
                        onChange={(e)=>{this.setState({'searchText': e.target.value})}}
                    />
                    <br/>
                    <br />
                    <Button animated className="searchBtn" color="green">
                        <Button.Content visible>Search</Button.Content>
                        <Button.Content hidden>
                            <Icon name='search' />
                        </Button.Content>
                    </Button>
                    <br/>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                </div>
            </div>
        )
    }
}

export default Search;