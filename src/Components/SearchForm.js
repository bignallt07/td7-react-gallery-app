// Imports - Note: Addition of withRouter to provide history on props
import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

/**
 * SearchForm Component 
 * @returns - rendering and functionality of the search component
 */
class SearchForm extends Component {

    state = {
        searchValue: '',
    }

    /**
     * handleSubmit Function
     * Description: Handles the search function on submit. Function does 3 main things:
     *              1. Listens to the search box, and updates state with the value entered
     *              2. Pushs a new URL (redirect) to the history to enable browser navigation
     *              3. Runs a new search passed through props using the searched word
     * @param {event} e - Keyword
     * @returns {state update, function call} - See notes above
     */
    handleSubmit = (e) => {
        e.preventDefault();
        let input = e.target.firstElementChild;
        let word = input.value;
        this.setState({
            searchValue: word
        })
        let redirect = `/search/${word}`;
        this.props.history.push(redirect);
        input.value = "";
        this.props.search(this.state.searchValue);
        this.props.loading(true);
    }

    /**
     * inputChanges
     * @param {*} e
     * @returns {string} - updates state with the event value 
     */
    inputChanges = (e) => {
        this.setState({ searchValue: e.target.value });
    }

    render() {
        return (
            <form className="search-form" onSubmit={this.handleSubmit}>
                <input type="search" onChange={this.inputChanges} name="search" placeholder="Search" required/>
                <button type="submit" className="search-button">
                <svg fill="#fff" height="24" viewBox="0 0 23 23" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                    <path d="M0 0h24v24H0z" fill="none"/>
                </svg>
                </button>
            </form>
        );
    }
}

export default withRouter(SearchForm);




