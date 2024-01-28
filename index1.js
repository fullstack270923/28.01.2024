
function onclick() {
    
}

//window.onload = ...
// $(document).ready(() => { })
$(() => {
    //document.getElementById('btn1').addEventListener('click', () => {alert('clicked')})
    //document.getElementById('btn1') = $('#btn1')
    //$('#btn1').addEventListener('click', () => {alert('clicked')})
    $('#btn1').on('click', () => {
        $('#my_h1').css( {color: 'green', 'font-weight': 'bold'} )
    })

    $('#btn1').on(
        {
        'click': () => {
            $('#my_h1').css( {color: 'green', 'font-weight': 'bold'} )
        },
        'mouseenter': () => {
            $('#my_h1').css( {color: 'blue', 'font-weight': 'bold'} )
        }
    })

    $('#btn2').on('click', () => {
        $('#my_h1').css( {color: 'black', 'font-weight': ''} )
        $('#btn1').off() // remove all events -- click, onmouseenter
    })
  
    // function click_me() { }
    // document.getElementById('btn1').addEventListener('click',click_me)
    // document.getElementById('btn1').removeEventListener('click', click_me)

    //$('#btn1').off('click') // remove event click
    //$('#btn1').off() // remove all

    $('#my_h1').css( {color: 'red', 'font-weight': 'bold'} )
})