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
      image1: 'https://cdn.discordapp.com/attachments/1032636744237068328/1032907252320960552/623436cab9f4e.jpg',
      image2: 'https://cdn.discordapp.com/attachments/1032636744237068328/1032925453842927688/GOPR4908-Copy.jpg',
      country: 'Gili Trawangan',
      island: 'Nusa Tenggara Barat',
      city: 'Lombok',
      name: 'Gili Trawangan',
      image: 'https://cdn.discordapp.com/attachments/1027768625182027777/1032318622514810931/10.png',
      angka: '1',
      desc: 'Gili Trawangan is the largest of the three small islands or dyke in the northwest of Lombok. Trawangan is also the only dyke whose height above sea level is quite significant. With a length of 3 km and a width of 2 km, Trawangan has a population of about 800 people. Among the three dykes, Trawangan has the most diverse facilities for tourists; the tavern "Tîr na Nôg" claims that Trawangan is the smallest island in the world with an Irish bar. The most densely populated part is the east of the island.',
   },
   {
      image1: 'https://cdn.discordapp.com/attachments/1032636744237068328/1032950597952999434/62f1db03c7704.jpeg',
      image2: 'https://cdn.discordapp.com/attachments/1032636744237068328/1032950598204669993/094814500_1482128249-095165600_1454230277-1.jpg',
      country: 'Ngarai Sianok',
      island: 'Sumatera',
      city: 'Bukittinggi',
      name: 'Ngarai Sianok',
      image: 'https://cdn.discordapp.com/attachments/1027768625182027777/1032318622841962496/8.png',
      angka: '2',
      desc: 'Ngarai Sianok is a steep valley (ravine) located on the border of Bukittinggi City, in District IV Koto, Agam Regency, West Sumatra. This valley is elongated and winding as the city boundary line from the south of the Koto Gadang canyon to the Sianok Anam Suku village, and ends in Palupuh District. Sianok canyon has a very beautiful view and is also one of the mainstay tourist attractions in the province.',
   },
   {
      image1: 'https://cdn.discordapp.com/attachments/1032636744237068328/1033070076959653988/Toraja_house.jpg',
      image2: 'https://cdn.discordapp.com/attachments/1032636744237068328/1033070077324574870/suku-toraja.jpg',
      country: 'Toraja',
      island: 'Sulawesi Selatan',
      city: 'Makale',
      name: 'Toraja',
      image: 'https://cdn.discordapp.com/attachments/1027768625182027777/1032318623198498896/9.png',
      angka: '3',
      desc: 'Tana Toraja is one of the districts in the province of South Sulawesi , Indonesia . The capital city of this district is in the Makale sub-district . Tana Toraja has an area of ​2,054.30 km² and by mid- 2022 it has a population of 270,984 people with a density of 132 people/km².',
   },
   {
      angka: '4',
      image1: 'https://cdn.discordapp.com/attachments/1032636744237068328/1033070410180337674/Rinjani.jpg',
      image2: 'https://cdn.discordapp.com/attachments/1032636744237068328/1033070410411020429/gunung_rinjani_1.jpg',
      country: 'Rinjani',
      island: 'Nusa Tenggara Barat',
      city: 'Lombok',
      name: 'Rinjani',
      image: 'https://cdn.discordapp.com/attachments/1027768625182027777/1032318623584366611/61.png',
      desc: 'Mount Rinjani is a mountain located on the island of Lombok , West Nusa Tenggara . The mountain which is the second highest volcano in Indonesia with an altitude of 3,726 masl and located at latitudes 8º25 South Latitude and 116º28 East Longitude is a favorite mountain for Indonesian climbers because of its beautiful scenery. [2] This mountain is part of the Mount Rinjani National Park which has an area of ​​about 41,330 ha and it is proposed to increase it to 76,000 ha to the west and east.',
   },
   {
      angka: '5',
      image1: 'https://cdn.discordapp.com/attachments/1032636744237068328/1033070660102148106/Indonesia_-_Lake_Toba_26224127503.jpg',
      image2: 'https://cdn.discordapp.com/attachments/1032636744237068328/1033070660408324206/large-holbung-hill-view-at-toba-lake-sumatera-indonesia-0c6f46cefbcf08ccb86f5df01e34be43.jpg',
      country: 'Danau Toba',
      island: 'Sumatera',
      city: 'Medan',
      name: 'Danau Toba',
      image: 'https://cdn.discordapp.com/attachments/1027768625182027777/1032318623907315762/7.png',
      desc: 'Lake Toba ( Batak letter : ; translit . Tao Toba ) is a large natural lake in Indonesia located in the caldera of Mount Supervolcano . The lake is 100 kilometers (62 mi) long, 30 kilometers (19 mi) wide and 508 meters (1,667 ft) deep. This lake is located in the center of northern Sumatra island with a surface elevation of about 900 meters (2,953 ft). The lake stretches from 2.88°N 98.52°E to 2.35°N 99.1°E . This is the largest lake in Indonesia and a volcanic lakelargest in the world.',
   },
   {
      angka: '6',
      image1: '',
      image2: '',
      country: 'Lombok',
      island: 'Nusa Tenggara Barat',
      city: 'Lombok',
      name: 'Lombok',
      image: 'https://cdn.discordapp.com/attachments/1027768625182027777/1032318624297402440/41.png',
      desc: 'Lombok Island ( population in 2001 : 2,722,123 inhabitants) [1] is an island in the Lesser Sunda archipelago or Nusa Tenggara which is separated by the Lombok Strait from Bali to the west and the Alas Strait to the east from Sumbawa . The island is more or less round in shape with a kind of "tail" on the southwest side which is approximately 70 km long. The islands area reaches 5,435 km² placing it at number 108 of the list of islands by area in the world . The main city on the island isMataram City .',
   },
   {
      angka: '7',
      image1: '',
      image2: '',
      country: 'Bromo',
      island: 'Jawa Timur',
      city: 'Malang',
      name: 'Bromo',
      image: 'https://cdn.discordapp.com/attachments/1027768625182027777/1032318624708431892/51.png',
      desc: 'Mount Bromo or in the Tengger language spelled "Brama", also called the Tengger Caldera , is an active volcano in East Java , Indonesia . This mountain has a height of 2,329 meters above sea level and is located in four districts , namely Probolinggo Regency , Pasuruan Regency , Lumajang Regency , and Malang Regency . Mount Bromo is famous as the main tourist attraction in East Java . As a tourist attraction, Bromo becomes interesting because of its status as an active volcano. Mount Bromo is included in the Bromo Tengger Semeru National Park area .',
   },
   {
      angka: '8',
      image1: '',
      image2: '',
      country: 'Taman Komodo',
      island: 'Nusa Tenggara Timur',
      city: 'Sumbawa',
      name: 'Taman Komodo',
      image: 'https://cdn.discordapp.com/attachments/1027768625182027777/1032318625090117692/21.png',
      desc: 'Komodo National Park is located in the administrative area of ​​East Nusa Tenggara Province This national park consists of three large islands Komodo Island , Rinca Island , and Padar Island as well as several other small islands. The land area of ​​this national park is 603 km² and the total area is 1817 km². In 1980, this national park was established to protect the Komodo dragon and its habitat. In this national park there are 277 species of animals which are a mix of animals from Asia and Australia, consisting of 32 species of mammals, 128 species of birds, and 37 species of reptiles.',
   },
   {
      angka: '9',
      image1: '',
      image2: '',
      country: 'Raja Ampat',
      island: 'Papua',
      city: 'Papua Barat',
      name: 'Raja Ampat',
      image: 'https://cdn.discordapp.com/attachments/1027768625182027777/1032318625463418910/31.png',
      desc: 'The Raja Ampat Islands are a series of four adjacent island groups located in the western part of the Birds Head ( Vogelkoop ) Papua Island . Administratively, this group is under the Raja Ampat Regency , West Papua Province . These islands are now a destination for divers who are interested in the beauty of the underwater scenery. The four island groups that are members are named after the four largest islands, namely Waigeo Island , Misool Island , Salawati Island , and Batanta Island .',
   },
   {
      angka: '10',
      image1: '',
      image2: '',
      country: 'Bali',
      island: 'Bali',
      city: 'Bali',
      name: 'Bali',
      image: 'https://cdn.discordapp.com/attachments/1027768625182027777/1032318625819922574/11.png',
      desc: 'Bali ( Balinese : ) is a province in Indonesia whose capital is Denpasar . The province of Bali is located in the western part of the Nusa Tenggara Islands . At the beginning of Indonesias independence, this island was included in the Lesser Sunda Province with Singaraja as its capital , and is now divided into 3 provinces, namely Bali, West Nusa Tenggara and East Nusa Tenggara . [9] [10] In 2020 , the population of the province of Bali was 4,317,404 people, with a density of 747 people/km 2 . [4]',
   },
   // 
   {
      angka: '11',
      image1: '',
      image2: '',
      country: 'Pink Beach',
      island: 'Nusa Tenggara Barat',
      city: 'Mataram',
      name: 'Pink Beach',
      image: 'https://cdn.discordapp.com/attachments/1032636744237068328/1032887123407274014/DESAIN_GRAFIS_2.png',
      desc: '',
   },
   {
      angka: '12',
      image1: '',
      image2: '',
      country: 'Treasure Bay Bintan',
      island: 'Kepulauan Riau',
      city: 'Riau',
      name: 'Treasure Bay Bintan',
      image: 'https://cdn.discordapp.com/attachments/1032636744237068328/1032637142205214760/14.png',
      desc: 'Tangsi Beach or better known as Pink Beach from Lombok Island is located in Sekaroh village, Jerowaru sub - district, East Lombok district is an interesting tourist destination and deserves to be visited because of its uniqueness. [1] [2] This beach is one of seven beaches in the world that have pink sand beaches, and one of only two beaches in Indonesia that have pink sand beaches.',
   },
   {
      angka: '13',
      image1: '',
      image2: '',
      country: 'Patung Seribu',
      island: 'Kepulauan Riau',
      city: 'Tanjung Pinang',
      name: 'Patung Seribu',
      image: 'https://cdn.discordapp.com/attachments/1032636744237068328/1032637142758871092/15.png',
      desc: 'The Buddha of Bamiyan was once a monument consisting of two standing Buddha statues carved into the side of a ravine in the Bamiyan valley , in central Afghanistan . The location of the statue is approximately 230 km northwest of Kabul at an altitude of 2500 meters. Most likely these statues were made in the 5th or 6th century and are a classic blend of Greek style art and Buddhist art .',
   },
   {
      angka: '14',
      image1: '',
      image2: '',
      country: 'Pantai Trikora',
      island: 'Kepulauan Riau',
      city: 'Pulau Bintan',
      name: 'Pantai Trikora',
      image: 'https://cdn.discordapp.com/attachments/1032636744237068328/1032637143283150901/16.png',
      desc: 'Trikora Beach is one of the beaches with white sand located on the island of Bintan , Riau Islands , Indonesia . This natural beach has gentle waves with beautiful rocks on the beach. Along the way to Trikora beach, there are neatly lined fishing villages, several luxury resorts , seagrass conservation areas, seafood restaurants , and mangrove forests . This beach has four parts, namely Trikora 1, 2, 3 (Trikot), and 4.',
   },
   {
      angka: '15',
      image1: '',
      image2: '',
      country: 'Danau Biru Kawal',
      island: 'Kepulauan Riau',
      city: 'Pulau Bintan',
      name: 'Danau Biru Kawal',
      image: 'https://cdn.discordapp.com/attachments/1032636744237068328/1032637144134582282/17.png',
      desc: 'Lake Sunye ( Burmese : ; also spelled Sont Lake ), also known as Sunye In ( Burmese : ), is a natural, freshwater lake located near Kyaukse and Sintgaing , an inland inundated body of water measuring approximately 4 square miles ( 10 km 2 ) and is also known as the " Little Inle ". [1] The Shan Yoma Mountains are located east of the Lake. Lake Sunye is a tourist destination and is famous for the lotus flowers that bloom in the rainy season and the migratory birds in the winter . [2] [3] [4] The lake is designated as a protected wetland to preserve and regulate development. ',
   },
   {
      angka: '16',
      image1: '',
      image2: '',
      country: 'Bukit Merese',
      island: 'Nusa Tenggara Barat',
      city: 'Lombok',
      name: 'Bukit Merese',
      image: 'https://cdn.discordapp.com/attachments/1032636744237068328/1032637144621133914/18.png',
      desc: 'Tanjung Aan Beach is a white sandy beach located in the Special Economic Zone (SEZ) of Mandalika, Central Lombok Regency, West Nusa Tenggara Province.',
   },
   {
      angka: '17',
      image1: '',
      image2: '',
      country: 'Pantai Kuta Mandalika',
      island: 'Nusa Tenggara Barat',
      city: 'Lombok',
      name: 'Pantai Kuta Mandalika',
      image: 'https://cdn.discordapp.com/attachments/1032636744237068328/1032637145795526697/19.png',
      desc: 'Kuta Beach, Lombok is a tourist spot on the island of Lombok , West Nusa Tenggara Province , Indonesia . This beach with white sand like peppercorns is located in the Mandalika Special Economic Zone in Kuta Village. Kuta Beach is becoming known and initially developed as a tourist destination by PT. Rajawali Indonesia (BUMN, now ITDC) in the 1970s. Kuta Beach (Kute, local spelling) is indeed famous for its white sand which is different from most beaches in Indonesia.',
   },
   {
      angka: '18',
      image1: '',
      image2: '',
      country: 'Desa Adat Sade',
      island: 'Nusa Tenggara Barat',
      city: 'Lombok',
      name: 'Desa Adat Sade',
      image: 'https://cdn.discordapp.com/attachments/1032636744237068328/1032637146454044773/20.png',
      desc: '',
   },
   {
      angka: '19',
      image1: '',
      image2: '',
      country: 'Pulau Rinca',
      island: 'Nusa Tenggara Timur',
      city: 'Pulau Komodo',
      name: 'Pulau Rinca',
      image: 'https://cdn.discordapp.com/attachments/1032636744237068328/1032637149847232553/11.png',
      desc: 'Sade is one of the hamlets in the village of Rembitan, Pujut, Central Lombok . This hamlet is known as a hamlet that maintains the customs of the Sasak tribe. The Sasak Sade tribe is well known among tourists who come to Lombok. The local Tourism Office has made Sade a tourist village because of the uniqueness of Sade Village and the Sasak tribe that inhabits it. Even though it is located right next to a smooth asphalt highway, the residents of Sade Village in Rembitan, Central Lombok still hold fast to maintaining the authenticity of the village. ',
   },
   {
      angka: '20',
      image1: '',
      image2: '',
      country: 'Pulau Padar',
      island: 'Nusa Tenggara Timur',
      city: 'Flores',
      name: 'Pulau Padar',
      image: 'https://cdn.discordapp.com/attachments/1032636744237068328/1032637150396678224/12.png',
      desc: 'Padar Island is the third largest island in the Komodo National Park area , after Komodo Island and Rinca Island . The island is relatively closer to Rinca Island than to Komodo Island, which is separated by the Leech Strait . Padar Island is not inhabited by ora ( komodo dragon ). Around this island there are also three or four small islands. Padar Island is also accepted as a UNESCO World Heritage Site , because it is within the Komodo National Park area , along with Komodo Island , Rinca Island and Gili Motang .',
   },
   {
      angka: '21',
      image1: '',
      image2: '',
      country: 'Wae Rebo',
      island: 'Nusa Tenggara Timur',
      city: 'Flores',
      name: 'Wae Rebo',
      image: 'https://cdn.discordapp.com/attachments/1032636744237068328/1032637240838463580/21.png',
      desc: '',
   },
   {
      angka: '22',
      image1: '',
      image2: '',
      country: 'Danau Kelimutu',
      island: 'Nusa Tenggara Timur',
      city: 'Flores',
      name: 'Danau Kelimutu',
      image: 'https://cdn.discordapp.com/attachments/1032636744237068328/1032637241215942706/22.png',
      desc: '',
   },
   {
      angka: '23',
      image1: '',
      image2: '',
      country: 'Sumba',
      island: 'Nusa Tenggara Timur',
      city: 'Sumba',
      name: 'Sumba',
      image: 'https://cdn.discordapp.com/attachments/1032636744237068328/1032637241819926528/23.png',
      desc: '',
   },
   {
      angka: '24',
      image1: '',
      image2: '',
      country: 'Pulau Manado Tua',
      island: 'Sulawesi Utara',
      city: 'Manado',
      name: 'Pulau Manado Tua',
      image: 'https://cdn.discordapp.com/attachments/1032636744237068328/1032915961172463638/DESAIN_GRAFIS_3.png',
      desc: '',
   },
   {
      angka: '25',
      image1: '',
      image2: '',
      country: 'Danau Sentani',
      island: 'Papua',
      city: 'Jayapura',
      name: 'Danau Sentani',
      image: 'https://cdn.discordapp.com/attachments/1032636744237068328/1032637242562330674/25.png',
      desc: '',
   },
   {
      angka: '26',
      image1: '',
      image2: '',
      country: 'Candi Borobudur',
      island: 'Jawa',
      city: 'Magelang',
      name: 'Candi Borobudur',
      image: 'https://cdn.discordapp.com/attachments/1032636744237068328/1032637242885287996/26.png',
      desc: '',
   },
   {
      angka: '27',
      image1: '',
      image2: '',
      country: 'Candi Prambanan',
      island: 'Jawa',
      city: 'Klaten',
      name: 'Candi Prambanan',
      image: 'https://cdn.discordapp.com/attachments/1032636744237068328/1032637243229229117/27.png',
      desc: '',
   },
   {
      angka: '28',
      image1: '',
      image2: '',
      country: 'Pulo Cinta',
      island: 'Gorontalo',
      city: 'Gorontalo',
      name: 'Pulo Cinta',
      image: 'https://cdn.discordapp.com/attachments/1032636744237068328/1032637243560575057/28.png',
      desc: '',
   },
   {
      angka: '29',
      image1: '',
      image2: '',
      country: 'Taman Nasional Ujung Kulon',
      island: 'Jawa',
      city: 'Banten',
      name: 'Taman Nasional Ujung Kulon',
      image: 'https://cdn.discordapp.com/attachments/1032636744237068328/1032637243925475398/29.png',
      desc: '',
   },
   {
      angka: '30',
      image1: '',
      image2: '',
      country: 'Nusa Penida',
      island: 'Bali',
      city: 'Bali',
      name: 'Nusa Penida',
      image: 'https://cdn.discordapp.com/attachments/1032636744237068328/1032640268685557770/DESAIN_GRAFIS_1.png',
      desc: '',
   }

];

var products = '',
   countrys = '',
   islands = '',
   citys = '',
   descs = '',
   image1s = '',
   image2s = '',
   angkas = '';
   

for (var i = 0; i < data.length; i++) {
   var country = data[i].country,
      island = data[i].island,
      city = data[i].city,
      name = data[i].name,
      url = data[i].url,
      angka = data[i].angka,
      image1 = data[i].image1,
      image2 = data[i].image2,
      desc = data[i].desc,
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
      "' data-desc='" +
      desc +
      "' data-image1='" +
      image1 +
      "'data-image2='" +
      image2 +
      "'> <img class='card-imga1 ' style='width: 100%; height: 100%;' src='" +
      image +
      "'>   </a><br /> <div class='card-infoa1'> <p class='text-titlea1'> " +
      name +
      " </p> <button class='buttonns2' type='button' data-bs-toggle='offcanvas' data-bs-target='#offcanvasBottom" +
      angka +
      "' aria-controls='offcanvasBottom'>Read More</button> </div></div>   <div class='offcanvas offcanvas-bottom h-100 text-bg-dark' tabindex='-1' id='offcanvasBottom" +
      angka +
      "' aria-labelledby='offcanvasBottomLabel' id='offcanvs'><div class='offcanvas-header'><h1 class='offcanvas-title m-auto judul' id='offcanvasBottomLabel' >" +
      name +
      "</h1><button type='button' class='btn-close' data-bs-dismiss='offcanvas' aria-label='Close' style='background-color: #A6D6E3;'></button></div><div class='offcanvas-body small'><section><div><div class='container'><h2 class='text-center marg-judul judul1' >DESCRIPTION</h2><div class='row d-flex justify-content-center'><div class='col-md-6'><div id='carouselExampleIndicators' class='carousel slide carousel-fade' data-bs-ride='true'><div class='carousel-inner'><div class='carousel-item active'><img src='" +
      image1 +
      "' class='d-block w-75' alt='...' /></div></div></div></div><div class='col-md-6 d-flex align-items-center'><p class='fs-5 text-light' style='text-align: justify;'>" +
      desc +
      "</p></div></div></div></div><div class='pt-5 pb-5'><div class='container'><h2 class='text-center marg-judul judul1' >TRAVEL PRICE</h2><div class='row d-flex justify-content-center'><div class='col-md-6 d-flex align-items-center'><p class='fs-4 text-light' align='center' style='color: white;'><table class='table text-light text-center'><thead><tr><th scope='col'>PEOPLE</th><th scope='col'>HOTEL</th><th scope='col'>TRANSPORT</th><th scope='col'>DURATION</th></tr></thead><tbody><tr><td>1</td><td>Rp2.330.000</td><td>Rp1.000.000 - Rp2.000.000</td><td>5 Day</td></tr><tr><td>2</td><td>Rp2.650.000 / People</td><td>Rp1.000.000 - Rp2.000.000</td><td>5 Day</td></tr><tr><td>5</td><td>Rp2.330.000 / People</td><td>Rp1.000.000 - Rp2.000.000</td><td>5 Day</td></tr><tr><td>6 - 10</td><td>Rp2.140.000 / People</td><td>Rp1.000.000 - Rp2.000.000</td><td>5 Day</td></tr></tbody></table></p></div><div class='col-md-6'><div id='carouselExampleIndicators' class='carousel slide carousel-fade' data-bs-ride='true'><div class='carousel-inner'><div class='carousel-item active'><img src='" +
      image2 +
      "' class='d-block w-75' style='margin-left: 25%;' alt='...' /></div></div></div></div></div></div></div><div><div class='container'><h2 class='text-center marg-judul judul1' >REVIEW</h2><main class='mainreview'><section class='containerreview'><article class='reviewreview'><div class='img-containerreview'><img src='https://cdn.discordapp.com/attachments/1032636744237068328/1032933065254785045/girlprof.png' alt='' id='person-imgreview' class='imgreview' /></div><h4 id='authorreview'>Arthurito</h4><p id='jobreview'>ux designer</p><p id='inforeview'>Known as the party island, is the most developed of the three gilis and also offers great snorkeling/diving spots. You can get almost everything here. Nice accomodation, chill vibes, bars, delicious foods, and of course party. Backpacker friendly, you can find cheap accomodation here from around IDR 100.000/night</p><div class='button-containerreview'><button class='prev-btn btnreview'><i class='fas fa-chevron-left'></i></button><button class='next-btn btnreview'><i class='fas fa-chevron-right'></i></button></div></article></section></main></div></div></section><section></section></div></div>";

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
 
 