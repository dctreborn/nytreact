//main page
//search open by default
//results populate on search
//save button to save articles
//open saved articles pane on button click

var React = require("react");
var Link = require("react-router").Link;

//main
var Main = React.createClass({
    // add form states
    
    render: function() {
        return (
            <div className="container">
                <div className="jumbotron text-center">
                    <h1>New York Times Article Scrubber</h1>
                    <p>Search for and annotate articles of interest!</p>
                    <Link to="/search"><button className="btn btn-default">Search</button></Link>
                    <Link to="/results"><button className="btn btn-default">Results</button></Link>                    
                    <Link to="/saved"><button className="btn btn-default">Saved Articles</button></Link>
                </div>
                {/*{this.props.children}*/}
            </div>
         );
    }
});

module.exports = Main;