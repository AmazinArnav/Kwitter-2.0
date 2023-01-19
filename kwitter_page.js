//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyAPkQQwOLCtceLYXclBTFUAMZU3Dpx07A8",
      authDomain: "kwitter20-835f3.firebaseapp.com",
      projectId: "kwitter20-835f3",
      storageBucket: "kwitter20-835f3.appspot.com",
      messagingSenderId: "533738211094",
      appId: "1:533738211094:web:4945fffde81cddd7e1b237",
      measurementId: "G-R64TS5KZ7M"
    };
  
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    
    

user_name=message_data['username'];
message=message_data['message'];
like=message_data['like'];
name_with_tag='<h4>'+user_name+'<img class="user_tick" src="tick.png">';
message_with_tag='<h4 class="message_h4">'+message+'</h4>';
like_button='<button class="btn btn-warning" id='+firebase_message_id+' value='+like+' onclick="update_like(this.id)">';
span_with_tag='<span class="glyphicon glyphicon-thumbs-up">like:'+like+'</span> </button> <hr>';
row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;

//End code
getData();
      


function send(){
message=document.getElementById("message").value;
firebase.database().ref(room_name).push({
message:message,
like:0,
username:user_name
});


document.getElementById("message").value="";




} 
 function update_like(message_id){
       button_id=message_id
       likes=document.getElementById(button_id).value;
       updated_likes=Number(likes)+1;
       firebase.database().ref(room_name).child(message_id).update({
             like:updated_likes
       });
       }
       function logout(){

localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";

       }