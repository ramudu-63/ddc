$(document).ready(function(){
	
	/*forgot Password*/
	
	$("#forgot").click(function(){
		//alert("hi");
		var email = $("#forgotEmail").val(); 
		$.ajax({
		      type: "POST",
		     // contentType : 'application/json; charset=utf-8',
		      contentType : "application/text",
		      dataType : 'text',
		      url: "forgotPassword?email="+email,
		    //  data: JSON.stringify(search), // Note it is important
		      success :function(result) {
		    	 // alert("success : "+result);
		    	  $("#forgotMsg").html(result);
		       // do what ever you want with data
		     },
		     error : function(error) {
		    	 alert("error :"+ JSON.stringify(error));
		     }
		  });
		
		
	});
	
	/*Reset fields*/
	
	$("#forgotBack").click(function(){
		$("#forgotMsg").empty();
		$("#forgotEmail").val("");
	});
	
	/*Register user*/
	
	$("#register").click(function(){
		
		alert($("#userName").val());
		var result = {
				"userName" : $("#userName").val(),
				"password" : $("#password").val(),
				"email" : $("#email").val(),
				"SQuestion" : $("#SQuestion").val(),
				"answer" : $("#answer").val()
		};
		alert(JSON.stringify(result));
		
		
		$.ajax({
		      type: "POST",
		      url: "userRegistration",
		      async: true,
		      data : result,
		     
		      success :function(results) {
		    	 alert("success : "+results);
		    	 window.location.replace("/ddc/welcome");
		    	// location.reload();
//		    	 $("#registerMsg").html("your successfully registered").css({color:"green"});
		     },
		     error : function(error) {
		    	 alert("error :"+ JSON.stringify(error));
		     }
		  });
		
	});
	
	
	
});


function valFunction()
{
	var interests=[] ;
	var things=[];
	var i=0;
	$('.ace:checked').each(function(){
       // alert($(this).val());
        interests[i] = $(this).val();
        i++;
	});
	
	$('.things:checked').each(function(i){
        //alert($(this).val());
        things[i] = $(this).val();
	});
	var register = {
			"fname" : $("#fname").val(),
			"lname" : $("#lname").val(),
			"gender" : $("#gender").val(),
			"dob" : $("#dob").val(),
			"highSchool" : $("#highSchool").val(),
			"college" : $("#college").val(),
			"educationObtained" : $("#educationObtained").val(),
			
			"partnerfname" : $("#partnerfname").val(),
			"partnerlname" : $("#partnerlname").val(),
			"partnergender" : $("#partnergender").val(),
			"partnerdob" : $("#partnerdob").val(),
			"partnerhighSchool" : $("#partnerhighSchool").val(),
			"partnercollege" : $("#partnercollege").val(),
			"partnereducationObtained" : $("#partnereducationObtained").val(),
			
			"relationshipStatus" : $("#relationshipStatus").val(),
			"numberOfChildern" : $("#numberOfChildern").val(),
			"childrenStatus" : $("#childrenStatus").val(),
			"anniversary" : $("#anniversary").val(),
			"ethinicity" : $("#ethinicity").val(),
			"interests" : interests,
			"thingsliketodos" : things,
			
			"preferedFromAge" : $("#preferedFromAge").val(),
			"preferedToAge" : $("#preferedToAge").val(),
			"preferedEthinicity" : $("#preferedEthinicity").val(),
			"preferedReligion" : $("#preferedReligion").val(),
			"city" : $("#pcity").val(),
			"state" : $("#state").val(),
			"country" : $("#pcountry").val()
	}
	
	alert(JSON.stringify(register));
	
	$.ajax({
	      type: "POST",
	      url: "coupleCreation",
	      data : register,
	      
	      
	     
	      success :function(results) {
	    	  alert("success : "+JSON.stringify(results));
	      },
	      error : function(error) {
	    	  alert("error : "+JSON.stringify(error));
	      }
	      
	});
	
}