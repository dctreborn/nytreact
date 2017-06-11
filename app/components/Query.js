//need NYT API for query
var axios = require("axios");
// e21bda65b10e4a6289991be04bc3917e
var nytAPI = "e21bda65b10e4a6289991be04bc3917e";

var query = {
    runQuery: function(term) {
        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + nytAPI;
        queryURL += "&q=" + term;
        //stretch goal
        // queryURL += "&begin_date=" + startYear;
        // queryURL += "&end_date=" + endYear;
        console.log("Query start");

        return axios.get(queryURL).then(function(resp){
            // console.log("api response")
            // console.log(resp);
            // if success
            if (resp.status == 200) {
                //resp.docs[x].headline.main/.byline.original/.section_name/.pub_date/.web_url
                console.log("API return");
                return resp.data.response.docs;
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