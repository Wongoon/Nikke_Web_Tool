async function test(){
    const res = await fetch("https://api.blablalink.com/api/ugc/proxy/standalonesite/User/GetUserCharacters",
        {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                intl_open_id:"17416912059271956928",
                nikke_area_id:83
            })
        }
    );

    console.log(await res.text());
}

test();