 $(document).ready(function()
    {
        $('.dhead').on('click', function()
        {
            $(this).closest('.color-block').children().last().slideToggle("slow");
        });
        $('.getPrice').on('click', function(){
            var price = $(this).closest('.color-block').children().first().next().data('price');
            var message = $('<span>Это будет стоить ' + price + ' гривен</span>');
            $(this).closest('.slider').append(message);
            $(this).remove();
        });
    });
