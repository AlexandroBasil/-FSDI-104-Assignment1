var salon={
    name:"The Fashion Pet",
    address:{
        street:"Palm Ave",
        number:"927-G"
    },
    hour:{
        open:"9:00 am",
        close:"5:00 pm"
    },
    pets:[]
}
var c=0;
class Pet{
    constructor(name,age,gender,breed,service,ownerName,contactPhone){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.breed=breed;
        this.service=service;
        this.ownerName=ownerName;
        this.contactPhone=contactPhone;
        this.id=c++;
    }
}

// DISPLAY PET COMPLETE INFO UNDER REGISTRATION FUNCTION
function displayPet(){
    var tmp="";
    document.getElementById("info").innerHTML=`<p> Amount of pets: ${salon.pets.length} </p>`;
    for(var i=0;i<salon.pets.length;i++){
        // aPet=salon.pets[i];              YOU CAN USE aPet instead of salon.pets[i]... with this line of code
        tmp+=`
        <div id="${salon.pets[i].id}" Class="pet">
            <div class="pet-title">
                <p>Name: ${salon.pets[i].name}</p>
                <button onclick="deletePet(${salon.pets[i].id});">🗑️</button>
            </div>
            <p>Age: ${salon.pets[i].age}</p>
            <p>Gender: ${salon.pets[i].gender}</p>
            <p>Breed: ${salon.pets[i].breed}</p>
            <p>Service: ${salon.pets[i].service}</p>
            <p>Owner: ${salon.pets[i].ownerName}</p>
            <p>Contact: ${salon.pets[i].contactPhone}</p>
        </div>`}

    document.getElementById("pets").innerHTML=tmp;
}

// DELETE PET FUNCTION
function deletePet(id){
    var div=document.getElementById(id);
    for(var i=0;i<salon.pets.length;i++){
        var aPet=salon.pets[i];
        if (aPet.id==id) {
            deleteIndex=i;
        }
    }

    salon.pets.splice(deleteIndex,1);
    div.remove();
    displayPet();
}

// MAKE SURE NO EMPTY INPUTS FUNCTION
function validation(i1,i2,i3,i4,i5,i6,i7){
    if(i1!="" &&
        i2!="" &&
        i3!="" &&
        i4!="" &&
        i5!="" &&
        i6!="" &&
        i7!=""){
            var flag=true
        }
    return flag;
}

// REGISTER PET FUNCTION
function registerPet(){
// get and store value
    var inputName=document.getElementById("petName").value;
    var inputAge=document.getElementById("petAge").value;
    var inputGender=document.getElementById("petGender").value;
    var inputBreed=document.getElementById("petBreed").value;
    var inputService=document.getElementById("petService").value;
    var inputOwnerName=document.getElementById("petOwner").value;
    var inputPhone=document.getElementById("ownerPhone").value;
    //console.log(inputName,inputAge,inputGender,inputBreed,inputService,inputOwnerName,inputPhone)
    if (validation(inputName,inputAge,inputGender,inputBreed,inputService,inputOwnerName,inputPhone)){
// create generic object
    var thePet=new Pet(inputName,Number(inputAge),inputGender,inputBreed,inputService,inputOwnerName,inputPhone);
    console.log(thePet);
// push the objects into array
    salon.pets.push(thePet);
// clear the inputs
    clearInputs();
    displayPet();
    } else {
        alert("Enter Missing Values");
    }
}
// CLEAR INPUTS FUNCTION
function clearInputs(){
    document.getElementById("petName").value="";
    document.getElementById("petAge").value="";
    document.getElementById("petGender").value="";
    document.getElementById("petBreed").value="";
    document.getElementById("petOwner").value="";
    document.getElementById("ownerPhone").value="";
}

// ALWAYS RUNNING ON PAGE LOAD FUNCTION ??? // NOTE: "INIT" SHORTHAND FOR "INITIATE"
function init(){
    console.log("init");

    var scooby=new Pet("Scooby",50,"Male","Dane","Shower","Shaggy","619-420-4220");
    var scrappy=new Pet("Scrappy",35,"Male","Dane","Nails Clipped","Shaggy","619-420-4220");
    var polly=new Pet("Polly",100,"Female","Parrot","Beak Shine","Captain Black Beard","619-666-6666");
    var tod=new Pet("Tod",16,"Male","Fox","Fur Trim","Amos Slade","619-012-3456");

    salon.pets.push(scooby);
    salon.pets.push(scrappy);
    salon.pets.push(polly);
    salon.pets.push(tod);

    displayPet();
// HOOK EVENTS
    document.querySelector(`#btn-register`).addEventListener("click", registerPet);
}
window.onload=init;