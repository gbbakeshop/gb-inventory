export async function get_all_expenses(data) {
  const response = await axios.post('/api/get_all_expenses',data)
  return response.data;
}

export async function create_expenses(data) {
    const response = await axios.post("/api/create_expenses", {
      data:data
    });
    return response.data;
}
export async function delete_expenses(data) {
  const response = await axios.post('/api/delete_expenses',{
    data:data
  })
  return response.data;
}

export async function update_expenses(data) {
  const response = await axios.post('/api/update_expenses',{
    data:data
  })
  return response.data;
}