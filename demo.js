function countServices(jsonString) {
  const data = JSON.parse(jsonString)
  const services = {}
  for (const [service, amount] of data) {
    if (!services[service]) {
      services[service] = []
    }
    services[service].push(amount)
  }
  let count = 0;
  for (const service in services) {
    if (!services[service].some(amount => amount >= 200)) {
      count++;
    }
  }
  return count
}
const jsonString = [
  ["Swiggy", 123],
  ["Swiggy", 227],
  ["Zomato", 103],
  ["Zomato", 171],
  ["Dunzo", 131],
  ["Zomato", 122],
  ["Swiggy", 181]
]
const result = countServices(jsonString)