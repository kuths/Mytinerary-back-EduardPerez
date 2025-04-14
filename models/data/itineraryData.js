import 'dotenv/config.js';
import "../../config/database.js";
import City from '../city.js';
import Itinerary from '../itinerary.js';

const cityIds = {
  "Bogotá": "67e2dc23a728a59eb30967cc",
  "Paris": "67e2dc23a728a59eb30967cd",
  "Tokyo": "67e2dc23a728a59eb30967ce",
  "New York": "67e2dc23a728a59eb30967cf",
  "London": "67e2dc23a728a59eb30967d0",
  "Sydney": "67e2dc23a728a59eb30967d1",
  "Rome": "67e2dc23a728a59eb30967d2",
  "Berlin": "67e2dc23a728a59eb30967d3",
  "Moscow": "67e2dc23a728a59eb30967d4",
  "Cape Town": "67e2dc23a728a59eb30967d7",
  "Rio de Janeiro": "67e2dc23a728a59eb30967d6",
  "Dubai": "67e2dc23a728a59eb30967d9",
  "Singapore": "67e2dc23a728a59eb30967da"
};

const itineraries = [
  {
    name: "Sunset Sailing Tour",
    photo: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    price: "85",
    Hashtags: "#sunset #sailing #relax",
    cityId: cityIds["Rio de Janeiro"]
  },
  {
    name: "Historic City Walk",
    photo: "https://images.unsplash.com/photo-1606813902524-5b57cc4d16ec",
    price: "40",
    Hashtags: "#history #walking #culture",
    cityId: cityIds["Paris"]
  },
  {
    name: "Mountain Hiking Trail",
    photo: "https://images.unsplash.com/photo-1508780709619-79562169bc64",
    price: "70",
    Hashtags: "#hiking #adventure #views",
    cityId: cityIds["Sydney"]
  },
  {
    name: "Gourmet Food Tour",
    photo: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
    price: "60",
    Hashtags: "#foodie #tasting #local",
    cityId: cityIds["Rome"]
  },
  {
    name: "Museum & Art Crawl",
    photo: "https://images.unsplash.com/photo-1619603368507-b9ae6d3c61b2",
    price: "35",
    Hashtags: "#art #museum #culture",
    cityId: cityIds["London"]
  },
  {
    name: "Beach Relaxation Day",
    photo: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    price: "50",
    Hashtags: "#beach #sun #chill",
    cityId: cityIds["Cape Town"]
  },
  {
    name: "Hot Air Balloon Ride",
    photo: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d",
    price: "120",
    Hashtags: "#balloon #sky #thrill",
    cityId: cityIds["New York"]
  },
  {
    name: "City Night Lights Tour",
    photo: "https://images.unsplash.com/photo-1518301233291-c55f123f1b43",
    price: "45",
    Hashtags: "#nightlife #citylights #tour",
    cityId: cityIds["Tokyo"]
  },
  {
    name: "Countryside Bike Ride",
    photo: "https://images.unsplash.com/photo-1580910051076-2468d2efb212",
    price: "38",
    Hashtags: "#bike #nature #green",
    cityId: cityIds["Berlin"]
  },
  {
    name: "River Kayaking",
    photo: "https://images.unsplash.com/photo-1549924231-f129b911e442",
    price: "55",
    Hashtags: "#kayak #river #explore",
    cityId: cityIds["Singapore"]
  },
  {
    name: "Jungle Zipline Adventure",
    photo: "https://images.unsplash.com/photo-1533055640609-24b498cdfa97",
    price: "95",
    Hashtags: "#zipline #jungle #adrenaline",
    cityId: cityIds["Dubai"]
  },
  {
    name: "Wine Tasting Experience",
    photo: "https://images.unsplash.com/photo-1600185366502-f56cc6456d89",
    price: "65",
    Hashtags: "#wine #tasting #vineyard",
    cityId: cityIds["Moscow"]
  },
  {
    name: "Old Town Photo Tour",
    photo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    price: "42",
    Hashtags: "#photography #historic #tour",
    cityId: cityIds["Berlin"]
  },
  {
    name: "Cooking Class with Locals",
    photo: "https://images.unsplash.com/photo-1598514982586-cadf52e51cdd",
    price: "48",
    Hashtags: "#cooking #localfood #experience",
    cityId: cityIds["Rome"]
  },
  {
    name: "Underground Cave Exploration",
    photo: "https://images.unsplash.com/photo-1612437199990-6f0f8e772b88",
    price: "90",
    Hashtags: "#cave #explore #mystery",
    cityId: cityIds["Rio de Janeiro"]
  },
  {
    name: "Traditional Market Tour",
    photo: "https://images.unsplash.com/photo-1603570419982-83e7d9cd8b3f",
    price: "30",
    Hashtags: "#market #shopping #authentic",
    cityId: cityIds["Bogotá"]
  },
  {
    name: "Desert Safari Ride",
    photo: "https://images.unsplash.com/photo-1610914969827-6e5270caaae1",
    price: "110",
    Hashtags: "#desert #safari #thrill",
    cityId: cityIds["Dubai"]
  },
  {
    name: "Ice Climbing Expedition",
    photo: "https://images.unsplash.com/photo-1586802971514-15d40169b91c",
    price: "115",
    Hashtags: "#iceclimbing #snow #challenge",
    cityId: cityIds["Moscow"]
  },
  {
    name: "Temple and Shrine Tour",
    photo: "https://images.unsplash.com/photo-1549893072-30d3f67492ec",
    price: "50",
    Hashtags: "#temple #peace #spiritual",
    cityId: cityIds["Tokyo"]
  },
  {
    name: "Boat Cruise with Dinner",
    photo: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    price: "78",
    Hashtags: "#cruise #dinner #romantic",
    cityId: cityIds["New York"]
  }
];

Itinerary.insertMany(itineraries)

