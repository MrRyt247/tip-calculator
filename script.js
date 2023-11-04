$(document).ready(function() {
    const inp = $(".wrapper .item");
    const label = $(".item label");
    let a, b, c = 0; // AND Logic units

    function restore() {        // Resets label effect
        label.css({
            'text-transform': 'initial',
            'font-size': '18px',
            'font-weight': '500',
            'line-height': 'initial',
            'letter-spacing': '-.5px',
            'position': 'absolute',
            'top': '10px'
        })
    }

    inp.on('click', function(e) {       // Label effect
        e.stopPropagation();        // Nullifies the .not() method
        restore();
        $(this).children('.subitem').children('label').css({
            'text-transform': 'uppercase',
            'font-size': '.65rem',
            'font-weight': '600',
            'line-height': '.65rem',
            'letter-spacing': '1px',
            'top': '3px'
        });
        setTimeout(() => {
            $(this).children('.subitem').children('label').css('position', 'relative');
        }, 120);
    });

    $(document).not(inp).click(function() {     // Resets label effect
        restore();
    })

    function shake(target) {           // Log animation
        target.css("animation", "shake 1s ease-in-out alternate");
        setTimeout(() => {
          target.css('animation', 'unset');
        }, 1005);
    };

    function calculate() {
        switch ($("#bill").val()) {  // Validating bill input
            case '':
                a = 0;
                $("#logBill").html('Enter a value');
                shake($("#logBill"));
                break;
            case '0':
                a = 0;
                $("#logBill").html('Don\'t expect an answer');
                shake($("#logBill"));
                break;
            default:
                a = 1
                $("#logBill").html('');
                break;
        }
        switch ($("#tip").val()) {  // Validating tip % input
            case '':
                b = 0;
                $("#logTip").html('Enter a value');
                shake($("#logTip"));
                break;
            case '0':
                b = 0;
                $("#logTip").html('Don\'t expect an answer');
                shake($("#logTip"));
                break;
            default:
                b = 1
                $("#logTip").html('');
                break;
        }
        switch ($("#nop").val()) {  // Validating No. of people input
            case '':
                c = 0;
                $("#logNOP").html('Enter a value');
                shake($("#logNOP"));
                break;
            case '0':
                c = 0;
                $("#logNOP").html('Don\'t expect an answer');
                shake($("#logNOP"));
                break;
            default:
                c = 1
                $("#logNOP").html('');
                break;
        }

        function animateTip(start, value) {
            if (start >= value) {
                // Do nothing
            } else {
                const ansFx = setInterval(() => {
                    start += 0.01;
                    $("#tipAmount").html((start).toFixed(2));
                    if (start + 0.01 >= value) {
                        clearInterval(ansFx);
                    }
                    $(".skip").click(() => {    // Interrupts the effect
                        clearInterval(ansFx);
                        $("#tipAmount").html(tip);               // Displays final answer
                    });     
                }, 1);
            }
        }

        const arr = ['', '.', '..', '...']; // For Calculating text effect
        let count = 0;

        function animateTotal(start, value) {
            if (start >= value) {
                // Do nothing
            } else {
                $(".button img").hide();    // Hides img
                $(".button").text("Calculating").off('click', calculate); // Avoids interruption during calculation
                $(".skip").css('display', 'flex');
                setTimeout(() => {  // Displays the skip button
                    $(".skip").css({filter: 'opacity(1)'});
                }, 3000);
                const textFx = setInterval(() => {  // Calculating text effect
                    count++;
                    if (count === 4) {
                        count = 0;
                    }
                    $(".button").text("Calculating" + arr[count]);          
                }, 1000);
                const ansFx = setInterval(() => {    // Answer generating effect
                    start += 0.01;
                    $("#total").html((start).toFixed(2));
                    if (start + 0.01 >= value) {    // Check if its answer is gotten
                        $(".button").text("").append('<img>').click(calculate);     // Creates the arrow-up image
                        $(".button img").addClass("arrow").attr({src: 'assets/arrow-down-svgrepo-com.svg', alt: 'arrow-up'});
                        $(".skip").css({filter: 'opacity(0)'});     // Hides skip button
                        setTimeout(() => {
                            $(".skip").css('display', 'none');
                        }, 120);
                        clearInterval(ansFx);   // Ends the generating effect
                        clearInterval(textFx);  // Ends the text effect
                    }
                    $(".skip").click(() => {    // Interrupts the effects
                        $(".button").text("").append('<img>').click(calculate);     // Fixes button
                        $(".button img").addClass("arrow").attr({src: 'assets/arrow-down-svgrepo-com.svg', alt: 'arrow-up'});
                        $(".skip").css({filter: 'opacity(0)'});
                        setTimeout(() => {
                            $(".skip").css('display', 'none');
                        }, 120);
                        clearInterval(ansFx);
                        clearInterval(textFx);
                        $("#total").html(total);               // Displays final answer
                    });   
                }, 1);
            }
        }

        var tip = ($("#bill").val() * ($("#tip").val() / 100) / $("#nop").val()).toFixed(2),  // variables for the answers
            total = ($("#bill").val() * (($("#tip").val() / 100) + 1) / $("#nop").val()).toFixed(2);

        function answer() {          
            $("#tipAmount").html(tip);
            $("#total").html(total);
        }

        function clearScreen() {
            $("#tipAmount").html('0.00');
            $("#total").html('0.00');
        }

        if(a && b && c) {       // AND Logic
            clearScreen(); 
            animateTip(parseFloat($("#tipAmount").text()), tip);
            animateTotal(parseFloat($("#total").text()), total);
        } else {            
            clearScreen();
        }
    }
   
    $(".button").click(calculate);      // Triggers function
});
