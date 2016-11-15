'use strict';
// var myFirstObject = {};
//
// myFirstObject.name = 'b';
// myFirstObject[thisIsAString] = 'slug';
// console.log;
//

// var cookieStore = {
//   name: 'DownTown',
//   hours: ['7am', '8am', '9am'],
//   whatHours: function () {
//     console.log('I am open certain hours: ' + this.hours);
//     sum(7, 9);
//   }

//   listHours() {
//     var contentArea = document.getElementById('content_area');
//     var ul = document.createElement('ul');
//     var li = document.createElement('li');
//
//     for (var i = 0; i < ;i++) {
//       li = document.createElement('li');
//
//       li.textContent = his.storeHours[i];
//       ul.appendChild(li);
//     }
//
//     li.textContent = 'TEST LI';
//
//     ul.appendChild(li);
//     constentArea.appendChild(ul);
//   }
// };
//
//
// cookieStore.listHours();


// var cookieStore = {
//   name: 'Downtown',
//   storeHours: ['7am', '8am', '9am'],
//   whatHours: function() {
//     console.log('I am open certain hours: ' + this.storeHours);
//   },
//   listHours: function() {
//     var contentArea = document.getElementById('content_area');
//     var ul = document.createElement('ul');
//     var li;
//
//     for (var i = 0; i < this.storeHours.length; i++) {
//       li = document.createElement('li');
//       li.textContent = this.storeHours[i];
//       ul.appendChild(li);
//     }
//     contentArea.appendChild(ul);
//   }
// };


//
// var hourlyCostmers = {
//   hours: ['6am', '7am','8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']
//
// };
//



// var someOtherObject = {
//   maxCust: 10,
//   randomCust: function() {
//     var min = Math.floor(this.minCust)
//     var max = Math.ceil(this.maxCust)
//     return Math.floor(Math.random() * max - min) + min;
//   }
// }



var firstAndPikePlace = {
  minCust: 23,
  maxCust: 65,
  cookieSale: 6.3,
  hoursOpen: ['6am', '7am','8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  cookiesPerHour: function () {
    return this.cookieSale * this.customer();
  },
  cookiesPerDay: function () {
    for(var i = 0; i < 15; i++){
      this.hoursOpen[i];
      console.log (this.hoursOpen[i])
    }
  },

  customer: function () {
    var min = Math.ceil(this.minCust);
    var max = Math.floor(this.maxCust);
    return Math.ceil(Math.random() * (max - min)) + min;
  }
};
console.log;
