 $(document).ready(function()
    {
        $('.dhead').on('click', function()
        {
            $(this).closest('.color-block').find('.slider').slideToggle("slow");
        });
        $('.getPrice').on('click', function(){
            var price = $(this).closest('.color-block').find('.slider').data('price');
            var amount = $(this).closest('.color-block').find('#amount').val();
            var totalPrice;
            console.dir(amount);
            if (amount >= 10 ) {
                totalPrice = price * amount * 0.5;
            }
            else if ( amount >= 3 ) {
                totalPrice = price * amount * 0.7;
            }
            else if ( amount >= 1 ) {
                totalPrice = price * amount;
            }
            else if ( amount == 0 ) {
                totalPrice = price;
            };
            var message = $('<br>Это будет стоить ' + totalPrice.toFixed(2) + '₴</br>');
            $(this).closest('.slider').append(message);
            $(this).prev().prev().remove();
            $(this).prev().remove();
            $(this).remove();
        });
    });
