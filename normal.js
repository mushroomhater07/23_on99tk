
// const fs = require('fs');
// var fr = new FileReader();
var objs, objs1;
var starindex
var gayindex;
$(document).ready(async()=>{
  await getdata();
  
  $("#loadmore").click(async()=>{
    $("#loadmore").html("loading.")
    for (let index = 0; index < 6; index++) {
      await sleep(300)
      $("#loadmore").append(".")
    } 
    $("#loadmore").html("Load More")
    for (let index = 0; index < 5; index++) {
      newcontent(); //load more on click
    }
  });

})
$(document).on("click", "button", function(e){ //search
  var txt = $(this).text().trim();
  var search = $("#searchon").val().trim();    
    if(txt == "PH viewer"){
      if(search.length != 0){
        search = search.replace(" ","+")
        window.location.href=`https://www.pornhub.com/video/search?search=${search}`;
      }else{
        alert("are you fking kidding me?")
      }
      
    }else if(txt == "xhamster"){
      if(search.length != 0){
        search = search.replace(" ","+")
        window.location.href=`https://xhamster.com/search/${search}`;
      }else{
        alert("are you fking kidding me?")
      }
      
    }
  });

  


function getdata(){
  $.get(" raw_profile.csv", (data)=>{objs = d3.csvParse(data);
    starindex = Math.floor(Math.random() * objs.length)});
  $.get(" hi.txt", (data)=>{objs1 = d3.tsvParse(data); console.log(objs1)
    gayindex = Math.floor(Math.random() * objs1.length)

for (let index = 0; index < 5; index++) {
    newcontent();
    }footer();footerlink()

  });
}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function newcontent(){try {
  // for (let index = 0; index < 5; index++) {
    $("#content1").append(`          
    <div class="column">
      <div class="callout">
        <p>${objs1[gayindex].poster}</p>
      	<p onclick="show(${gayindex})" id="link${gayindex}"><img src="${objs1[gayindex].thumbnail}" alt="your internet sucks"></p>
        <p class="lead">${objs1[gayindex].title}</p>
        <p class="subheader">${objs1[gayindex].cat}</p>
        <p class="subheader">${objs1[gayindex].view} views 
        <pre style="color:green;"><i class="fa-solid fa-thumbs-up"></i> ${objs1[gayindex].like} </pre>
        <pre style="color:red;"><i class="fa-solid fa-thumbs-down"></i>${objs1[gayindex].dislike}</pre></p>
      </div>
    </div>
    `)
      gayindex ++;
    } catch (error) {
      gayindex = 0;
    }
    
}
function footer(){
    $("#footer1").append(`
    <div class="small-5 large-5 columns" >
      <p class="lead">Pornstar</p>
      <ul class="menu vertical m1">
      </ul>
    </div>
    `) 
}
function footerlink(){
	try{
		$(".m1").html("")
		for (let index = 0; index < 6; index++) {
			$(".m1").append(`<li><a onclick="star(${starindex})">${objs[starindex].Name}</a></li>`);
			starindex++;
		}
}catch{
	starindex=0;
}
}
function show(e){
    $(`#link${e}`).html(objs1[e].iframe);

    console.log(e)
  }
	function star(e){
		// $('#myModal').foundation('reveal', 'open');
		var data1="";
		// console.log(objs.columns)
		objs.columns.forEach(element => {
			if(objs[e][element].trim() !=""){
				data1 +=`${element}:${objs[e][element]} <br>`;
		}
			});
		$("#stardetail").html(data1)
	$.ajax('').done((resp)=>{
		$("#reveal1").html(resp.html).foundation('open');
	})
	}