

export async function get_branch_account(data) {
  const response = await axios.post('/api/get_branch_account',data)
  return response.data;
}


export async function get_all_account() {
  const response = await axios.get('/api/get_all_account')
  return response.data;
}

export async function create_account(data) {
  const response = await axios.post('/api/create_account',data)
  return response.data;
}

export async function update_account(data) {
  const response = await axios.post('/api/update_account',{
    data:data
  })
  return response.data;
}


export async function delete_account(data) {
  const response = await axios.post('/api/delete_account',{
    data:data
  })
  return response.data;
}

