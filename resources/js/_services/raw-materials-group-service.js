import axios from "axios"




export async function delete_raw_materials(id) {
  const response = await axios.delete('/api/delete_raw_materials/'+id)
  return response.data;
}


export async function delete_specific_raw_materials_group(id) {
  const response = await axios.delete('/api/delete_specific_raw_materials_group/'+id)
  return response.data;
}

export async function get_all_raw_materials_group() {
  const response = await axios.get('/api/get_all_raw_materials_group')
  return response.data;
}


export async function update_raw_materials_group(data,groupName) {
  const response = await axios.post('/api/update_raw_materials_group',{
    data:data,
    groupName:groupName
  })
  return response.data;
}

export async function update_raw_materials_group_grams(data) {
  const response = await axios.post('/api/update_raw_materials_group_grams',{
    data:data
  })
  return response.data;
}

export async function create_raw_materials_group(data,groupName) {
  const response = await axios.post('/api/create_raw_materials_group',{
    data:data,
    groupName:groupName
  })
  return response.data;
}