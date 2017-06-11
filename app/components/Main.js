//main page
//search open by default
//results populate on search
//save button to save articles
//open saved articles pane on button click

var React = require("react");
var Link = require("react-router").Link;
var Search = require("./Search");
var Results = require("./Results");
var Saved = require("./Saved");
var query = require("./Query");

//main
var Main = React.createClass({
    getInitialState: function(){
        return {
            searchTerm: "",
            result: "",            
        }
    },

    componentDidUpdate: function(){
        console.log("component did update");
        query.runQuery(this.state.searchTerm).then(function(data){

            let results = [];
            data.forEach(function(element) {
                let obj = {};
                obj.title = element.headline.main;
                obj.url = element.web_url;
                obj.date = element.pub_date;
                results.push(obj);
            });
            console.log("result array");
            console.log(results);
            this.setState({result: results});
        }.bind(this));
    },

    setSearch: function(searchTerm){
        this.setState({
            searchTerm: searchTerm 
        });
    },

    // add form states    
    render: function() {
        return (
            <div className="container">
                <div className="jumbotron text-center">
                    <h1>New York Times Article Scrubber</h1>
                    <p>Search for and annotate articles of interest!</p>                    
                    <Link to="/saved"><button className="btn btn-default">Saved Articles</button></Link>
                </div>
                <Search setSearch={this.setSearch}/>
                <Results results={this.state.results}/>
                <Saved />
            </div>
         );
    }
});

module.exports = Main;