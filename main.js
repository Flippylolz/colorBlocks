 $(document).ready(function()
    {
        $('.dhead').on('click', function()
        {
            $(this).closest('.color-block').find('.slider').slideToggle("slow");
        });
        $('.buyButton').on('click', function()
        {
            var price = $(this).closest('.color-block').find('.slider').data('price');
            var amount = $(this).closest('.color-block').find('#amount').val();
            var totalPrice = getPrice(price, amount);
            var message = "Ваш заказ на сумму " + totalPrice.toFixed(2) + " отправлен на обработку";
            alert(message);
        });
        $('.getPrice').on('click', function(){
            var price = $(this).closest('.color-block').find('.slider').data('price');
            var amount = $(this).closest('.color-block').find('#amount').val();
            var totalPrice = getPrice(price, amount);
            $(this).text(totalPrice.toFixed(2) + '₴');
        });
    });

function getPrice(price,amount) {
        var totalPrice = 0;
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
        return totalPrice;
    }
