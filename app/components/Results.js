//shows results of query
var React = require("react");

var Results = React.createClass({
    // renderResults: function(){
    //     let list = this.props.results;
    //     list.forEach(function(element) {
    //         <li>element.title</li>
    //         <li>element.date</li>
    //         <li>element.url</li>
    //     });
    // },
    render: function(){
        if (this.props.results != null){
            return(
                <div className="row">
                    <div className="panel panel-default text-center">
                        <div className="panel-heading">
                            <div className="panel-title">Results</div>                        
                        </div>
                        <div className="panel-body">
                            <ul>
                                <li>{this.props.results.title}</li>
                                <li>{this.props.results.date}</li>
                                <li>{this.props.results.url}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (<
                div className="row">
                    <div className="panel panel-default text-center">
                        <div className="panel-heading">
                            <div className="panel-title">Results</div>                        
                        </div>
                        <div className="panel-body">

                        </div>
                    </div>
                </div>
                );
        }
    }
});

module.exports = Results;