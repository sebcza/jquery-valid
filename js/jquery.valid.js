(function($) {
    'use strict';
    $.fn.validateText = function(ex) {
        $(this).change(function() {
            ex = new RegExp(ex);
            if (ex.test($(this).val())) {
                $(this).addClass("success");
                $(this).removeClass("error");

            } else {
                $(this).addClass("error");
                $(this).removeClass("success");

            }
            var counterError = 0;
            $(this).parent().find("input").each(function() {

                if ($(this).hasClass("error")) {
                    counterError++;
                    console.log("test");
                }
            });
            console.log(counterError);

            if (counterError > 0) {
                $(this).parent().find("button[type='submit']").attr("disabled", true);
            }
            else {
                $(this).parent().find("button[type='submit']").attr("disabled", false);
            }
        });
        return this;
    };
} (jQuery));