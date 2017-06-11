//need NYT API for query
var axios = require("axios");
var nytAPI = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

var query = {
    runQuery: function(term) {
        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey;
        queryURL += "&q=" + term;
        //stretch goal
        // queryURL += "&begin_date=" + startYear;
        // queryURL += "&end_date=" + endYear;

        return axious.get(queryURL).then(function(resp){
            console.log(resp);
            // if success
            if (response.status == "OK") {
                //response.docs[x].headline.main/.byline.original/.section_name/.pub_date/.web_url
                return response.docs;
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