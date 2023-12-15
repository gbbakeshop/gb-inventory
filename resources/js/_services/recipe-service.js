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

export async function edit_recipe_bread_token(data) {
  const response = await axios.post('/api/edit_recipe_bread_token',{
    data:data
  })
  return response.data;
}

export async function edit_recipe_raw_materials_token(data) {
  const response = await axios.post('/api/edit_recipe_raw_materials_token',{
    data:data
  })
  return response.data;
}

export async function edit_recipe(data) {
  const response = await axios.post('/api/edit_recipe',{
    data:data
  })
  return response.data;
}
