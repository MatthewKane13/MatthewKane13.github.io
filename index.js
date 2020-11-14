document.getElementById("btn").onclick=function()
{
    let rn=getRandom(maximum);
    if($("#question").val()==rn)
    {
        $("#answer").html("Вы угадали");
    }
    else 
    {
        $("#answer").html("Вы не угадали, правильное число - "+rn);
    }
    // let answers=["Не знаю", "Да", "Нет", "Как хочешь", "Наверное :)","Сам думай"];
    // let rn=getRandom(answers.length-1);
    // if($("#question").val()!="")
    // {
    //     if($("#question").val()!=oldq)
    //     {
    //         $("#answer").html(answers[rn]);
    //         oldq=$("#question").val();
    //     }
    // }
    // else
    // {
    // alert("Введите вопрос");
    // }
}
function getRandom(max)
{
return Math.floor(Math.random()*max)+1;
}
var oldq="";
var maximum=parseInt($('#diapozon').val());
$('#diapozon').change(function()
{
maximum=parseInt($('#diapozon').val());
})