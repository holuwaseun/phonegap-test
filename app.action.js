/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).on('ready',function(){
    $('#app-calculator-form').on('submit',function(e){
        e.preventDefault();
        var error = 0;
        $('#app-calculator-form :input').map(function(){
            if(!$(this).val()){
                error++;
            }
        });
        if(error > 0){
            alert('Some fields are empty');
            return false;
        }
        var first_number = $('#number_one').val();
        var second_number = $('#number_two').val();
        var operation = $('.operation:checked').val();
        var answer;
        
        switch(operation){
            case 'subtract':
                answer = parseFloat(first_number) - parseFloat(second_number);
                break;
            case 'multiply':
                answer = parseFloat(first_number) * parseFloat(second_number);
                break;
            case 'divide':
                if(parseFloat(second_number) === 0){
                    alert('Division by zero not possible');
                    return false;
                }
                answer = parseFloat(first_number) / parseFloat(second_number);
                break;
            case 'add':
            case 'default':
                answer = parseFloat(first_number) + parseFloat(second_number);
                break;
        }
        $('#app-response div.ui-content p.reponse-content').html('').html(parseFloat(answer));
        window.location.href = '#app-response';
    });
});
