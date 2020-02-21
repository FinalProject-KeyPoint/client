$(document).ready(function(){

    
    $("#fetchingButton").on('click', function(){
        event.preventDefault()
        fetching()
    })

})


function fetching(){
    $("#divOriginal").empty()
    $("#divRedacted").empty()

    $.ajax({
        method: 'get',
        url: 'http://localhost:3010/articles/redactedArticle'
    })
    .done(result=>{
        console.log(`TCL: fetching -> result`, result)
        result.originalArticle.forEach(element => {
            $("#divOriginal").append(`
                <p class="card-text ${ duplicateClass( element, result.redactedArticle ) } ">${element}</p>
            `)    
        });

        result.redactedArticle.forEach(element => {
            $("#divRedacted").append(`
                <p class="card-text">${element}</p>
            `)    
        });
        
    })
    .fail(err=>{
        console.log(`error @fetching \n=========================================\n`,err)  
    })
}

function duplicateClass( originalParagraf, redactedArray){
    if( redactedArray.indexOf(originalParagraf) < 0)
        return "duplicate"
}