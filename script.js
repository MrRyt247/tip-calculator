$(document).ready(function() {
    const inp = $(".wrapper .item");
    const label = $(".item label");
    let a, b, c = 0; // AND Logic units

    function restore() {        // Resets label effect
        label.css({
            'text-transform': 'initial',
            'font-family': 'Junge, sans-serif',
            'font-size': '16px',
            'font-weight': '500',
            'line-height': 'initial',
            'letter-spacing': '-.5px',
            'position': 'absolute',
            'top': '10px',
            'color': 'initial'
        })
    }

    inp.on('click', function(e) {       // Label effect
        e.stopPropagation();        // Nullifies the .not() method
        restore();
        $(this).children('.subitem').children('label').css({
            'text-transform': 'uppercase',
            'font-family': 'Recursive, sans-serif',
            'font-size': '.65rem',
            'font-weight': '600',
            'line-height': '.65rem',
            'letter-spacing': '1px',
            'top': '3px',
            'color': 'var(--secondary)'
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

    function calculate() { // Transform switch case to if-else case
        switch ($("#bill").val()) {  // Validating bill input
            case '' || null:
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
            case '' || null:
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
        switch ($("#tip").val() < 0) {
            case 'true':
                b = 0;
                $("#logTip").html('No debts here');
                shake($("#logTip"));
                break;
            default:
                b = 1
                $("#logTip").html('');
                break;
        }
        /*if ($("#tip").val() < 0) {
            b = 0;
            $("#logTip").html('No debts here');
            shake($("#logTip"));
        } else {
            b = 1
            $("#logTip").html('');
        }*/
        switch ($("#nop").val()) {  // Validating No. of people input
            case '' || null:
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
        /*if ($("#nop").val() < 0) {
            c = 0;
            $("#logNOP").html('No debts here');
            shake($("#logNOP"));
        } else {
            c = 1
            $("#logNOP").html('');
        }*/

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
                }, 1);
                $(".skip").click(() => {    // Interrupts the effect
                    clearInterval(ansFx);
                    $("#tipAmount").html(tip);               // Displays final answer
                });     
            }
        }

        const arr = ['', '.', '..', '...']; // For Calculating text effect
        let count = 0;

        function animateTotal(start, value) {
            if (start >= value) {
                // Do nothing
            } else {
                $(".button img").hide();    // Hides img
                $(".button").text("Calculating");    // Displays Calculating text
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
                        $(".button").text("").append('<img>').one('click', calculate);     // Creates the arrow-up image and one-click event listener 
                        $(".button img").addClass("arrow").attr({src: 'assets/arrow-down-svgrepo-com.svg', alt: 'arrow-up'});
                        $(".skip").css({filter: 'opacity(0)'});     // Hides skip button
                        setTimeout(() => {
                            $(".skip").css('display', 'none');
                        }, 120);
                        clearInterval(ansFx);   // Ends the generating effect
                        clearInterval(textFx);  // Ends the text effect
                    }
                }, 1);
                $(".skip").click(() => {    // Interrupts the effects
                    clearInterval(ansFx);
                    clearInterval(textFx);
                    $(".button").text("").append('<img>').click(calculate);     // Fixes button
                    $(".button img").addClass("arrow").attr({src: 'assets/arrow-down-svgrepo-com.svg', alt: 'arrow-up'});
                    $(".skip").css({filter: 'opacity(0)'});
                    setTimeout(() => {
                        $(".skip").css('display', 'none');
                    }, 120);
                    $("#total").html(total);               // Displays final answer
                });   
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
   
    $(".button").one('click', calculate);      // Triggers function
    $(document).keypress(function (e) {
        if (e.key === 'Enter') {
            $(".button").one('click', calculate);
        }
    });
});
