import{p as e}from"./app-7410adb6.js";async function r(a){return(await e.get("/api/get_all_selecta_branch/"+a)).data}async function n(a){return(await e.post("/api/get_selecta_branch_sales_report",{data:a})).data}export{r as a,n as g};