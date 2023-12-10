import axios from "axios"

export async function create_raw_materials_group(data,groupName) {
  const response = await axios.post('/api/create_raw_materials_group',{
    data:data,
    groupName:groupName
  })
  return response.data;
}