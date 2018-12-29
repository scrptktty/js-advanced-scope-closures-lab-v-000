function produceDrivingRange(blockRange) {
  return function (start, end) {
    const distance = parseInt(end, 10) - parseInt(start, 10)
    if (blockRange > distance) {
      return `within range by ${blockRange - distance}`
    } else {
      return `${distance - blockRange} blocks out of range`
    }
  }
}

function produceTipCalculator(tip) {
  return function (fare) {
    return fare  * tip
  }
}

function createDriver(name) {
  let driverId = 0
  return function Driver(name) {
    this.name = name
    this.id = driverId++
  }
}
