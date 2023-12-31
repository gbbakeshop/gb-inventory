export async function get_all_credit(data) {
  const response = await axios.post('/api/get_all_credit',data)
  return response.data;
}

export async function create_credit(data) {
  const response = await axios.post('/api/create_credit',{
    data:data
  })
  return response.data;
}

export async function delete_credit(data) {
  const response = await axios.post('/api/delete_credit',{
    data:data
  })
  return response.data;
}

export async function update_credit(data) {
  const response = await axios.post('/api/update_credit',{
    data:data
  })
  return response.data;
}