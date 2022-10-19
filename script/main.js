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
   console.log(value);
});

var data = [
   {
       "country": "Indonesia",
       "island": "Jawa Barat",
       "city": "Subang",
       "name": "Gili Trawangan",

       "make": "Indonesia",
       "model": "Nusa Tenggara Barat",
       "type": "Subang",
       "price": "Gili Trawangan",
       "image": "https://cdn.discordapp.com/attachments/1027768625182027777/1032318622514810931/10.png",
   "url":"https://google.com"
   },
   {
       "make": "Indonesia",
       "model": "Sumatera",
       "type": "Electric",
       "price": "Ngarai Sianok",
       "image": "https://cdn.discordapp.com/attachments/1027768625182027777/1032318622841962496/8.png",
       "url":"https://google.com"
   
   },
   {
       "make": "Indonesia",
       "model": "Sulawesi Selatan",
       "type": "Electric",
       "price": "Toraja",
       "image": "https://cdn.discordapp.com/attachments/1027768625182027777/1032318623198498896/9.png",
       "url":"https://google.com"
   },
   {
       "make": "Indonesia",
       "model": "Nusa Tenggara Barat",
       "type": "Electric",
       "price": "Rinjani",
       "image": "https://cdn.discordapp.com/attachments/1027768625182027777/1032318623584366611/61.png",
       "url":"https://google.com"
   },
   {
       "make": "Indonesia",
       "model": "Sumatera",
       "type": "Electric",
       "price": "Danau Toba",
       "image": "https://cdn.discordapp.com/attachments/1027768625182027777/1032318623907315762/7.png",
       "url":"https://google.com"
   },
   {
       "make": "Indonesia",
       "model": "Nusa Tenggara Barat",
       "type": "Acoustic",
       "price": "Lombok",
       "image": "https://cdn.discordapp.com/attachments/1027768625182027777/1032318624297402440/41.png",
       "url":"https://google.com"
   },
   {
       "make": "Indonesia",
       "model": "Jawa Timur",
       "type": "Acoustic",
       "price": "Bromo",
       "image": "https://cdn.discordapp.com/attachments/1027768625182027777/1032318624708431892/51.png",
       "url":"https://google.com"
   },
   {
       "make": "Indonesia",
       "model": "Nusa Tenggara Timur",
       "type": "Acoustic",
       "price": "Taman Komodo",
       "image": "https://cdn.discordapp.com/attachments/1027768625182027777/1032318625090117692/21.png",
       "url":"https://google.com"
   },
   {
       "make": "Indonesia",
       "model": "Papua Barat",
       "type": "Acoustic",
       "price": "Raja Ampat",
       "image": "https://cdn.discordapp.com/attachments/1027768625182027777/1032318625463418910/31.png",
       "url":"https://google.com"
   },
   {
       "make": "Indonesia",
       "model": "Bali",
       "type": "Acoustic",
       "price": "Bali",
       "image": "https://cdn.discordapp.com/attachments/1027768625182027777/1032318625819922574/11.png",
       "url":"https://google.com"
   }
];

var products = "",
   makes = "",
   models = "",
   types = "";

for (var i = 0; i < data.length; i++) {
   var make = data[i].make,
       model = data[i].model,
       type = data[i].type,
       price = data[i].price,
       url = data[i].url,
       rawPrice = price.replace("$",""),
       rawPrice = parseInt(rawPrice.replace(",","")),
       image = data[i].image;
   
   //create product cards
   // <div class="cardca1">
   //  <div class="card-imga1"></div>
   //   <div class="card-infoa1">
   //     <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z"   fill="none"></path><path d="M4.828 21l-.02.02-.021-.02H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H4.828zM20 15V5H4v14L14 9l6 6zm0 2.828l-6-6L6.828 19H20v-1.172zM8 11a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="currentColor"></path></svg>
   //     <p class="text-titlea1">Card title</p>
   //     <p class="text-body22a1">Lorem Ipsum dolor sit amet</p>
   //     <button class="card-buttona1">Read More</button>
   //   </div>
   // </div>

   // <div class='col-sm-3 product' data-make='" + make + "' data-model='" + model + "' data-type='" + type + "' data-price='" + rawPrice + "'>
   //     <div class='product-inner text-center'>
   //         <a href='"+url+"'>
   //             <img src='" + image + "'>
   //         </a>
   //         <br />Make: " + make + "<br />Model: " + model + "<br />Type: " + type + "<br />Price: " + price + "
   //     </div>
   // </div>
   
   products += "<div class='col-sm-2 cardca1 m-5 product' data-make='" + make + "' data-model='" + model + "' data-type='" + type + "' data-price='" + rawPrice + "'> <img class='card-imga1 ' style='width: 100%; height: 100%;' src='" + image + "'>   </a><br /> <div class='card-infoa1'> <p class='text-titlea1'> " + price + " </p> <p class='text-body22a1'>Lorem Ipsum dolor sit amet</p> <button class='card-buttona1'>Read More</button> </div> </div>";

   // products += "<div class='col-sm-3 product' data-make='" + make + "' data-model='" + model + "' data-type='" + type + "' data-price='" + rawPrice + "'><div class='product-inner text-center'><a href='"+url+"'><img src='" + image + "'></a><br />Make: " + make + "<br />Model: " + model + "<br />Type: " + type + "<br />Price: " + price + "</div></div>";
   
   //create dropdown of makes
   if (makes.indexOf("<option value='" + make + "'>" + make + "</option>") == -1) {
       makes += "<option value='" + make + "'>" + make + "</option>";
   }
   
   //create dropdown of models
   if (models.indexOf("<option value='" + model+"'>" + model + "</option>") == -1) {
       models += "<option value='" + model + "'>" + model + "</option>";
   }
   
   //create dropdown of types
   if (types.indexOf("<option value='" + type + "'>" + type + "</option>") == -1) {
       types += "<option value='" + type + "'>" + type + "</option>";
   }
}

$("#products").html(products);
$(".filter-make").append(makes);
$(".filter-model").append(models);
$(".filter-type").append(types);

var filtersObject = {};

//on filter change
$(".filter").on("change",function() {
   var filterName = $(this).data("filter"),
       filterVal = $(this).val();
   
   if (filterVal == "") {
       delete filtersObject[filterName];
   } else {
       filtersObject[filterName] = filterVal;
   }
   
   var filters = "";
   
   for (var key in filtersObject) {
       if (filtersObject.hasOwnProperty(key)) {
           filters += "[data-"+key+"='"+filtersObject[key]+"']";
       }
   }
   
   if (filters == "") {
       $(".product").show();
   } else {
       $(".product").hide();
       $(".product").hide().filter(filters).show();
   }
});

//on search form submit
$("#search-form").submit(function(e) {
   e.preventDefault();
   var query = $("#search-form input").val().toLowerCase();

   $(".product").hide();
   $(".product").each(function() {
       var make = $(this).data("make").toLowerCase(),
           model = $(this).data("model").toLowerCase(),
           type = $(this).data("type").toLowerCase();

       if (make.indexOf(query) > -1 || model.indexOf(query) > -1 || type.indexOf(query) > -1) {
           $(this).show();
       }
   });
});