
var BuildIPOPData = (function () {
  var overlayID;
  var ipopData;
  var numNodes;
  var numLinks;
  var nodeList;
  var nodeIDList;
  var linkList;
  var linkIDList;
  var linkListOf;

  function getData() {
    return ipopData;
  }
  function setOverlays(overlays) {
    numNodes = overlays.NumNodes;
    numLinks = overlays.NumLinks;
  }
  function setNodes(node) {
    nodeIDList = Object.keys(node).sort();
    nodeList = node;
  }

  function setLinks(link) {
    linkList = link;
    // alert(Object.keys(linkList).length);
  }

  function getLinkIDListOf(nodeID) {
    linkIDList = Object.keys(linkList[nodeID]);
    return linkIDList;
  }

  function getLinkListOf(nodeID) {
    linkListOf = linkList[nodeID];
    return linkListOf;
  }

  function constructor() {
    this.setData = function (overlays, nodes, links) {
      //   ipopData = data;
      //   var overlays = ipopData.Overlays
      //   overlayID = Object.keys(overlays)[0];     /* in version.1 we use the first overlays */
      overlayID = Object.keys(overlays)[0];
      setOverlays(overlays);

      //   var node = nodes
      setNodes(nodes);

      //   var link = nodes
      setLinks(links);

    };
    this.getData = function () {            /* return All data */
      return getData();
    }
    this.getOverlayID = function () {        /* return overlay ID */
      return overlayID;
    }
    this.getNumNodes = function () {        /* return number of node in this overlay that was set on constructer*/
      return numNodes;
    }
    this.getNumLinks = function () {        /* return number of links in this overlay that was set on constructer */
      return numLinks;
    }
    this.getNodeList = function () {        /* return  list of node in this overlays */
      return nodeList;
    }
    this.getNodeIDList = function () {      /* return list of nodeID in this overlays */
      return nodeIDList;
    }
    this.getLinkList = function () {        /* return list of Link in this overlays */
      return linkList;
    }
    this.getLinkIDListOf = function (nodeID) {  /* return LinkID's list of individual nodeID */
      return getLinkIDListOf(nodeID);
    }
    this.getLinkListOf = function (nodeID) {    /* return object linklist of individual nodeID */
      return getLinkListOf(nodeID);
    }
  }
  return constructor;
}())

