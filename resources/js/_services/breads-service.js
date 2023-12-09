import axios from "axios"

export async function get_all_bread() {
    const response = await axios.get('/api/get_all_bread')
    return response.data;
}

export async function create_bread(data) {
  const response = await axios.post('/api/create_bread',{
    data:data
  })
  return response.data;
}

export async function delete_bread(id) {
  const response = await axios.delete('/api/delete_bread/'+id)
  return response.data;
}

export async function update_bread(data) {
  const response = await axios.post('/api/update_bread',{
    data:data
  })
  return response.data;
}