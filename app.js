'use strict';
var storeHours = ['6am', '7am','8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
function Store (name,minCust,maxCust,cookieSale) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.cookieSale = cookieSale;
  this.salesPerDay = [];
}

Store.prototype.randomCustomer = function () {
  var min = Math.ceil(this.minCust);
  var max = Math.floor(this.maxCust);
  return Math.ceil(Math.random() * (max - min)) + min;
};

Store.prototype.cookiesPerHour = function () {
  return this.cookieSale * this.randomCustomer();
};

Store.prototype.storeHours = function () {
  for(var i = 0; i < 15; i++){
    storeHours[i];
    console.log (storeHours[i]);
  }
};

Store.prototype.createData = function () {
  for(var i = 0; i < 15; i++){
    this.salesPerDay.push(this.cookiesPerHour());
  }
};
Store.prototype.toHTML = function() {
  var thetable = document.getElementById ('thetable');
  var tr = createTr();
  tr.appendChild(createTh(''));
  for(var i = 0; i < storeHours.length; i++){
    var th = createTh(storeHours[i]);
    tr.appendChild(th);
  }

  thetable.appendChild(tr);

  var tr2 = createTr();
  tr2.appendChild(createTd(this.name));
  for(var i = 0; i < this.salesPerDay.length; i++){
    var td = createTd (this.salesPerDay[i]);
    tr2.appendChild(td);
  }
  thetable.appendChild(tr2);

};

function createTr (){
  return document.createElement('tr');
};

function createTh (data){
  var th = document.createElement('th');
  var node = document.createTextNode(data);
  th.appendChild(node);
  return th;
};
function createTd (data){
  var td = document.createElement('td');
  var node = document.createTextNode(data);
  td.appendChild(node);
  return td;
}

var newStore = new Store('First and Pike',23,65,7);
newStore.createData ();
newStore.toHTML ();







// newStore.toHTMLB ();


// CookieStore.prototype.toHtml = function() {
//   var storeTable = document.getElementById('store_table');
//   var tableRow = document.createElement('tr');
//   var nameTableHeader = document.createElement('th');
//   var totalTableData = document.createElement('td');
//   var hourlyTableData;
//
//   nameTableHeader.textContent = this.name;
//   tableRow.appendChild(nameTableHeader);
//
//   for (var i = 0; i < this.hours.length; i++) {
//     hourlyTableData = document.createElement('td');
//     hourlyTableData.textContent = 5;
//     tableRow.appendChild(hourlyTableData);
//   }
//
//   totalTableData.textContent = 15;
//   tableRow.appendChild(totalTableData);
//
//   console.log(tableRow, storeTable);
//
//   storeTable.appendChild(tableRow);
// };
