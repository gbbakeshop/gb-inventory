
export async function create_new_records(data) {
  const response = await axios.post('/api/create_new_records',{
    data:data,
  })
  return response.data;
}

export async function get_bakers_report_record(data) {
  const response = await axios.post('/api/get_bakers_report_record/'+data.branch_id+'/'+data.baker_id)
  return response.data;
}

export async function get_bread_report_record(data) {
  const response = await axios.post('/api/get_bread_report_record/'+data.branch_id+'/'+data.baker_id)
  return response.data;
}

export async function get_sales_report_record(data) {
  const response = await axios.post('/api/get_sales_report_record',{
    data:data
  })
  return response.data;
}

export async function move_record_to_bread_report(data) {
  const response = await axios.post('/api/move_record_to_bread_report',{
    data:data
  })
  return response.data;
}