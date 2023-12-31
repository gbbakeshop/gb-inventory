export async function get_all_charge(data) {
  const response = await axios.post('/api/get_all_charge',data)
  return response.data;
}

export async function create_charge(data) {
  const response = await axios.post('/api/create_charge',{
    data:data
  })
  return response.data;
}

export async function delete_charge(data) {
  const response = await axios.post('/api/delete_charge',{
    data:data
  })
  return response.data;
}

export async function update_charge(data) {
  const response = await axios.post('/api/update_charge',{
    data:data
  })
  return response.data;
}