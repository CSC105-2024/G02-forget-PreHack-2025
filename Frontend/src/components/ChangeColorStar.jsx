function oneStar(setRating) {
    document.getElementById("star1").style.backgroundColor = "#E0CA2F";
    document.getElementById("star2").style.backgroundColor = "#A9A9A9";
    document.getElementById("star3").style.backgroundColor = "#A9A9A9";
    document.getElementById("star4").style.backgroundColor = "#A9A9A9";
    document.getElementById("star5").style.backgroundColor = "#A9A9A9";
    setRating(1);
}

function twoStar(setRating) {
    document.getElementById("star1").style.backgroundColor = "#E1A401";
    document.getElementById("star2").style.backgroundColor = "#E1A401";
    document.getElementById("star3").style.backgroundColor = "#A9A9A9";
    document.getElementById("star4").style.backgroundColor = "#A9A9A9";
    document.getElementById("star5").style.backgroundColor = "#A9A9A9";
    setRating(2);
}

function threeStar(setRating) {
    document.getElementById("star1").style.backgroundColor = "#E07B00";
    document.getElementById("star2").style.backgroundColor = "#E07B00";
    document.getElementById("star3").style.backgroundColor = "#E07B00";
    document.getElementById("star4").style.backgroundColor = "#A9A9A9";
    document.getElementById("star5").style.backgroundColor = "#A9A9A9";
    setRating(3);
}

function fourStar(setRating) {
    document.getElementById("star1").style.backgroundColor = "#E13E01";
    document.getElementById("star2").style.backgroundColor = "#E13E01";
    document.getElementById("star3").style.backgroundColor = "#E13E01";
    document.getElementById("star4").style.backgroundColor = "#E13E01";
    document.getElementById("star5").style.backgroundColor = "#A9A9A9";
    setRating(4);
}

function fiveStar(setRating) {
    document.getElementById("star1").style.backgroundColor = "#DE0000";
    document.getElementById("star2").style.backgroundColor = "#DE0000";
    document.getElementById("star3").style.backgroundColor = "#DE0000";
    document.getElementById("star4").style.backgroundColor = "#DE0000";
    document.getElementById("star5").style.backgroundColor = "#DE0000";
    setRating(5);
}

export { oneStar, twoStar, threeStar, fourStar, fiveStar }