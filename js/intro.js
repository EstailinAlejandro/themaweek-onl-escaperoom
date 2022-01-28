let audio = new Audio("../audio/cassette.m4a");

function clickfunction() {
    setTimeout(function() {triggerfunction()}, 39000);
}

function triggerfunction() {
    window.location.href = ('../html/main_hall.html');
}
