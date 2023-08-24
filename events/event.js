fetch("event.php",{
    method: "POST",
    headers:{
        "Content-Type":"application/json",
    },
    body:JSON.stringify({
}),
})
.then(response=>response.json())
.then(data=>{
    data.map(element=>{
        console.log(element);
        eventDiv=document.createElement('div');
        //add img for event
        img=document.createElement('img');
        imgDiv=document.createElement('div');
        img.setAttribute('src','./imgs/'+ element['image']);
        img.style.height='150px';
        imgDiv.appendChild(img);
        //add the name of the event
        nameP=document.createElement('p');
        nameP.textContent=element['name'];
        //add description
        descriptionP =document.createElement('p');
        descriptionP.textContent=element['description'];
        //date of the event
        dateP=document.createElement('p');
        dateP.textContent=element['date'];
        //#of participants 
        participantsP=document.createElement('p');
        participantsP.textContent=element['participants'];
        //button 
        btn=document.createElement('input');
        btn.setAttribute('type','button');
        btn.setAttribute('value','Roll in');
        //add username
        addUser=document.createElement('div');
        addUser.setAttribute('id',"addUser"+element['id']);
        text=document.createElement('input');
        text.setAttribute('type','text');
        text.setAttribute('id','usertext'+element['id']);
        addBtn=document.createElement('input');
        addBtn.setAttribute('type','button'); 
        addBtn.setAttribute('value','Add'); 
        addBtn.setAttribute('onclick','AddUser(' + element['id'] + ')'); 
        addUser.appendChild(text);
        addUser.appendChild(addBtn);
        divContainer=document.getElementById('container');
        divContainer.appendChild(imgDiv);
        divContainer.appendChild(nameP);
        divContainer.appendChild(descriptionP);
        divContainer.appendChild(dateP);
        divContainer.appendChild(participantsP);
        divContainer.appendChild(btn);
        divContainer.appendChild(addUser);
        addUser.style.display='none';
        btn.setAttribute('onclick','AddOne("addUser'+element['id']+'")');
    })
})
.catch(error=>{
    alert("Error:",error);
});

function AddOne(id){
    document.getElementById(id).style.display='block';
}

function AddUser(id){
    username= document.getElementById('usertext'+id).value;
    console.log(id,username);
    fetch("adduser.php",{
        method: "POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify({
            id:id,
            name:username,
    }),
    })
    .then(response=>response.json())
    .then(data=>{
        console.log(data);
        // window.location.href=('./event.html');
    })
    .catch(error=>{
        alert("Error:",error);
    });

}