import axios from "axios"

export async function get_all_selecta() {
    const response = await axios.get('/api/get_all_selecta')
    return response.data;
}

export async function create_selecta(data) {
  const response = await axios.post('/api/create_selecta',{
    data:data
  })
  return response.data;
}

export async function delete_selecta(id) {
  const response = await axios.delete('/api/delete_selecta/'+id)
  return response.data;
}

export async function update_selecta(data) {
  const response = await axios.post('/api/update_selecta',{
    data:data
  })
  return response.data;
}

export async function move_to_selecta_report(data) {
  const response = await axios.post('/api/move_to_selecta_report',{
    data:data
  })
  return response.data;
}