import axios from "axios"

export async function get_all_raw_materials() {
    const response = await axios.get('/api/get_all_raw_materials')
    return response.data;
}

export async function create_raw_materials(data) {
  const response = await axios.post('/api/create_raw_materials',{
    data:data
  })
  return response.data;
}

export async function delete_raw_materials(id) {
  const response = await axios.delete('/api/delete_raw_materials/'+id)
  return response.data;
}

export async function update_raw_materials(data) {
  const response = await axios.post('/api/update_raw_materials',{
    data:data
  })
  return response.data;
}