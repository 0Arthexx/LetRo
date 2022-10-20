'use strict';

const background = document.getElementById('background');
const gunung = document.getElementById('gunung');
const daun1 = document.getElementById('daun1');
const daun2 = document.getElementById('daun2');
const daun3 = document.getElementById('daun3');
const buwong = document.getElementById('buwong');

window.addEventListener('scroll', function () {
   let value = window.scrollY;

   gunung.style.top = `${value * 0.8}px`;
   daun1.style.top = `${value * 0.55}px`;
   daun2.style.top = `${value * 0.4}px`;
   daun3.style.top = `${value * 0}px`;
   buwong.style.left = `${value * 1.05}px`;
});

var data = [
   {
      country: 'Indonesia',
      island: 'Nusa Tenggara Barat',
      city: 'Subang',
      name: 'Gili Trawangan',
      image: 'https://cdn.discordapp.com/attachments/1027768625182027777/1032318622514810931/10.png',
      url: 'https://google.com',
   },
   {
      country: 'Indonesia',
      island: 'Sumatera',
      city: 'Electric',
      name: 'Ngarai Sianok',
      image: 'https://cdn.discordapp.com/attachments/1027768625182027777/1032318622841962496/8.png',
      url: 'https://google.com',
   },
   {
      country: 'Indonesia',
      island: 'Sulawesi Selatan',
      city: 'Electric',
      name: 'Toraja',
      image: 'https://cdn.discordapp.com/attachments/1027768625182027777/1032318623198498896/9.png',
      url: 'https://google.com',
   },
   {
      country: 'Indonesia',
      island: 'Nusa Tenggara Barat',
      city: 'Electric',
      name: 'Rinjani',
      image: 'https://cdn.discordapp.com/attachments/1027768625182027777/1032318623584366611/61.png',
      url: 'https://google.com',
   },
   {
      country: 'Indonesia',
      island: 'Sumatera',
      city: 'Electric',
      name: 'Danau Toba',
      image: 'https://cdn.discordapp.com/attachments/1027768625182027777/1032318623907315762/7.png',
      url: 'https://google.com',
   },
   {
      country: 'Indonesia',
      island: 'Nusa Tenggara Barat',
      city: 'Acoustic',
      name: 'Lombok',
      image: 'https://cdn.discordapp.com/attachments/1027768625182027777/1032318624297402440/41.png',
      url: 'https://google.com',
   },
   {
      country: 'Indonesia',
      island: 'Jawa Timur',
      city: 'Acoustic',
      name: 'Bromo',
      image: 'https://cdn.discordapp.com/attachments/1027768625182027777/1032318624708431892/51.png',
      url: 'https://google.com',
   },
   {
      country: 'Indonesia',
      island: 'Nusa Tenggara Timur',
      city: 'Acoustic',
      name: 'Taman Komodo',
      image: 'https://cdn.discordapp.com/attachments/1027768625182027777/1032318625090117692/21.png',
      url: 'https://google.com',
   },
   {
      country: 'Indonesia',
      island: 'Papua Barat',
      city: 'Acoustic',
      name: 'Raja Ampat',
      image: 'https://cdn.discordapp.com/attachments/1027768625182027777/1032318625463418910/31.png',
      url: 'https://google.com',
   },
   {
      country: 'Indonesia',
      island: 'Bali',
      city: 'Acoustic',
      name: 'Bali',
      image: 'https://cdn.discordapp.com/attachments/1027768625182027777/1032318625819922574/11.png',
      url: 'https://google.com',
   },
];

var products = '',
   countrys = '',
   islands = '',
   citys = '';

for (var i = 0; i < data.length; i++) {
   var country = data[i].country,
      island = data[i].island,
      city = data[i].city,
      name = data[i].name,
      url = data[i].url,
      rawname = name.replace('$', ''),
      rawname = parseInt(rawname.replace(',', '')),
      image = data[i].image;

   products +=
      "<div class='col-sm-2 cardca1 product' data-country='" +
      country +
      "' data-island='" +
      island +
      "' data-city='" +
      city +
      "' data-name='" +
      rawname +
      "'> <img class='card-imga1 ' style='width: 100%; height: 100%;' src='" +
      image +
      "'>   </a><br /> <div class='card-infoa1'> <p class='text-titlea1'> " +
      name +
      " </p> <p class='text-body22a1'>Lorem Ipsum dolor sit amet</p> <button class='card-buttona1'>Read More</button> </div> </div>";


   //create dropdown of countrys
   if (
      countrys.indexOf("<option value='" + country + "'>" + country + '</option>') == -1
   ) {
      countrys += "<option value='" + country + "'>" + country + '</option>';
   }

   //create dropdown of islands
   if (
      islands.indexOf("<option value='" + island + "'>" + island + '</option>') ==
      -1
   ) {
      islands += "<option value='" + island + "'>" + island + '</option>';
   }

   //create dropdown of citys
   if (
      citys.indexOf("<option value='" + city + "'>" + city + '</option>') == -1
   ) {
      citys += "<option value='" + city + "'>" + city + '</option>';
   }
}

$('#products').html(products);
$('.filter-country').append(countrys);
$('.filter-island').append(islands);
$('.filter-city').append(citys);

var filtersObject = {};

//on filter change
$('.filter').on('change', function () {
   var filterName = $(this).data('filter'),
      filterVal = $(this).val();

   if (filterVal == '') {
      delete filtersObject[filterName];
   } else {
      filtersObject[filterName] = filterVal;
   }

   var filters = '';

   for (var key in filtersObject) {
      if (filtersObject.hasOwnProperty(key)) {
         filters += '[data-' + key + "='" + filtersObject[key] + "']";
      }
   }

   if (filters == '') {
      $('.product').show();
   } else {
      $('.product').hide();
      $('.product').hide().filter(filters).show();
   }
});

//on search form submit
$('#search-form').submit(function (e) {
   e.preventDefault();
   var query = $('#search-form input').val().toLowerCase();

   $('.product').hide();
   $('.product').each(function () {
      var country = $(this).data('country').toLowerCase(),
         island = $(this).data('island').toLowerCase(),
         city = $(this).data('city').toLowerCase();

      if (
         country.indexOf(query) > -1 ||
         island.indexOf(query) > -1 ||
         city.indexOf(query) > -1
      ) {
         $(this).show();
      }
   });
});
