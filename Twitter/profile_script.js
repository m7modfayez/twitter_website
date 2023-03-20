const tweetBtn = document.getElementById("publishTweet");
const newTweet = document.querySelector('.new-tweet');
const input = document.getElementById("tweetText");
const input2 = document.getElementById("tweetText2");

const dialog = document.getElementById("dialog");
const dia_tweet = document.getElementById("dialog_tweet");
const tweetBtn2 = document.getElementById("publishTweet2")
const Close = document.getElementById("closeBtn");
const Close_editDIA = document.getElementById("closeBtn2");

const editBTN = document.getElementById("editBTN");
const edit_dialog = document.getElementById("edit_dialog");
const input_edit = document.getElementById("input_edit");
const input_name = document.getElementById("input_name");
const naame = document.getElementById("name");
const bio = document.getElementById("bio");
const bio_name = document.getElementById("bio_name");
const bio_text = document.getElementById("bio_text");
const location_div = document.getElementById("location");
const location_name = document.getElementById("location_name");
const location_text = document.getElementById("location_text");
const site = document.getElementById("site");
const site_name = document.getElementById("site_name");
const site_link = document.getElementById("site_link");
const saveBTN = document.getElementById("saveBTN");
const profile_name = document.getElementById("profile_name");
const Bio = document.getElementById("Bio");
const Location = document.getElementById("Location");




const followBtn = document.getElementById("follow_button");

naame.value = "Mahmoud Fayez";
bio_text.value = "CS@SHA";
location_text.value = "Cairo, Egypt";


followBtn.addEventListener('click', follow)
function follow()  {
    if(followBtn.className=="follow_box2")
    {
        // followBtn.innerHTML="Follow";
        followBtn.className = 'follow_box'
    }
    else{
        // followBtn.innerHTML="";
        followBtn.className = 'follow_box2'
    }                
};

editBTN.addEventListener('click', () => {
    edit_dialog.showModal();

})

Close_editDIA.addEventListener('click', () => {
    edit_dialog.close();
});
document.body.addEventListener('click', (event) => {
    if(event.target == edit_dialog)
    {
        edit_dialog.close();
    }
 });

 document.body.addEventListener('click', (event) => {
    if(event.target == input_edit || event.target == naame)
    {
        console.log("aaa");
        input_edit.style.border = "#359dff 2px solid";
        input_name.style.color = "#359dff"
        
        bio.style.border = "#a7a7a7 1px solid";
        bio_name.style.color = "#817d7d";
        location_div.style.border = "#a7a7a7 1px solid";
        location_name.style.color = "#817d7d";
        site.style.border = "#a7a7a7 1px solid";
        site_name.style.color = "#817d7d";
        naame.focus();
    }
    else if(event.target == bio || event.target == bio_text)
    {
        bio.style.border = "#359dff 2px solid";
        bio_name.style.color = "#359dff"

        input_edit.style.border = "#a7a7a7 1px solid";
        input_name.style.color = "#817d7d";
        location_div.style.border = "#a7a7a7 1px solid";
        location_name.style.color = "#817d7d";
        site.style.border = "#a7a7a7 1px solid";
        site_name.style.color = "#817d7d";
        bio_text.focus();

    }
    else if(event.target == location_div || event.target == location_text)
    {
        location_div.style.border = "#359dff 2px solid";
        location_name.style.color = "#359dff"

        input_edit.style.border = "#a7a7a7 1px solid";
        input_name.style.color = "#817d7d";
        bio.style.border = "#a7a7a7 1px solid";
        bio_name.style.color = "#817d7d";
        site.style.border = "#a7a7a7 1px solid";
        site_name.style.color = "#817d7d";
        location_text.focus();
    }
    else if(event.target == site || event.target == site_link)
    {
        site.style.border = "#359dff 2px solid";
        site_name.style.color = "#359dff"
        input_edit.style.border = "#a7a7a7 1px solid";
        input_name.style.color = "#817d7d";
        bio.style.border = "#a7a7a7 1px solid";
        bio_name.style.color = "#817d7d";
        location_div.style.border = "#a7a7a7 1px solid";
        location_name.style.color = "#817d7d";

        site_link.focus();
    }
   
    
    else{
        input_edit.style.border = "#a7a7a7 1px solid";
        input_name.style.color = "#817d7d";
        bio.style.border = "#a7a7a7 1px solid";
        bio_name.style.color = "#817d7d";
        location_div.style.border = "#a7a7a7 1px solid";
        location_name.style.color = "#817d7d";
        site.style.border = "#a7a7a7 1px solid";
        site_name.style.color = "#817d7d";
    }
 });


dia_tweet.addEventListener('click', () => {
   dialog.showModal();
   
});

Close.addEventListener('click', () => {
    dialog.close();
});

//closing dialog
document.body.addEventListener('click', (event) => {
    if(event.target == dialog)
    {
        dialog.close();
    }
 });



// tweetBtn.disabled = true;
// if (input.value == "")
// {
//     tweetBtn.disabled = true;
// }
if (input2.value == "")
{
    tweetBtn2.disabled = true;
}


//     const inputHandler = function(e) {
//         console.log(e.target.value);
//     if (e.target.value == "")
//     {
//         tweetBtn.disabled = true;
//         tweetBtn.style.opacity=0.6;
//     }
//     else
//     {
//         tweetBtn.disabled = false;
//         tweetBtn.style.opacity=1;
//     }
// }

const inputHandler2 = function(e) {
    console.log(e.target.value);
if (e.target.value == "")
{
    tweetBtn2.disabled = true;
    tweetBtn2.style.opacity=0.6;
}
else
{
    tweetBtn2.disabled = false;
    tweetBtn2.style.opacity=1;
}

}

//  input.addEventListener('input', inputHandler);
 input2.addEventListener('input', inputHandler2);


// input.addEventListener("keypress", function(event) {
// if (event.key === "Enter") {
//     event.preventDefault();
//     document.getElementById("publishTweet").click();
// }
// });


// tweetBtn.addEventListener("click", Fun ) 
tweetBtn2.addEventListener("click", Fun ) 

function Fun() {
    console.log("click");
    var tweetDiv = document.createElement("div");
    var tweetlist = document.getElementById("tweetList");
    var tweetText = input2.value;     
    var tweetContent =  `
    <div id="tweetList">
    <div class="tweet">
        <img style="margin: 9px 12px 0 16px;" src="https://pbs.twimg.com/profile_images/1503753062355292170/Nx9rJeio_400x400.jpg" class="acc-img">
        <p class="prof_name">Mahmoud fayez</p>
        <p class="prof_name2">@m7mud_fayz . Just Now</p>
        <p style="word-wrap: break-word; width: 80%; font-size: 15px; padding: 0 30px 0 75px;">${tweetText}</p>
        <a href=""><svg width="17px" style="float:left; padding: 26px 10px 0px 12%;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M256 32C114.6 32 .0272 125.1 .0272 240c0 47.63 19.91 91.25 52.91 126.2c-14.88 39.5-45.87 72.88-46.37 73.25c-6.625 7-8.375 17.25-4.625 26C5.818 474.2 14.38 480 24 480c61.5 0 109.1-25.75 139.1-46.25C191.1 442.8 223.3 448 256 448c141.4 0 255.1-93.13 255.1-208S397.4 32 256 32zM256.1 400c-26.75 0-53.12-4.125-78.38-12.12l-22.75-7.125l-19.5 13.75c-14.25 10.12-33.88 21.38-57.5 29c7.375-12.12 14.37-25.75 19.88-40.25l10.62-28l-20.62-21.87C69.82 314.1 48.07 282.2 48.07 240c0-88.25 93.25-160 208-160s208 71.75 208 160S370.8 400 256.1 400z"/></svg> </a>
        <a href=""><svg width="19px" style="padding: 26px 10px 0px 19%;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d="M629.657 343.598L528.971 444.284c-9.373 9.372-24.568 9.372-33.941 0L394.343 343.598c-9.373-9.373-9.373-24.569 0-33.941l10.823-10.823c9.562-9.562 25.133-9.34 34.419.492L480 342.118V160H292.451a24.005 24.005 0 0 1-16.971-7.029l-16-16C244.361 121.851 255.069 96 276.451 96H520c13.255 0 24 10.745 24 24v222.118l40.416-42.792c9.285-9.831 24.856-10.054 34.419-.492l10.823 10.823c9.372 9.372 9.372 24.569-.001 33.941zm-265.138 15.431A23.999 23.999 0 0 0 347.548 352H160V169.881l40.416 42.792c9.286 9.831 24.856 10.054 34.419.491l10.822-10.822c9.373-9.373 9.373-24.569 0-33.941L144.971 67.716c-9.373-9.373-24.569-9.373-33.941 0L10.343 168.402c-9.373 9.373-9.373 24.569 0 33.941l10.822 10.822c9.562 9.562 25.133 9.34 34.419-.491L96 169.881V392c0 13.255 10.745 24 24 24h243.549c21.382 0 32.09-25.851 16.971-40.971l-16.001-16z"/></svg></a>
        <a href=""><svg width="17px" style="padding: 22px 10px 0px 18%;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"/></svg></a>
        <a href=""><svg width="17px" style="padding: 22px 10px 0px 17%;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M246.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 109.3V320c0 17.7 14.3 32 32 32s32-14.3 32-32V109.3l73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 53 43 96 96 96H352c53 0 96-43 96-96V352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V352z"/></svg></a>
        <p></p>
    </div>`
    tweetDiv.innerHTML = tweetContent;

    tweetlist.prepend(tweetDiv);
    // input.value="";
    input2.value="";
    console.log(tweetDiv);
    dialog.close();
    // tweetBtn.disabled = true;
    // tweetBtn.style.opacity=0.6;
    tweetBtn2.style.opacity=0.6;

};


 //save Button in edit dialog   
 saveBTN.addEventListener("click", () => {
    if(naame.value == "" || bio_text.value == "" || location_text.value == "")
    {
        edit_dialog.close();
        return;
    }
    profile_name.innerHTML = naame.value;
    Bio.innerHTML = bio_text.value;
    Location.innerHTML = location_text.value;
    edit_dialog.close();

 })