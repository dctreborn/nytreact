//need NYT API for query
var axios = require("axios");
var nytAPI = "";

var query = {
    runQuery: function(term, startYear, endYear) {
        var queryURL = "";

        return axious.get(queryURL).then(function(resp){
            // if success
            if (response.data.results[0]) {
                return response.data.results[0].formatted; //fix to nyt format
            }

            //return empty string if no results
            return "";
        });
    },
    //get record of saved articles
    getSaved: function() {
        return axios.get("/api");
    }
};

module.exports = query;