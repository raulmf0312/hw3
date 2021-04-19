// Code that runs when the page finishes loading
document.addEventListener('DOMContentLoaded', async function() {
  // retrieves data from rides API endpoint
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // selects a random ride
  let ride = json[Math.floor(Math.random() * json.length)]

  // writes random ride to the JavaScript console
  console.log(ride)

  // 🔥 YOUR CODE GOES HERE 🔥
  // Write the recipe (algorithm) in the comments. Then, write the code.


  // PASSENGER DETAILS INFORMATION

  // Retrieve the first name from the object, store it in memory.
  let passengerFirst = ride.passengerDetails.first

  // Display the first name in the console.
  console.log(`First Name: ${passengerFirst}`)
  
  // Retrieve the last name from the object, store it in memory.
  let passengerLast = ride.passengerDetails.last

  // Display the last name in the console.
  console.log(`Last Name: ${passengerLast}`)

  // Retrieve the phone number from the object, store it in memory.
  let passengerPhoneNumber = ride.passengerDetails.phoneNumber

  // Display the phone number in the console.
  console.log(`Phone Number: ${passengerPhoneNumber}`)


  // PICKUP INFORMATION

  // Retrieve the pickup location address from the object, store it in memory.
  let pickupLocationAddress = ride.pickupLocation.address

  // Display the pickup location address in the console.
  console.log(`Pickup Location Address: ${pickupLocationAddress}`)

  // Retrieve the pickup location city from the object, store it in memory.
  let pickupLocationAddressCity = ride.pickupLocation.city

  // Display the pickup location city in the console.
  console.log(`Pickup Location City: ${pickupLocationAddressCity}`)

  // Retrieve the pickup location state from the object, store it in memory.
  let pickupLocationAddressState = ride.pickupLocation.state

  // Display the pickup location state in the console.
  console.log(`Pickup Location State: ${pickupLocationAddressState}`)

  // Retrieve the pickup location zip code from the object, store it in memory.
  let pickupLocationAddressZip = ride.pickupLocation.zip

  // Display the pickup location zip code in the console.
  console.log(`Pickup Location Zip Code: ${pickupLocationAddressZip}`)


  // DROPOFF INFORMATION

  // Retrieve the dropoff location address from the object, store it in memory.
  let dropoffLocationAddress = ride.dropoffLocation.address

  // Display the dropoff location address in the console.
  console.log(`Dropoff Location Address: ${dropoffLocationAddress}`)

  // Retrieve the dropoff location city from the object, store it in memory.
  let dropoffLocationAddressCity = ride.dropoffLocation.city

  // Display the dropoff location city in the console.
  console.log(`Dropoff Location City: ${dropoffLocationAddressCity}`)

  // Retrieve the dropoff location state from the object, store it in memory.
  let dropoffLocationAddressState = ride.dropoffLocation.state

  // Display the dropoff location state in the console.
  console.log(`Dropoff Location State: ${dropoffLocationAddressState}`)

  // Retrieve the dropoff location zip code from the object, store it in memory.
  let dropoffLocationAddressZip = ride.dropoffLocation.zip

  // Display the dropoff location zip code in the console.
  console.log(`Dropoff Location Zip Code: ${dropoffLocationAddressZip}`)


  // PASSENGER NUMBER

  // Retrieve the dropoff location zip code from the object, store it in memory.
  let passengerNumber = ride.numberOfPassengers

  // Display the dropoff location zip code in the console.
  console.log(`Number of Passengers: ${passengerNumber}`)


  // REQUEST FOR LUXURY CAR - "NOOBER PURPLE"

  // Retrieve the luxury car request from the object, store it in memory.
  let passengerPurpleRequest = ride.purpleRequested

  // Display the dropoff location zip code in the console.
  console.log(`Request for Noober Purple: ${passengerPurpleRequest}`)


  // TYPE OF RIDE 

  let rideType = [`Purple`,`XL`,`X`]
  let rideTypeName = ``

  if (passengerPurpleRequest == true){
    console.log (`Type of Ride: ${rideType[0]}`)
    rideTypeName = rideType[0]
  } else if (passengerNumber > 3){
    console.log (`Type of Ride: ${rideType[1]}`)
    rideTypeName = rideType[1]
  } else{
    console.log (`Type of Ride: ${rideType[2]}`)
    rideTypeName = rideType[2]    
  }


  // Display the data given in a summary format.
  console.log(`Summary of Ride Order  ---- Noober ${rideTypeName} Passenger: ${passengerFirst} ${passengerLast} - ${passengerPhoneNumber}. Pickup at ${pickupLocationAddress}, ${pickupLocationAddressCity}, ${pickupLocationAddressState} ${pickupLocationAddressZip}. Dropoff at ${dropoffLocationAddress}, ${dropoffLocationAddressCity}, ${dropoffLocationAddressState} ${dropoffLocationAddressZip}.`)


  // 🔥 YOUR CODE ENDS HERE 🔥
})
