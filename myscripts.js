$(document).ready(()=>{
	var a=0;
	$("#plus").click(()=>{
  if(a<10){
    a=a+1;
    changeColor(a)
    $("#minus").prop('disabled', false);
  }else{
    $("#plus").prop('disabled', true);
  }
  $("#count").text(a)
})
	$("#minus").click(()=>{
  if(a>0){
    a=a-1;
    changeColor(a)
    $("#plus").prop('disabled', false);
  }else{
    $("#minus").prop('disabled', true);
  }
  $("#count").text(a)
})
	$("#reset").click(()=>{
		a=0;
		changeColor(a)
		 $("#plus").prop('disabled', false);
		  $("#minus").prop('disabled', false);
		$("#count").text(a)
	})
})
function changeColor(t)
{
	if(t%2!=0)
	{
	$("#box").removeClass("bg-primary");
    $("#box").addClass("bg-dark");
    $("#head").removeClass("text-dark");
    $("#head").addClass("text-white");
    $("#count").addClass("text-danger");
    $("#reset").addClass("btn-outline-warning");
	}
	else
	{
	$("#box").removeClass("bg-dark");
    $("#box").addClass("bg-primary");
    $("#head").removeClass("text-white");
    $("#head").addClass("text-dark");
    $("#count").removeClass("text-danger");
    $("#count").addClass("text-white");
    $("#reset").removeClass("btn-outline-warning");	
	}
}