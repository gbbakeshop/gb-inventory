export async function create_bread_group(data,groupName) {
  const response = await axios.post('/api/create_bread_group',{
    data:data,
    groupName:groupName
  })
  return response.data;
}