var name_of_people = [] ;
function submit(){
    var guest_name = document.getElementById("guest_name").value;
    name_of_people.push(guest_name);
    console.log(name_of_people);
    var length = name_of_people.length;
    console.log(length);
    document.getElementById("display_names").innerHTML=name_of_people.toString();
}
function sort1(){
    name_of_people.sort();
    console.log(name_of_people);
    document.getElementById("sorted").innerHTML =name_of_people.toString();
}
function show(){
    var i = name_of_people.join("<br>");
    console.log(name_of_people);
    document.getElementById("p1").innerHTML = i.toString();

}
function search(){
    var s= document.getElementById("search").value;
    var found=0;
    var j;
    for(j=0; j<names_of_people.length; j++)
    {
        if(s==names_of_people[j]){
            found=found+1;
        }
    }
    document.getElementById("p2").innerHTML="name found"+found+"time/s";
    console.log(found);
}