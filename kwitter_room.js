

var firebaseConfig = {
      apiKey: "AIzaSyBUXfjTlgk0QnQAwCAWy0WO1npnnQ8M4cg",
      authDomain: "chat-app-4c487.firebaseapp.com",
      databaseURL: "https://chat-app-4c487-default-rtdb.firebaseio.com",
      projectId: "chat-app-4c487",
      storageBucket: "chat-app-4c487.appspot.com",
      messagingSenderId: "550452602502",
      appId: "1:550452602502:web:7daf823ca44055f6c8d307",
      measurementId: "G-NS2QWVN5LD"
    };
    

    initializeApp(firebaseConfig);
   username=localStorage.getItem("user_name");
   document.getElementById("user_name").innerHTML="Welcome "+username+"!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      });});}
getData();
function addroom(){
      roomname=document.getElementById("room_name").value;
      firebase.database().ref("/").child(roomname).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",roomname);
      window.location="kwitter_page.html";
}
function redirectToRoomName(name){
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
      
}
 function logout(){
       localStorage.removeItem("user_name");
       localStorage.removeItem("room_name");
       window.location="index.html";
       
 }