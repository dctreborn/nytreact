//shows results of query
var React = require("react");

var Results = React.createClass({
    render: function(){
        return(
            <div className="row">
                <div className="panel panel-default text-center">
                    <div className="panel-heading">
                        <div className="panel-title">Results</div>                        
                    </div>
                    <div className="panel-body">
                        {/*populate results w/ save button*/}
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Results;