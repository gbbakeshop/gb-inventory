
export async function get_all_bread_group() {
  const response = await axios.get('/api/get_all_bread_group')
  return response.data;
}


export async function create_bread_group(data,groupName) {
  const response = await axios.post('/api/create_bread_group',{
    data:data,
    groupName:groupName
  })
  return response.data;
}

export async function update_bread_group(data,groupName) {
  const response = await axios.post('/api/update_bread_group',{
    data:data,
    groupName:groupName
  })
  return response.data;
}

export async function delete_bread_group(id) {
  const response = await axios.delete('/api/delete_bread_group/'+id)
  return response.data;
}

export async function delete_specific_bread_group(id) {
  const response = await axios.delete('/api/delete_specific_bread_group/'+id)
  return response.data;
}