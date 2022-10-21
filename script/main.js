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
      city: 'Lombok',
      name: 'Gili Trawangan',
      image: 'https://cdn.discordapp.com/attachments/1027768625182027777/1032318622514810931/10.png',
      angka: '1',
      url: 'https://google.com',
   },
   {
      country: 'Indonesia',
      island: 'Sumatera',
      city: 'Bukittinggi',
      name: 'Ngarai Sianok',
      image: 'https://cdn.discordapp.com/attachments/1027768625182027777/1032318622841962496/8.png',
      angka: '2',
      url: 'https://google.com',
   },
   {
      country: 'Indonesia',
      island: 'Sulawesi Selatan',
      city: 'Makale',
      name: 'Toraja',
      image: 'https://cdn.discordapp.com/attachments/1027768625182027777/1032318623198498896/9.png',
      angka: '3',
      url: 'https://google.com',
   },
   {
      angka: '4',
      country: 'Indonesia',
      island: 'Nusa Tenggara Barat',
      city: 'Lombok',
      name: 'Rinjani',
      image: 'https://cdn.discordapp.com/attachments/1027768625182027777/1032318623584366611/61.png',
      url: 'https://google.com',
   },
   {
      angka: '5',
      country: 'Indonesia',
      island: 'Sumatera',
      city: 'Medan',
      name: 'Danau Toba',
      image: 'https://cdn.discordapp.com/attachments/1027768625182027777/1032318623907315762/7.png',
      url: 'https://google.com',
   },
   {
      angka: '6',
      country: 'Indonesia',
      island: 'Nusa Tenggara Barat',
      city: 'Lombok',
      name: 'Lombok',
      image: 'https://cdn.discordapp.com/attachments/1027768625182027777/1032318624297402440/41.png',
      url: 'https://google.com',
   },
   {
      angka: '7',
      country: 'Indonesia',
      island: 'Jawa Timur',
      city: 'Acoustic',
      name: 'Bromo',
      image: 'https://cdn.discordapp.com/attachments/1027768625182027777/1032318624708431892/51.png',
      url: 'https://google.com',
   },
   {
      angka: '8',
      country: 'Indonesia',
      island: 'Nusa Tenggara Timur',
      city: 'Acoustic',
      name: 'Taman Komodo',
      image: 'https://cdn.discordapp.com/attachments/1027768625182027777/1032318625090117692/21.png',
      url: 'https://google.com',
   },
   {
      angka: '9',
      country: 'Indonesia',
      island: 'Papua Barat',
      city: 'Acoustic',
      name: 'Raja Ampat',
      image: 'https://cdn.discordapp.com/attachments/1027768625182027777/1032318625463418910/31.png',
      url: 'https://google.com',
   },
   {
      angka: '10',
      country: 'Indonesia',
      island: 'Bali',
      city: 'Acoustic',
      name: 'Bali',
      image: 'https://cdn.discordapp.com/attachments/1027768625182027777/1032318625819922574/11.png',
      url: 'https://google.com',
   },
   // 
   {
      angka: '11',
      country: 'Indonesia',
      island: 'Nusa Tenggara Barat',
      city: 'Mataram',
      name: 'Pink Beach',
      image: 'https://cdn.discordapp.com/attachments/1032636744237068328/1032887123407274014/DESAIN_GRAFIS_2.png',
      url: 'https://google.com',
   },
   {
      angka: '12',
      country: 'Indonesia',
      island: 'Kepulauan Riau',
      city: 'Riau',
      name: 'Treasure Bay Bintan',
      image: 'https://cdn.discordapp.com/attachments/1032636744237068328/1032637142205214760/14.png',
      url: 'https://google.com',
   },
   {
      angka: '13',
      country: 'Indonesia',
      island: 'Kepulauan Riau',
      city: 'Tanjung Pinang',
      name: 'Patung Seribu',
      image: 'https://cdn.discordapp.com/attachments/1032636744237068328/1032637142758871092/15.png',
      url: 'https://google.com',
   },
   {
      angka: '14',
      country: 'Indonesia',
      island: 'Kepulauan Riau',
      city: 'Pulau Bintan',
      name: 'Pantai Trikora',
      image: 'https://cdn.discordapp.com/attachments/1032636744237068328/1032637143283150901/16.png',
      url: 'https://google.com',
   },
   {
      angka: '15',
      country: 'Indonesia',
      island: 'Kepulauan Riau',
      city: 'Pulau Bintan',
      name: 'Danau Biru Kawal',
      image: 'https://cdn.discordapp.com/attachments/1032636744237068328/1032637144134582282/17.png',
      url: 'https://google.com',
   },
   {
      angka: '16',
      country: 'Indonesia',
      island: 'Nusa Tenggara Barat',
      city: 'Lombok',
      name: 'Bukit Merese',
      image: 'https://cdn.discordapp.com/attachments/1032636744237068328/1032637144621133914/18.png',
      url: 'https://google.com',
   },
   {
      angka: '17',
      country: 'Indonesia',
      island: 'Nusa Tenggara Barat',
      city: 'Lombok',
      name: 'Pantai Kuta Mandalika',
      image: 'https://cdn.discordapp.com/attachments/1032636744237068328/1032637145795526697/19.png',
      url: 'https://google.com',
   },
   {
      angka: '18',
      country: 'Indonesia',
      island: 'Nusa Tenggara Barat',
      city: 'Lombok',
      name: 'Desa Adat Sade',
      image: 'https://cdn.discordapp.com/attachments/1032636744237068328/1032637146454044773/20.png',
      url: 'https://google.com',
   },
   {
      angka: '19',
      country: 'Indonesia',
      island: 'Nusa Tenggara Timur',
      city: 'Pulau Komodo',
      name: 'Pulau Rinca',
      image: 'https://cdn.discordapp.com/attachments/1032636744237068328/1032637149847232553/11.png',
      url: 'https://google.com',
   },
   {
      angka: '20',
      country: 'Indonesia',
      island: 'Nusa Tenggara Timur',
      city: 'Flores',
      name: 'Pulau Padar',
      image: 'https://cdn.discordapp.com/attachments/1032636744237068328/1032637150396678224/12.png',
      url: 'https://google.com',
   },
   {
      angka: '21',
      country: 'Indonesia',
      island: 'Nusa Tenggara Timur',
      city: 'Flores',
      name: 'Wae Rebo',
      image: 'https://cdn.discordapp.com/attachments/1032636744237068328/1032637240838463580/21.png',
      url: 'https://google.com',
   },
   {
      angka: '22',
      country: 'Indonesia',
      island: 'Nusa Tenggara Timur',
      city: 'Flores',
      name: 'Danau Kelimutu',
      image: 'https://cdn.discordapp.com/attachments/1032636744237068328/1032637241215942706/22.png',
      url: 'https://google.com',
   },
   {
      angka: '23',
      country: 'Indonesia',
      island: 'Nusa Tenggara Timur',
      city: 'Sumba',
      name: 'Sumba',
      image: 'https://cdn.discordapp.com/attachments/1032636744237068328/1032637241819926528/23.png',
      url: 'https://google.com',
   },
   {
      angka: '24',
      country: 'Indonesia',
      island: 'Sulawesi Utara',
      city: 'Manado',
      name: 'Pulau Manado Tua',
      image: 'https://cdn.discordapp.com/attachments/1032636744237068328/1032915961172463638/DESAIN_GRAFIS_3.png',
      url: 'https://google.com',
   },
   {
      angka: '25',
      country: 'Indonesia',
      island: 'Papua',
      city: 'Jayapura',
      name: 'Danau Sentani',
      image: 'https://cdn.discordapp.com/attachments/1032636744237068328/1032637242562330674/25.png',
      url: 'https://google.com',
   },
   {
      angka: '26',
      country: 'Indonesia',
      island: 'Jawa',
      city: 'Magelang',
      name: 'Candi Borobudur',
      image: 'https://cdn.discordapp.com/attachments/1032636744237068328/1032637242885287996/26.png',
      url: 'https://google.com',
   },
   {
      angka: '27',
      country: 'Indonesia',
      island: 'Jawa',
      city: 'Klaten',
      name: 'Candi Prambanan',
      image: 'https://cdn.discordapp.com/attachments/1032636744237068328/1032637243229229117/27.png',
      url: 'https://google.com',
   },
   {
      angka: '28',
      country: 'Indonesia',
      island: 'Gorontalo',
      city: 'Gorontalo',
      name: 'Pulo Cinta',
      image: 'https://cdn.discordapp.com/attachments/1032636744237068328/1032637243560575057/28.png',
      url: 'https://google.com',
   },
   {
      angka: '29',
      country: 'Indonesia',
      island: 'Jawa',
      city: 'Banten',
      name: 'Taman Nasional Ujung Kulon',
      image: 'https://cdn.discordapp.com/attachments/1032636744237068328/1032637243925475398/29.png',
      url: 'https://google.com',
   },
   {
      angka: '30',
      country: 'Indonesia',
      island: 'Bali',
      city: 'Bali',
      name: 'Nusa Penida',
      image: 'https://cdn.discordapp.com/attachments/1032636744237068328/1032640268685557770/DESAIN_GRAFIS_1.png',
      url: 'https://google.com',
   }

];

var products = '',
   countrys = '',
   islands = '',
   citys = '',
   angkas = '';
   

for (var i = 0; i < data.length; i++) {
   var country = data[i].country,
      island = data[i].island,
      city = data[i].city,
      name = data[i].name,
      url = data[i].url,
      angka = data[i].angka,
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
      "' data-angka='" +
      angka +
      "'> <img class='card-imga1 ' style='width: 100%; height: 100%;' src='" +
      image +
      "'>   </a><br /> <div class='card-infoa1'> <p class='text-titlea1'> " +
      name +
      " </p> <button class='buttonns2' type='button' data-bs-toggle='offcanvas' data-bs-target='#offcanvasBottom" +
      angka +
      "' aria-controls='offcanvasBottom'>Read More</button> </div> </div>";

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



const reviews = [
   {
     id: 1,
     name: "Thoriq",
     job: "Web Developer",
     img:"https://cdn.discordapp.com/attachments/1032636744237068328/1032933065254785045/girlprof.png",
     text:"Known as the party island, is the most developed of the three gilis and also offers great snorkeling/diving spots. You can get almost everything here. Nice accomodation, chill vibes, bars, delicious foods, and of course party. Backpacker friendly, you can find cheap accomodation here from around IDR 100.000/night"
   },
   {
     id: 2,
     name: "Willy",
     job: "Designer",
     img:"https://cdn.discordapp.com/attachments/1032636744237068328/1032933065602891878/manprof.png",
     text:"This island is beautiful, no cars no motorcycles, so everyone just walking or use bicyle and horse wagon. Many foreigner tourists than local, this island is similar to Bali, but a lil bit quiter"
   },
   {
     id: 3,
     name: "Raffi",
     job: "Traveller",
     img:"https://cdn.discordapp.com/attachments/1032636744237068328/1032933065254785045/girlprof.png",
     text:"The most touristic place we visited in Indonesia. If you are above forty you will feel rather old. We went around the island by bicycle and it was nice. Beaches are beautiful. We tried to find turtles but it seemed hopeless."
   },
   {
     id: 4,
     name: "David",
     job: "Investor",
     img:"https://cdn.discordapp.com/attachments/1032636744237068328/1032933065602891878/manprof.png",
     text:"What's not to love about this island. They call this the party island out of the 3 Gili islands, Gili-trawangan, Gili Air, Gili Meno. An escape from Bali mainland. Quicker to the islands from Lombok if you are in Lombok."
   }
 ];
 
 const img = document.getElementById("person-imgreview");
 const author = document.getElementById("authorreview");
 const job = document.getElementById("jobreview");
 const info = document.getElementById("inforeview");
 
 const prevBtn = document.querySelector(".prev-btn");
 const nextBtn = document.querySelector(".next-btn");
 
 let currentItem = 0;
 
 // load initial item
 window.addEventListener("DOMContentLoaded", () => {
   const item = reviews[currentItem];
   img.src = item.img;
   author.textContent = item.name;
   job.textContent = item.job;
   info.textContent = item.text;
 });
 
 // show person based on item
 function showPerson(person) {
   const item = reviews[person];
   img.src = item.img;
   author.textContent = item.name;
   job.textContent = item.job;
   info.textContent = item.text;
 }
 
 // show next person
 nextBtn.addEventListener("click", () => {
   currentItem++;
   if (currentItem > reviews.length - 1) {
     currentItem = 0;
   }
   showPerson(currentItem);
 });
 
 // show prev person
 prevBtn.addEventListener("click", () => {
   currentItem--;
   if (currentItem < 0) {
     currentItem = reviews.length - 1;
   }
   showPerson(currentItem);
 });
 
 