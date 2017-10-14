const store = {drivers: [], passengers: [], trips: []}

let driverCounter = 1

class Driver{
  constructor(name){
    this.id = driverCounter++;
    this.name = name;
    store["drivers"].push(this)
  }

  trips(){
    return store.trips.filter(x => x.driverId === this.id)
  }

  passengers(){
    const passengerArray = [];
    const newTrips = this.trips();
    for(const ele of newTrips){
      let a = store.passengers.find(x => x.id === ele.passengerId)
      passengerArray.push(a)
    }
    return passengerArray
  }
}

let passengerCounter = 1

class Passenger{
  constructor(name){
    this.id = passengerCounter++;
    this.name = name;
    store["passengers"].push(this)
  }

  trips(){
    return store.trips.filter(x => x.passengerId === this.id)
  }

  drivers(){
    const driverArray = [];
    const newTrips = this.trips();
    for(const ele of newTrips){
      let a = store.drivers.find(x => x.id === ele.driverId)
      driverArray.push(a)
    }
    return driverArray
  }
}


let tripCounter = 1

class Trip{
  constructor(driver, passenger){
    this.id = tripCounter++;
    if(driver){
      this.driverId = driver.id
    }
    if(passenger){
      this.passengerId = passenger.id
    }
    store["trips"].push(this)
  }

  driver(){
    return store.drivers.find(x => x.id === this.driverId)
  }

  passenger(){
    return store.passengers.find(x => x.id === this.passengerId)

  }
}
