const axios = require('axios')
const tileSize = .025;


const create = async (latitude, longitude) => {
  latitude = Number(latitude)
  longitude = Number(longitude)
  const addedLong = (longitude + tileSize).toString()
  const subtractedLong = (longitude - tileSize).toString()
  const addedLat = (latitude + tileSize).toString()
  const subtractedLat = (latitude - tileSize).toString()
  const image = {}
  const defaultDate = "2015-08-20"

  const top_left_image = await axios.get(`https://api.nasa.gov/planetary/earth/imagery/?lon=${subtractedLong}&lat=${addedLat}&date=${defaultDate}&dim=${tileSize}&api_key=${process.env.API_KEY}`)
  const top_middle_image = await axios.get(`https://api.nasa.gov/planetary/earth/imagery/?lon=${longitude}&lat=${addedLat}&date=${defaultDate}&dim=${tileSize}&api_key=${process.env.API_KEY}`)
  const top_right_image = await axios.get(`https://api.nasa.gov/planetary/earth/imagery/?lon=${addedLong}&lat=${addedLat}&date=${defaultDate}&dim=${tileSize}&api_key=${process.env.API_KEY}`)

  const center_left_image = await axios.get(`https://api.nasa.gov/planetary/earth/imagery/?lon=${subtractedLong}&lat=${latitude}&date=${defaultDate}&dim=${tileSize}&api_key=${process.env.API_KEY}`)
  const center_image = await axios.get(`https://api.nasa.gov/planetary/earth/imagery/?lon=${longitude}&lat=${latitude}&date=${defaultDate}&dim=${tileSize}&api_key=${process.env.API_KEY}`)
  const center_right_image = await axios.get(`https://api.nasa.gov/planetary/earth/imagery/?lon=${addedLong}&lat=${latitude}&date=${defaultDate}&dim=${tileSize}&api_key=${process.env.API_KEY}`)

  const bottom_left_image = await axios.get(`https://api.nasa.gov/planetary/earth/imagery/?lon=${subtractedLong}&lat=${subtractedLat}&date=${defaultDate}&dim=${tileSize}&api_key=${process.env.API_KEY}`)
  const bottom_middle_image = await axios.get(`https://api.nasa.gov/planetary/earth/imagery/?lon=${longitude}&lat=${subtractedLat}&date=${defaultDate}&dim=${tileSize}&api_key=${process.env.API_KEY}`)
  const bottom_right_image = await axios.get(`https://api.nasa.gov/planetary/earth/imagery/?lon=${addedLong}&lat=${subtractedLat}&date=${defaultDate}&dim=${tileSize}&api_key=${process.env.API_KEY}`)

  image.top_left = top_left_image.data.url
  image.top_middle = top_middle_image.data.url
  image.top_right = top_right_image.data.url

  image.center_left = center_left_image.data.url
  image.center = center_image.data.url
  image.center_right = center_right_image.data.url

  image.bottom_left = bottom_left_image.data.url
  image.bottom_middle = bottom_middle_image.data.url
  image.bottom_right = bottom_right_image.data.url

  return image
}

module.exports = {
  create
}
