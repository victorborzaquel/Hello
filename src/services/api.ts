import axios from "axios";

const ipApi = axios.create({
  baseURL: "http://ip-api.com/json"
})

const helloApi = axios.create({
  baseURL: "https://fourtonfish.com/hellosalut"
})

export { ipApi, helloApi }
