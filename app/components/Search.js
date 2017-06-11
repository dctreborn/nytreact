//search pane with searchable parameters
var React = require("react");

var Search = React.createClass({
    getInitialState: function(){
        return {
            term: ""
        };
    },
    //respond to user input
    handleChange: function(event){
        this.setState({
            term: event.target.value
        });
    },

    handleSubmit: function(event){
        event.preventDefault();

        // Set the parent to have the search term
        this.props.setSearch(this.state.term);
        this.setState({ term: "" });
    },

    render: function(){
        return(
            <div className="row">
                <div className="panel panel-default text-center">
                    <div className="panel-heading">
                        <div className="panel-title">Search</div>                        
                    </div>
                    <div className="panel-body">
                        {/*topics*/}
                        {/*start year*/}
                        {/*end year*/}

                        <form role="form" onSubmit={this.handleSubmit}>
                        
                            <div className="form-group">
                                <label>Search Term:</label>
                                <input value={this.state.term}
                                type="text"
                                className="form-control text-center"
                                id="term"
                                onChange={this.handleChange}
                                required/>
                            </div>
                    
                            <button type="submit" className="btn btn-default">Search</button>

                        </form>
	
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Search;