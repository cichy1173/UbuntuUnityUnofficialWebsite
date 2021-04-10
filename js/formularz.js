
function showData()
{
    
    var email = document.querySelector('#email');
    var name = document.querySelector('#name');
    var unityNumber = document.querySelector('#number');
    var howLongData = document.getElementsByName('howLong');

    for(i = 0; i < howLongData.length; i++)
    {
        if (howLongData[i].checked)
        {
            var howLong = howLongData[i];
            break;
        }
    }

    var multipleChoice = document.querySelectorAll("#multipleChoice option:checked");
    var multipleChoiceValues = [...multipleChoice].map(el =>el.value).toString();

    var comment = document.querySelector('#comment');

    var dane=`Następujące dane zostaną wysłane:
        Email: ${email.value}
        Imię i nazwisko: ${name.value}
        Wersja Unity: ${unityNumber.value}
        Jak długo korzystasz z Unity: ${howLong.value}
        Co Ci się podoba w Unity: ${multipleChoiceValues}
        Komentarz: ${comment.value || 'brak komentarza'}`;

       
        if (window.confirm(dane)==true)
    {
     
        sessionStorage.setItem("email", email.value);
        sessionStorage.setItem("Nazwisko",name.value);
        sessionStorage.setItem("Wersja Unity",unityNumber.value);
        sessionStorage.setItem("Jak długo", howLong.value);
        sessionStorage.setItem("Co podoba",multipleChoiceValues);
        sessionStorage.setItem("Komentarz",comment.value); 

        var fullOpinion = {};
        fullOpinion.email = email.value;
        fullOpinion.name = name.value;
        fullOpinion.number=number.value;      
        fullOpinion.howLong = $("input[name='howLong']:checked").val();
        fullOpinion.multi = [];
        $.each($("#multipleChoice option:selected"),function(){
            fullOpinion.multi.push($(this).val());
        })
        fullOpinion.comment = comment.value;
        localStorage.setItem(email.value, JSON.stringify(fullOpinion));
    
        return true;
    }
    else
        return false;
}

function deleteStorage()
{
    localStorage.clear();
    sessionStorage.clear();
}

function editStorage()
{
   
   
    var key = $('#email').val();

    if(key=="")
    {
        
        var komunikat ="Wpisz EMAIL!";
        (window.confirm(komunikat));
    }

    else{

    var retrieve = JSON.parse(localStorage.getItem(key));
    $('#email').val(retrieve.email);
    $('#name').val(retrieve.name);
    $('#number').val(retrieve.number);
    $('#howLong'+String(retrieve.howLong)).prop("checked", true);
    console.log(retrieve.multi);
    $("select[name=multipleChoice]").val(retrieve.multi);

    $('#comment').val(retrieve.comment);

    }
}

function deleteElement()
{
    var key = $('#email').val()
    if (key == "")
    {
        var kommm ="Wpisz mail, który chcesz usunąć!";
        (window.confirm(kommm));
    }
    else
    {
        localStorage.removeItem(key);
    }
}
