

export async function get_branch_account(data) {
  const response = await axios.post('/api/get_branch_account',data)
  return response.data;
}


export async function get_all_account() {
  const response = await axios.get('/api/get_all_account')
  return response.data;
}