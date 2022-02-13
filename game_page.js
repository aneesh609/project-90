player1_name = localStorage.getItem("player1");
player2_name = localStorage.getItem("player2");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;

function send()
{
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();

    one=word.charAt(1);

    length_2=Math.floor(word.length/2);
    two=word.charAt(length_2);

    length_1=word.length - 1;
    three = word.charAt(length_1);

    remove_1=word.replace(one, "_");
    remove_2=remove_1.replace(two, "_");
    remove_3=remove_2.replace(three, "_");

    question = "<h4 id='word_display'>Q. " + remove_3 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'> Check </button>";
    row = question + input_box + check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value = "";

}