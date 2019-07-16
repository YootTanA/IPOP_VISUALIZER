
var getJSON = require('get-json')

var intervalNo = new Date().toISOString().split(".")[0];
var serverIP = '34.209.33.166:5000';
var url = 'http://' + serverIP + '/IPOP/overlays?interval=' + intervalNo + '&current_state=True'

var overlayIdList = [];
console.log(url);

getJSON(url)
    .then(function (data, status) {

        if (status == "error") throw error;
        
        console.log(data["current_state"]);
        
        // for (overlayID in data["current_state"]) {
        //     overlayIdList.push(overlayID);
        // }
        //getNode(overlayID);
        //getLink(overlayID);

    }).catch(function (error) {
        console.log(error);
    });

var getNode = function (overlayID) {
    //console.log( 'http://' + serverIP + '/IPOP/'+overlayID+'/nodes?interval=' + intervalNo + '&current_state=True');
    var url = 'http://' + serverIP + '/IPOP/overlays/' + overlayID + '/nodes?interval=' + intervalNo + '&current_state=True'

    console.log(url);
    
    // $.when(  $.getJSON(url)).then(function(nodeData){
    //     console.log(data["0"]);
    // })

    getJSON(url)
        .then(function (data, status) {
            for(nodeName in data[overlayID]["current_state"])
            console.log(nodeName);
            
        }).catch(function (error) {
            console.log(error);
        });
}

var getLink =function(overlayID, nodeID){
    var url = 'http://' + serverIP + '/IPOP/overlays/' + overlayID + '/links?interval=' + intervalNo + '&current_state=True'

    console.log(url);
    
    getJSON(url)
        .then(function (data, status) {
            // for(link in data[overlayID]["current_state"])
            // {
            //     console.log("===========================================================");
                
            //     console.log( data[overlayID]["current_state"][link]);
            // }
            //console.log( data[overlayID]["current_state"]);
            
            
        }).catch(function (error) {
            console.log(error);
        });
}