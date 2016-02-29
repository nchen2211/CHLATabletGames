//pop out definition

    ;(function($) {

         // DOM Ready
        $(function() {
            
            $('#part_one').bind('click', function(e) {

                // Prevents the default action to be triggered. 
                e.preventDefault();

                // Triggering bPopup when click event is fired
                $('#Explanation1').bPopup();
		$('#Explanation').bPopup();

	   });

	   $('#part_two').bind('click', function(e) {

                // Prevents the default action to be triggered. 
                e.preventDefault();

                // Triggering bPopup when click event is fired
                $('#Explanation2').bPopup();

            });

	   $('#part_three').bind('click', function(e) {

                // Prevents the default action to be triggered. 
                e.preventDefault();

                // Triggering bPopup when click event is fired
                $('#Explanation3').bPopup();

            });

        });

    })(jQuery);




