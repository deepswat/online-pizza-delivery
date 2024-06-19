
$(function () {
    $('.summary').hide();
    $('.custdata-overlay').hide();
    $('#online-delivery').hide();
    $("#checkout").click(function () {
        var flavour = $(".flavour option:selected").val();
        var size = $("#size option:selected").val();
        var crust = $("#crust option:selected").val();
        var topping = $("#toppings option:selected").val();
        var number = $(" #number").val();

        //Function order
        var order = (f, s, c, t, n, total) => {
            return {f, s, c, t, n, total};
        };

        //check price
        var price, totalPrice;
        switch (flavour) {
            case flavour = "vegtikka":
                switch (size) {
                    case size = "regular":
                        price = 300;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case size = "medium":
                        price = 600;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case size = "large":
                        price = 1200;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                }
                break;
            case flavour = "chickentikka":
                switch (size) {
                    case size = "regular":
                        price = 300;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case size = "medium":
                        price = 600;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case size = "large":
                        price = 1200;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                }
                break;
            case flavour = "periperi":
                switch (size) {
                    case size = "regular":
                        price = 300;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case size = "medium":
                        price = 600;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case size = "large":
                        price = 1200;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                }
                break;
            case flavour = "regina":
                switch (size) {
                    case size = "regular":
                        price = 300;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case size = "medium":
                        price = 600;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case size = "large":
                        price = 1200;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                }
                break;
                }
            switch (topping) {
                case topping = "tomato":
                    totalPrice = totalPrice + 80;
                    break;
                    case topping = "onions":
                    totalPrice = totalPrice + 80;
                    break;
            case topping = "mushroom":
                    totalPrice = totalPrice + 80;
                    break;
            case topping = "greenpepper":
                    totalPrice = totalPrice + 80;
                    break;
            case topping = "olives":
                    totalPrice = totalPrice + 120;
                    break;
            case topping = "pineapple":
                    totalPrice = totalPrice + 120;
                    break;
            case topping = "sweetcorn":
                    totalPrice = totalPrice + 120;
                    break;
            case topping = "macon":
                    totalPrice = totalPrice + 120;
                    break;
            case topping = "mince":
                    totalPrice = totalPrice + 120;
                    break;
            case topping = "beef":
                    totalPrice = totalPrice + 170;
                    break;
            case topping = "chicken":
                    totalPrice = totalPrice + 170;
                    break;
        }

        var newOrder = order(flavour, size, crust, topping, number, totalPrice);

        $('.summary').slideDown(2000);
        $('.cdata-overlay').slideUp();
        $('#sum-list').slideDown();
        $('.deliver').show(1000);
        $('.delivernot').show(1000);

        $('#sum-list').text(" ");
        $("#sum-list").append("<br>" + "Flavour :   " + newOrder.f + "<br>" + "Size :   "
            + newOrder.s + "<br>" + "Crust :     "
            + newOrder.c + "<br>" + "Toppings :     "
            + newOrder.t + "<br>" + " Number of pizzas :    "
            + newOrder.n + "<br>" + "Total Price :  "
            + newOrder.total + "<br><br>").css('font-family', 'system-ui').css('font-size', '24px');
    });
    //$("#order-alert").click(function(){
      //  var cost = totalPrice+150;
        //this.myName = $("input.mynames").val();
        //this.myLocation = $("input.mylocations").val();
        //var newAddress = new Address(name, location);

        //$("#online-delivery").show();
        //$(".order").text("");
        //$(".order").append("<br>" + newAddress.fullAddress() + " at " + cost + "Ksh")
        
    //Deliver
    $(".deliver").click(function () {
        $('.summary').slideUp();
        $('#sum-list').slideUp();
        $('.summary').text("Provide location details").slideDown();
        $('.deliver').hide(1000);
        $('.delivernot').hide(1000);
        $('.custdata-overlay').slideDown();

    });
});
function showAlert(){
    alert("Karibu tena kwa sumptious Tamu pizza!");
}
function delivery(){
    $("form.data").click(function(e){
        e.preventDefault();
        var name = $("input.mynames").val();
        var location = $("input.mylocations").val();
        alert("Hello "+ name + " Your order will arrive at  " + location+ " In 15 minutes with an additional cost of 300 ksh " );
    })
}
