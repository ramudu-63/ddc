

$(document).ready(function(){
	var url = document.URL;
	var param = url.split('=');
	//var email = param[1];
	//alert(param[1]);
			
	$("#hiddenEmail").val(param[1]);
});


jQuery(function($) {
	//editables on first profile page
	$.fn.editable.defaults.mode = 'inline';
	$.fn.editableform.loading = "<div class='editableform-loading'><i class='ace-icon fa fa-spinner fa-spin fa-2x light-blue'></i></div>";
	$.fn.editableform.buttons = '<button type="submit" class="btn btn-info editable-submit"><i class="ace-icon fa fa-check"></i></button>'+
	                            '<button type="button" class="btn editable-cancel"><i class="ace-icon fa fa-times"></i></button>';    
	// My profile		                                
	    $('#firstname')
			.editable({
				type: 'text',
				name: 'username'
			});    
	    
	    $('#lastname')
	    	.editable({
	    		type: 'text',
	    		name: 'lastname'
	    	});
	    
	   /* $('#gender')
    	.editable({
    		type: 'text',
    		name: 'gender'
    	});*/

	    var gender = [];
	    $.each({ "male": "Male", "female": "Female"}, function(k, v) {
	        gender.push({id: k, text: v});
	    });
	    
	    $('#gender').editable({
	    	type: 'select2',
	    	value: 'male',
	    	source: gender,
	    	select2: {
	    		'width': 140
	    	}
	    
	    });
	    
	    $('#age')
    	.editable({
    		type: 'text',
    		name: 'age'
    	});
	    
	    $('#highschool')
    	.editable({
    		type: 'text',
    		name: 'highschool'
    	});
	    
	    $('#university')
    	.editable({
    		type: 'text',
    		name: 'university'
    	});
	    
	    $('#education')
    	.editable({
    		type: 'text',
    		name: 'education'
    	});
	    
	    //My partner profile
	    
	    $('#pfirstname')
    	.editable({
    		type: 'text',
    		name: 'pfirstname'
    	});
	    
	    $('#plastname')
    	.editable({
    		type: 'text',
    		name: 'plastname'
    	});
	    
	    $('#pgender')
    	.editable({
    		type: 'text',
    		name: 'pgender'
    	});
	    
	    $('#page')
    	.editable({
    		type: 'text',
    		name: 'page'
    	});
	    
	    $('#phighschool')
    	.editable({
    		type: 'text',
    		name: 'phighschool'
    	});
	    
	    $('#puniversity')
    	.editable({
    		type: 'text',
    		name: 'puniversity'
    	});
	    
	    $('#peducation')
    	.editable({
    		type: 'text',
    		name: 'peducation'
    	});
	    
	    //Aboutus
	    
	    $('#children')
    	.editable({
    		type: 'text',
    		name: 'children'
    	});
	    
	    $('#aucity')
    	.editable({
    		type: 'text',
    		name: 'aucity'
    	});
	    
	    $('#austate')
    	.editable({
    		type: 'text',
    		name: 'austate'
    	});
	    
	   /* $('#auanniversary')
    	.editable({
    		type: 'text',
    		name: 'auanniversary'
    	});*/
	    
	    $('#auanniversary').editable({
			type: 'adate',
			date: {
				//datepicker plugin options
				    format: 'yyyy/mm/dd',
				viewformat: 'yyyy/mm/dd',
				 weekStart: 1
				 
			}
		})
	    
	    //combined preferences
	    
	    $('#cfage')
    	.editable({
    		type: 'text',
    		name: 'cfage'
    	});
	    
	    $('#cfethnicity')
    	.editable({
    		type: 'text',
    		name: 'cfethnicity'
    	});
	    
	    $('#cfreligion')
    	.editable({
    		type: 'text',
    		name: 'cfreligion'
    	});
	    
	    $('#cfcity')
    	.editable({
    		type: 'text',
    		name: 'cfcity'
    	});
	    
	    $('#cfstate')
    	.editable({
    		type: 'text',
    		name: 'cfstate'
    	});
	    
	    $('#cfcountry')
    	.editable({
    		type: 'text',
    		name: 'cfcountry'
    	});
});   


