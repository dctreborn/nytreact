//saved articles pane
//displays information on button click
var React = require("react");

var Saved = React.createClass({
    render: function(){
        return(
            <div className="row">
                <div className="panel panel-default text-center">
                    <div className="panel-heading">
                        <div className="panel-title">Saved Articles</div>                        
                    </div>
                    <div className="panel-body">
                        {/*show all saved articles from database with date*/}
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Saved;