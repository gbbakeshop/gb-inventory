

export async function get_branch_account(data) {
  const response = await axios.post('/api/get_branch_account',data)
  return response.data;
}