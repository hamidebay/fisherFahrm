
const EU = [
  "Norway",
  "United Kingdom",
  "Poland",
  "France",
  "Italy",
  "GREECE",
  "Spain",
];

const notEU = ["Japan", "Egypt", "Vietnam"];

const SWISS_ROMANDE = ["BE", "FR", "GE", "NE", "VD"];
const fishFarm = [
  {
    fishType: "Salmon",
    price: 15.7,
    entryDate: new Date(2021, 0, 1), // 01.01.2021
    durationInDays: 30,
    itemWeightInGrams: 145,
    originCountry: "Norway",
    season: "Winter",
    stockVolumeInKg: 6500,
    saleLocations: ["ZH", "GE", "BE", "VD"],
  },
  {
    fishType: "Seatrout",
    price: 7.9,
    entryDate: new Date(2021, 11, 12), // 12.12.2021
    durationInDays: 20,
    itemWeightInGrams: 460,
    originCountry: "Japan",
    season: "Winter",
    stockVolumeInKg: 1600,
    saleLocations: ["GL", "GR", "BE", "VS"],
  },
  {
    fishType: "Sailfish",
    price: 5.2,
    entryDate: new Date(2021, 3, 19),
    durationInDays: 15,
    itemWeightInGrams: 240,
    originCountry: "United Kingdom",
    season: "Spring",
    stockVolumeInKg: 500,
    saleLocations: ["ZH", "SH", "BL", "SO"],
  },
  {
    fishType: "Red Drum",
    price: 3.1,
    entryDate: new Date(2021, 5, 15),
    durationInDays: 18,
    itemWeightInGrams: 300,
    originCountry: "Poland",
    season: "Summer",
    stockVolumeInKg: 15500,
    saleLocations: ["FR", "GE", "NE", "TI"],
  },
  {
    fishType: "Pompano",
    price: 10,
    entryDate: new Date(2021, 8, 17),
    durationInDays: 20,
    itemWeightInGrams: 645,
    originCountry: "France",
    season: "Autumn",
    stockVolumeInKg: 1500,
    saleLocations: ["ZH", "GE", "BE", "VD"],
  },
  {
    fishType: "Bluefish",
    price: 13.7,
    entryDate: new Date(2021, 10, 11),
    durationInDays: 5,
    itemWeightInGrams: 845,
    originCountry: "Italy",
    season: "Winter",
    stockVolumeInKg: 200,
    saleLocations: ["NW", "OW", "UR", "LU"],
  },
  {
    fishType: "Mackerel",
    price: 8.9,
    entryDate: new Date(2021, 6, 18),
    durationInDays: 16,
    itemWeightInGrams: 150,
    originCountry: "GREECE",
    season: "Summer",
    stockVolumeInKg: 8100,
    saleLocations: ["AG", "BL", "BE", "VD", "TG"],
  },
  {
    fishType: "Perch",
    price: 11.9,
    entryDate: new Date(2021, 10, 1),
    durationInDays: 30,
    itemWeightInGrams: 222,
    originCountry: "Egypt",
    season: "Summer",
    stockVolumeInKg: 9500,
    saleLocations: ["TI", "GE", "ZH", "VD", "AR"],
  },
  {
    fishType: "Mullet",
    price: 4.8,
    entryDate: new Date(2021, 2, 14),
    durationInDays: 30,
    itemWeightInGrams: 333,
    originCountry: "Vietnam",
    season: "Summer",
    stockVolumeInKg: 600,
    saleLocations: ["ZH", "GE", "BE", "VD"],
  },
  {
    fishType: "Tuna",
    price: 19.5,
    entryDate: new Date(2021, 0, 1),
    durationInDays: 30,
    itemWeightInGrams: 250,
    originCountry: "Spain",
    season: "Winter",
    stockVolumeInKg: 2300,
    saleLocations: ["ZH", "VD", "BS", "TI", "SG"],
  },
];
function summitElements(total, num) {
  return total + num;
}

function findFishsOverVolumes() {
  let fish = fishFarm.filter((fishes) => fishes.stockVolumeInKg > 500);
  let fishNames = fish.map((pFish) => {
    console.log(pFish.fishType);
  });
  return fishNames;
}

function filterFishForPrice() {
  let costsSpace = fishFarm.filter(
    (pPrice) => pPrice.price > 9 && pPrice.price < 12
  );
  let fishNames = costsSpace.map((pFish) => {
    console.log(pFish.fishType);
  });

  return fishNames;
}
function findFishsFromBern() {
  let fishsOfBern = [];
  fishFarm.filter((fish) => {
    if (fish.season == "Winter") {
      fish.saleLocations.filter((place) => {
        if (place == "BE") {
          fishsOfBern.push(fish);
        }
      });
    }
  });
  return fishsOfBern;
}

function sortLastUseDate() {
  let newList = [];
  fishFarm.map((day) => {
    day.entryDate.setDate(day.entryDate.getDate() + day.durationInDays);
    let lastUseDate = new Date(day.entryDate);
    newList.push({ date: lastUseDate, name: day.fishType });
  });
  console.log(newList);
  return newList;
}

let newListToSort = sortLastUseDate().sort(function (a, b) {
  return a.date.getTime() - b.date.getTime();
});

function selectFishsFromEu() {
  let country = [];
  let fish = fishFarm.filter((fishes) => {
    if (fishes.price < 10) {
      if (fishes.originCountry != "Vietnam") {
        if (fishes.originCountry != "Egypt") {
          if (fishes.originCountry != "Japan") {
            country.push(fishes);
          }
        }
      }
    }
  });
  console.log(country);
}

function sumFishStock() {
  let stock = [];
  let fishStock = fishFarm.map((stockAmount) =>
    stock.push(stockAmount.stockVolumeInKg)
  );
  let sum = stock.reduce(summitElements);
  return sum;
}

function findHeihestPrice() {
  let priceArray = [];
  let fishPrice = fishFarm.map((cost) => priceArray.push(cost.price));
  let maxPrice = priceArray.reduce(function (a, b) {
    return Math.max(a, b);
  });
  let expensiveFish = fishFarm.filter((fish) => {
    if (fish.price == maxPrice) {
      console.log(
        "teuerste Fisch ist: " +
          fish.fishType +
          " und Kostet : " +
          fish.price +
          "CHF"
      );
    }
  });
  return expensiveFish;
}

function selectFishsWithLongDuration() {
  let fishs = [];
  let fishDuration = fishFarm.map((duration) =>
    fishs.push(duration.durationInDays)
  );
  let maxDuration = fishs.reduce(function (a, b) {
    return Math.max(a, b);
  });
  let longDuration = fishFarm.filter((fish) => {
    if (fish.durationInDays == maxDuration) {
      console.log(
        "En uzun dayanan balik: " +
          fish.fishType +
          " geldigi ülke : " +
          fish.originCountry
      );
    }
  });
  return longDuration;
}

function selectFishPriceFromSwissRomande() {
  let winterAutummFishs = [];
  fishFarm.filter((fish) => {
    if (fish.season == "Autumn" || fish.season == "Winter") {
      fish.saleLocations.filter((place) => {
        if (
          place == "VD" ||
          place == "BE" ||
          place == "FR" ||
          place == "NE" ||
          place == "GE"
        ) {
          {
            if (winterAutummFishs.includes(fish.price) == false) {
              winterAutummFishs.push(fish.price);
            }
          }
        }
      });
    }
  });
  let sum = winterAutummFishs.reduce(summitElements);
  console.log(
    "Kis/Sonbahar sezonu swiss romande de satilan ortalama balik fiyati: " +
      Math.round((sum / winterAutummFishs.length) * 100) / 100
  );
  return sum;
}

function findFishstockFromTicino() {
  let fishTI = [];
  let ListOfTicino = fishFarm.filter((fish) => {
    let ticinosFish = fish.saleLocations.filter((place) => {
      if (place == "TI") {
        fishTI.push(fish.stockVolumeInKg);
      }
    });
  });
  let sum = fishTI.reduce(summitElements);
  console.log("Ticino icin balik stogu: " + sum);
  return sum;
}

function findNotEUFishs() {
  let fishsOfNonEU = [];
  let notEUFishs = fishFarm.filter((fish) => {
    if (fish.season == "Summer") {
      if (
        fish.originCountry == "Vietnam" ||
        fish.originCountry == "Egypt" ||
        fish.originCountry == "Japan"
      ) {
        let placeZurich = fish.saleLocations.filter((place) => {
          if (place == "ZH") {
            fishsOfNonEU.push(fish.itemWeightInGrams);
          }
        });
      }
    }
  });
  let sum = fishsOfNonEU.reduce(summitElements);
  console.log(
    "Avrupa birligi disindan gelen ve zürichte yazin satilan baliklarin ortalama gramaji: " +
      sum / fishsOfNonEU.length
  );
  return sum;
}

console.log("ödev 1: Stokta 500 kg üzerinde olan baliklar: ");
findFishsOverVolumes();
console.log("ödev 2:9 Frank ile 12 Frank araliginda olan baliklar: ");
filterFishForPrice();
console.log("ödev 3: Bernde ve kisin satilan baliklar: ");
console.log(findFishsFromBern());
console.log("ödev 4: Son kullanma tarihine göre siralanmis balik listesi:");
sortLastUseDate();
console.log("ödev 5: EU da satilan 10 Frankin altindaki baliklar: ");
selectFishsFromEu();
console.log("ödev 6: Toplam balik stogu: " + sumFishStock() + "kg");
findHeihestPrice();
selectFishsWithLongDuration();
selectFishPriceFromSwissRomande();
findFishstockFromTicino();
findNotEUFishs();
