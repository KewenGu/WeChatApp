// Author: Kewen Gu
// URL: https://kgu-cs4241-main.herokuapp.com

function operation(id, postUrl) {
  var el = document.getElementById(id);

  var req = new XMLHttpRequest();
  req.open('POST', postUrl, true);
  req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

  req.onload = function () {
    makeGet('/list');
  };

  req.send('keyword='+el.value);
}

function fullList() {
  var req = new XMLHttpRequest();
  req.open('POST', '/full-list', true);
  req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

  req.onload = function () {
    makeGet('/list');
  };

  req.send();
}

function deleteItem(index) {
  var req = new XMLHttpRequest();
  req.open('POST', '/remove', true);
  req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

  req.onload = function () {
    makeGet('/list');
  };

  req.send('keyword='+index);
}


makeGet('/list');

function makeGet(url) {
  var req = new XMLHttpRequest();

  req.onreadystatechange = function() {
    handleRes(req);
  }

  req.open('GET', url);
  req.send();
}

function handleRes(req) {
  if(req.readyState !== XMLHttpRequest.DONE) {
    return;
  }
  if(req.status === 200) {
    console.log(req.responseText);
    buildList(JSON.parse(req.responseText));
  }
}

function buildList(A) {
  var el = document.getElementById('movie-list');
  el.innerHTML = "";
  var func = "";
  var i = 0;
  A.forEach(function(d) {
    func = "deleteItem(" + i + ")";
    el.innerHTML += "<form>" + d + "<input type='submit' value='x' class='button' onclick=\"" + func + "\"></form>";
    i++;
  });
}
