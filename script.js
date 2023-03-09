let button = document.querySelector(".button");

button.onclick = function() {
    let Q1 = document.querySelector(".question1").value;
    let Q2 = document.querySelector(".question2").value;
    let result = document.querySelector(".result");
    if (Q1 <= 3 && Q2 === "Universal Studios") {
        document.querySelector(".result").innerHTML = "You're Matcha";
    } else if (Q1 <= 3 && Q2 === "Disney") {
        document.querySelector(".result ").innerHTML = "You 're vanilla";
    } else if (Q1 >= 4 || Q1 <= 6 && Q2 === "Universal Studios") {
        document.querySelector(".result ").innerHTML = "You 're chocolate";
    } else if (Q1 >= 4 || Q1 <= 6 && Q2 === "Disney") {
        document.querySelector(".result").innerHTML = "You're cookies and cream";
    } else {
        document.querySelector(".result").innerHTML = "Try entering something!";
    }
    console.log(Q1);
    console.log(Q2);
    alert(Q1);
    alert(Q2);
};