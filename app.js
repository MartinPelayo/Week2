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

Store.prototype.storeHours = function () {
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
Store.prototype.toHTML = function() {
  var thetable = document.getElementById ('thetable');
  var tr = createTr();
  for(var i = 0; i < storeHours.length; i++){
    var th = createTh(storeHours[i]);
    tr.appendChild(th);
  }

  thetable.appendChild(tr);

  var tr2 = createTr();
  for(var i = 0; i < this.salesPerDay.length; i++){
    thB = createTr();
    thB.textContent = this.salesPerDay[i];

    tr2.appendChild(thB);
  }
  tablebody.appendChild(tr);

};
toHTML ();

function createTr (){
  return document.createElement('tr');
};

function createTh (data){
  var th = document.createElement('th');
  var node = document.createTextNode(data);
  th.appendChild(node);
  return th;
};







// Store.prototype.toHTML d= function
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


var newStore = new Store(a,b,c);
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
