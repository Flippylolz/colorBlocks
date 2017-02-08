 $(document).ready(function()
    {
        $('.dhead').on('click', function()
        {
            $(this).closest('.color-block').children().last().slideToggle("slow");
        });
        $('.getPrice').on('click', function(){
            var price = $(this).closest('.color-block').find('.slider').data('price');
            var amount = $(this).closest('.color-block').find('#amount').val();
            var totalPrice = price * amount;
            if (totalPrice == 0) {totalPrice = price }
            var message = $('<br>Это будет стоить ' + totalPrice + ' гривен</br>');
            $(this).closest('.slider').append(message);
            $(this).remove();
            $(this).prev().remove();//не работает
        });
    });
