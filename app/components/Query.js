//need NYT API for query
var axios = require("axios");
var nytAPI = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

var query = {
    runQuery: function(term, startYear, endYear) {
        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey;
        queryURL += "&q=" + term;
        queryURL += "&begin_date=" + startYear;
        queryURL += "&end_date=" + endYear;

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