import axios from "axios";


export async function get_all_recipe() {
  const response = await axios.get('/api/get_all_recipe')
  return response.data;
}


export async function create_recipe(data) {
  const response = await axios.post('/api/create_recipe',{
    data:data
  })
  return response.data;
}
