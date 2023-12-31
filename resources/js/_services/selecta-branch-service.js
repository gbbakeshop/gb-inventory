import axios from "axios"

export async function get_all_selecta_branch(id) {
    const response = await axios.get('/api/get_all_selecta_branch/'+id)
    return response.data;
}

export async function update_selecta_branch(data) {
  const response = await axios.post('/api/update_selecta_branch',{
    data:data
  })
  return response.data;
}

export async function get_selecta_branch_sales_report(data) {
  const response = await axios.post('/api/get_selecta_branch_sales_report',{
    data:data
  })
  return response.data;
}
