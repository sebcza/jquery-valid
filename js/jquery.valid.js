(function ($) {
    'use strict';
        $.fn.validateText = function (ex) {
            $(this).change(function () {
                ex = new RegExp(ex);
                if(ex.test($(this).val())){
                    $(this).addClass("success");
                    $(this).removeClass("error");
                    $(this).parent().find("button[type='submit']").attr("disabled", false);
            } else {
                $(this).addClass("error");
                $(this).removeClass("success");
                 $(this).parent().find("button[type='submit']").attr("disabled", true);
            }
        });           
            return this;
    };
}(jQuery));