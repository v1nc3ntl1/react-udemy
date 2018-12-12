import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    onChange = (event) => {
        this.setState({ term: event.target.value });
    };

    onSubmit = event => {
        event.preventDefault();

        this.props.onFormSubmit(this.state.term);
    };

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={this.onChange} />
                    </div>

                </form>
            </div>
        )
    }
}

export default SearchBar;