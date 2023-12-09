import axios from "axios"

export async function get_all_branch_raw_materials(id) {
    const response = await axios.get('/api/get_all_branch_raw_materials/'+id)
    return response.data;
}

export async function update_branch_raw_materials(data) {
  const response = await axios.post('/api/update_branch_raw_materials',{
    data:data
  })
  return response.data;
}