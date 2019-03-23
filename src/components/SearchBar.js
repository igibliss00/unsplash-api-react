import React from 'react';

class SearchBar extends React.Component {
    state = {
        term: ''
    }
    
    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.term)
    }

    onChange = (e) => {
        this.setState({
            term: e.target.value  
        })
    }
    render() {
        return (
            <div className="ul segment">
                <form onSubmit={this.onFormSubmit} className='ui form'>
                    <div className="field">
                        <label htmlFor="imageSearch">Image Search</label>
                        <input 
                            value={this.state.term} 
                            onChange={this.onChange} 
                            type="text" 
                            id='imageSearch'/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;