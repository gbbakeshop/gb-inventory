async function a(e){return(await axios.post("/api/create_new_records",{data:e})).data}async function o(e){return(await axios.post("/api/get_bakers_report_record/"+e.branch_id+"/"+e.baker_id)).data}async function s(e){return(await axios.post("/api/get_bread_report_record/"+e.branch_id+"/"+e.baker_id)).data}async function t(e){return(await axios.post("/api/get_sales_report_record",e)).data}async function n(e){return(await axios.post("/api/move_record_to_bread_report",{data:e})).data}async function _(e){return(await axios.post("/api/move_record_to_sales_report",{data:e})).data}async function c(e){return(await axios.post("/api/edit_new_production_record",{data:e})).data}async function p(e){return(await axios.post("/api/edit_bread_report_record",{data:e})).data}export{s as a,t as b,p as c,_ as d,c as e,a as f,o as g,n as m};
