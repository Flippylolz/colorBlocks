 $(document).ready(function()
    {
        $('.dhead').on('click', function()
        {
            $(this).closest('.color-block').children().last().slideToggle("slow");
        });
        $('.getPrice').on('click', function(){
            var block = $(this).closest('.slider');//.children().last().prev();
            var price = $(this).closest('.color-block').children().first().next().data('price');
            var message = $('<span>Это будет стоить ' + price + ' гривен</span>');
            block.append(message);
            $(this).remove();
            // console.dir(price);
        });
    });
