import { nasaApi } from "./Axios";



class PicturesService{
  async getPicture( query = 'api_key=DEMO_KEY'){
    try {
      const res = await nasaApi.get('&query='+ query)
      console.log (res.data)
      
    }catch(error){
      console.error(error)
    }
  }
}
export const picturesService = new PicturesService