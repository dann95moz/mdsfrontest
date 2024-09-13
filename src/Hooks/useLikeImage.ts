import api from '../api/axios';

interface queryParams {
  id: number
}

const useLikeImage = () => ({id}:queryParams)=>{
  {
    return api.post(`${id}/likes`)
  }
}

export default useLikeImage
