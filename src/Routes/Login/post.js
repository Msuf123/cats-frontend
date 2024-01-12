async function post(url,userName,password,resolve,reject){
 fetch(url,{method:'POST',credentials:'include',cros:true,headers:{'Content-Type':'application/json'},body:JSON.stringify({username:userName,password:password})}).then((res)=>{if(res.status){ return res.json()}
else{
    reject(res)
}
}).then((a)=>{

resolve(a)
}).catch((a)=>reject(a))
}
export default post