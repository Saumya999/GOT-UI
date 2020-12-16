import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import axios from 'axios';
//import './autosuggest.css';
import {BASE_URL} from '../../../src/config/Enviroment';
import { LIST_ENDPOINT } from '../../../src/config/Endpoints';
import SmallOutlinedChips from './chipSuggestions';
class AutosuggestionSearch extends Component {
    constructor() {
        super();
        this.state = {
            value: '',
            suggestions: [],
            results:[]
        };
    }
    
    
    componentDidMount() {
        axios.get(`${BASE_URL}${LIST_ENDPOINT}`)
      .then(({ data }) => {
        this.setState({
          results: data.response
        })
      })
    }

    getSuggestions = value => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;
        const result = this.state.results;
        return inputLength === 0 ? [] : result.filter(lang =>
            lang.toLowerCase().slice(0, inputLength) === inputValue
        );
    };

   
    getSuggestionValue = suggestion => suggestion;

    renderSuggestion = suggestion => (
        <SmallOutlinedChips suggestion={suggestion}
            handleClick={this.onchange}/>
    );

    
    onChange = (event, { newValue }) => {
        this.setState({
            value: newValue
        });
    };

    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: this.getSuggestions(value)
        });
    };

  
    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    render() {
        const { value, suggestions } = this.state;

        const inputProps = {
            placeholder: 'Enter Battel Field Location',
            value,
            onChange: this.onChange
        };

        return (
            <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={this.getSuggestionValue}
                renderSuggestion={this.renderSuggestion}
                inputProps={inputProps}
            />
        );
    }
}

export default AutosuggestionSearch;