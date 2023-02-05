import axios from 'axios'
import { getUserLocalStorage } from '../context/AuthProvider/util'

export const Api = axios.create({
   baseURL: 'https://reqres.in/api/'
})

// "email": "eve.holt@reqres.in",
// "password": "cityslicka"

Api.interceptors.request.use(
   (config) => { // Roda essa função e manda em todas as requisçoes o Authorization
      const user = getUserLocalStorage()

      config.headers.Authorization = user?.token

      return config
   },
   (error) => {
      return Promise.reject(error)
   }
)