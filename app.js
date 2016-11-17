'use strict';
var storeHours = ['6am', '7am','8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
function Store(minCust,maxCust,cookieSale) {
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

Store.prototype.soterHours = function () {
  for(var i = 0; i < 15; i++){
    storeHours[i];
    console.log (storeHours[i]);
  }
};

Store.prototype.salesPerDay = function () {
  for(var i = 0; i < 15; i++){
    this.salesPerDay.push(this.cookiesPerHour());
  }
};
function toHTMLB () {
  var thetable = document.getElementById ('thetable');
  var tr = document.createElement('tr');
  var th = document.createElement('th');
  var thA;
  for(var i = 0; i < storeHours.length; i++){
    thA = document.createElement('th');
    thA.textContent = storeHours[i];

    tr.appendChild(thA);


  }
  thetable.appendChild(tr);
  tr.appendChild(th);





};
toHTMLB ();

Store.prototype.toHTMLB = function () {
  var thetable = document.getElementById ('thetable');
  var tr2 = document.createElement('tr');
  var td = document.createElement('td');
  var td;
  for(var i = 0; i < this.salesPerDay.length; i++){
    thB = document.createElement('td');

    thB.textContent = this.salesPerDay[i];

    tr2.appendChild(td);
  }
  thetable.appendChild(td);
  tr2.appendChild(th2);
};
// Store.prototype.toHTML d= function
() {
//   var thetable = document.getElementById ('thetable');
//   var tr2 = document.createElement('tr2');
//   var th2 = document.createElement('th2');
//   var thB;
//   for(var i = 0; i < this.hoursOpen.length; i++){
//     thB = document.createElement('th2');
//     thB.textContent = this.hoursOpen[i];
//
//     tr2.appendChild(thB);
//   }
//   thetable.appendChild(tr2);
//   tr2.appendChild(th2);
// };


var newStore = new Store();
newStore.toHTML ();


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
