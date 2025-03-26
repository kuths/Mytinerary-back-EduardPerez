import 'dotenv/config.js'
import "../../config/database.js"
import City from '../city.js'

const Cities = [
  {
    name: "Bogotá",
    country: "Colombia",
    continent: "South America",
    currency: "Colombian Peso",
    img: "https://tse3.mm.bing.net/th?id=OIP.J8y5nzsvQUn-iELdW_qVewHaEK&pid=Api"
  },
  {
    name: "Paris",
    country: "France",
    continent: "Europe",
    currency: "Euro",
    img: "https://tse3.mm.bing.net/th?id=OIP.cew5Ub5da1dvZ1HzC9g2_QHaF-&pid=Api"
  },
  {
    name: "Tokyo",
    country: "Japan",
    continent: "Asia",
    currency: "Japanese Yen",
    img: "https://tse2.mm.bing.net/th?id=OIP.JQiLvfXfPROpPIW2SZY0gwHaE8&pid=Api"
  },
  {
    name: "New York",
    country: "United States",
    continent: "North America",
    currency: "US Dollar",
    img: "https://tse1.mm.bing.net/th?id=OIP.bP4IEtxA3iBTrHO8XCQDLAHaE7&pid=Api"
  },
  {
    name: "London",
    country: "United Kingdom",
    continent: "Europe",
    currency: "British Pound",
    img: "https://tse4.mm.bing.net/th?id=OIP.ApTI5c9tFD_KgB3o5-nXlwHaE8&pid=Api"
  },
  {
    name: "Sydney",
    country: "Australia",
    continent: "Australia",
    currency: "Australian Dollar",
    img: "https://tse2.mm.bing.net/th?id=OIP.3xkZsVqwuUmHcL482oHaUAHaE8&pid=Api"
  },
  {
    name: "Rome",
    country: "Italy",
    continent: "Europe",
    currency: "Euro",
    img: "https://tse1.mm.bing.net/th?id=OIP.W5uhQDtKFzC9tF3ggSuZEQHaE8&pid=Api"
  },
  {
    name: "Berlin",
    country: "Germany",
    continent: "Europe",
    currency: "Euro",
    img: "https://tse2.mm.bing.net/th?id=OIP.EWP3JgGQmHfxJhbeIzSaKAHaE8&pid=Api"
  },
  {
    name: "Moscow",
    country: "Russia",
    continent: "Europe",
    currency: "Russian Ruble",
    img: "https://tse3.mm.bing.net/th?id=OIP.TyY4F7F6SzcFtXe1KEyrtwHaEK&pid=Api"
  },
  {
    name: "Beijing",
    country: "China",
    continent: "Asia",
    currency: "Chinese Yuan",
    img: "https://tse1.mm.bing.net/th?id=OIP.w7lphrwyLgWvWCEctiS9QQHaEK&pid=Api"
  },
  {
    name: "Rio de Janeiro",
    country: "Brazil",
    continent: "South America",
    currency: "Brazilian Real",
    img: "https://tse2.mm.bing.net/th?id=OIP.c9MlUxUJT2ibuRzcIBqKLAHaE5&pid=Api"
  },
  {
    name: "Cape Town",
    country: "South Africa",
    continent: "Africa",
    currency: "South African Rand",
    img: "https://tse3.mm.bing.net/th?id=OIP.wneDEvt698R9SGqfIMibdQHaEb&pid=Api"
  },
  {
    name: "Toronto",
    country: "Canada",
    continent: "North America",
    currency: "Canadian Dollar",
    img: "https://tse3.mm.bing.net/th?id=OIP.tstYX8X8G0rK95gzKyuQNgHaE8&pid=Api"
  },
  {
    name: "Dubai",
    country: "United Arab Emirates",
    continent: "Asia",
    currency: "UAE Dirham",
    img: "https://tse3.mm.bing.net/th?id=OIP.7TGrX5UdzRHQL_VZRgGQ-gHaFj&pid=Api"
  },
  {
    name: "Singapore",
    country: "Singapore",
    continent: "Asia",
    currency: "Singapore Dollar",
    img: "https://tse2.mm.bing.net/th?id=OIP.inextwM2ai-13-4Q4-ed2gHaE7&pid=Api"
  }
]


City.insertMany(Cities)