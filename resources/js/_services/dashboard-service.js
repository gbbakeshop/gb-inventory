export async function get_total_records(data) {
  const response = await axios.post('/api/get_total_records',data)
  return response.data;
}