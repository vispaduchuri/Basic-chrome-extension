 $(function(){
    $('#name').keyup(function(){
        $('#greet').text('Greetings'+ " "+ $('#name').val());
    });

    var num=0;
    document.onclick = function(){
        num++;
        document.getElementById("click").innerHTML=num;
    }

    var key=0;
    document.onkeypress=function(){
        key++;
        document.getElementById("keys").innerHTML=key;
    }
});

