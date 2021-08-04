import { AppState } from "../AppState"
import { Picture } from "../models/Picture"
import { nasaApi } from "./Axios"




class PicturesService{
 
async getPictures(query){
  try {
    const res = await nasaApi.get('apod?api_key=eSiTFhhy7WCqknhfbCLmoGGfEgvKewnmMsNH6lZh&date='+query)
    console.log(res.data)
    AppState.activePicture = new Picture(res.data)
    } catch (error) {
      console.error(error)
    }
 
  }


setActivePicture(picture){
  console.log('setting picture', picture)
  AppState.activePicture = picture
}


}

export const picturesService = new PicturesService()