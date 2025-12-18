$(function() {

    /*  

    -------------------------------------------------------
    
        default stuff

    -------------------------------------------------------    
    
    */  
   
    $('body').css({
        'display': 'flex',
        'flex-direction': 'column',
        'gap': '2rem',
    })

    $('#showBox').css({
        'display': 'flex',
        'gap': '2rem',
    })
    
    $('.box').css({
        'display': 'flex',
        'flex-direction': 'column',
        'border': '1px solid blue',
    })

    $('#panel-5').css({
        'display': 'none',
    })

    $('#panel-6').css({
        'display': 'none',
    })

    /*  
    
    -------------------------------------------------------
    
        the top of the page (this is jquery + buttons)

    -------------------------------------------------------   

    */  

    $('.buttonList').html(`
        
        <div id='buttonListTop'> 
            <h1 id='h1Tag'> This is jQuery </h1> 
        </div> 

        <div id='buttonListBottom'> 
            <button id='panel1'> #button1 </button> 
            <button id='panel2'> #button2 </button>   
            <button id='panel3'> #button3 </button>  
            <button id='panel4'> #button4 </button>
        </div>
        
            `);

    $('#panelButtons').css({
        'display': 'flex',
        'flex-direction': 'column',
        'background-color': '#C3C3C3',
        'align-items': 'center',
        'padding': '1rem',
        'font-family': 'Arial',
        'padding-top': '.5%',
    })

    $('#panel1, #panel2, #panel3, #panel4').css({
        'font-size': '1.25rem',
        'background-image': 'linear-gradient(to bottom, lightgray, white)',
        'padding': '2%',
        'width': '100',
        'font-weight': 'bold',
    })
    
    /*  
    
    -------------------------------------------------------
    
        the top of the page (this is jquery + buttons)

    -------------------------------------------------------   

    */

    $('#panel-1').html(`
        
        <h3 id="p1-1st">#panel1</h1>
        <h2 id="p1-2nd">#panel1-heading</h1>
        <h4 id="p1-3rd">the background is blue and the text is white</h1>
        
            `);



    $('#panel-2').html(`
        
        <h3 id="p2-1st">#panel2</h1>
        <h2 id="p2-2nd">#panel2-heading</h1>
        <h4 id="p2-3rd">the background is green and the text is white and the font is bold</h1>
        
            `);

    $('#panel-3').html(`
        
        <h3 id="p3-1st">#panel3</h1>
        <h2 id="p3-2nd">#panel3-heading</h1>
        <h4 id="p3-3rd">the background is darkgrey and the text is black and the font family is monospace, including the panel content</h1>
        
            `);

    $('#panel-4').html(`
        
        <h3 id="p4-1st">#panel4</h1>
        <h2 id="p4-2nd">#panel4-heading</h1>
        <h4 id="p4-3rd">the background is darkgrey and the text is black and the font family is monospace, including the panel content</h1>
        
            `);
   

    $('#panel-1').css({
        'display': 'flex',
    })





    /*  
    
    -------------------------------------------------------
    
        button functionality

    -------------------------------------------------------   

    */  
    
    
    
    $('#clickme').on('click', function() {
        $('#book').fadeOut('slow', function() {
            console.log('Anim completed')
        })
    })
        
    $('#panel1').on('click', function() {
        $('#panel-1').css({
            'color': 'blue',
            'font-weight': '900'
        }).hide(3000).show(2000)
    })
    $('#panel2').on('click', function() {
        $('#panel-1').css({
            'display': 'none'
        })
        $('#panel-2').fadeTo(1000, 0).fadeTo(2000, .8)
        $('#panel-1').css({
            'display': 'flex'
        })
    })
    $('#panel3').on('click', function() {
        $('#panel-3').slideUp(1000).delay(1000).slideDown(1500)
    })
    $('#panel4').on('click', function() {
        $('#panel-4').fadeTo(1000, .3).hide(2000).show(2000).fadeTo(2000, .1).fadeTo(2000, 1)
    })
})