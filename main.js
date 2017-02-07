 $(document).ready(function()
    {
        $('.dhead').on('click', function()
        {
            $(this).closest('.color-block').children().last().slideToggle("slow");
        });
    });
