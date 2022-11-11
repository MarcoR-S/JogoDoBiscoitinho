function ganharPonto(){
    if(keyIsDown(69)){
        pontos = pontos+1
    }
/////////////////////////////////////////////////////////////////2x
    if(pontos>100){
        multiplicadorBox1.shapeColor = 'yellow'
        if(keyIsDown(81)){
            c = +1
        }

        if(c>=1){
            if(keyIsDown(69)){
                pontos = pontos+2
            }
        }
    } 
/////////////////////////////////////////////////////////////////3x
    if(pontos>200){
        multiplicadorBox2.shapeColor = 'yellow'
        if(keyIsDown(81)){
            b = +1
        }

        if(b>=1){
            if(keyIsDown(69)){
                pontos = pontos+3
            }
        }
    } 
/////////////////////////////////////////////////////////////////4x
    if(pontos>300){
        multiplicadorBox3.shapeColor = 'yellow'
        if(keyIsDown(81)){
            a = +1
        }

        if(a>=1){
            if(keyIsDown(69)){
                pontos = pontos+4
            }
        }
    } 

/////////////////////////////////////////////////////////////////5x

    if(pontos>400){
        multiplicadorBox4.shapeColor = 'yellow'
        if(keyIsDown(81)){
            d = +1
        }

        if(d>=1){
            if(keyIsDown(69)){
                pontos = pontos+5
            }
        }
    } 

    

}

function unlock(){

    if(c>=1){
        multiplicadorBox1.shapeColor = 'lime'
        highest = 1
        push()
        textSize(30)
        text("2x", multiplicadorBox1.x-17, multiplicadorBox1.y+10 )
        pop()
    }

    if(b>=1){
        multiplicadorBox2.shapeColor = 'lime'
        highest = 2
        push()
        textSize(30)
        text("6x", multiplicadorBox2.x-17, multiplicadorBox2.y+10 )
        pop()
    }

    if(a>=1){
        multiplicadorBox3.shapeColor = 'lime'
        highest = 3
        push()
        textSize(30)
        text("10x", multiplicadorBox3.x-17, multiplicadorBox3.y+10 )
        pop()
    }

    if(d>=1){
        multiplicadorBox4.shapeColor = 'lime'
        highest = 4
        push()
        textSize(30)
        text("15x", multiplicadorBox4.x-17, multiplicadorBox4.y+10 )
        pop()
    }

    if(g>=5){
        restarurante1.shapeColor = 'lime'
    }

}

function vender(){
    if(pontos>1000&& keyIsDown(71)){
        pontos = pontos -1000
        g = g+5
    }
    textSize(50)
    text("Dinheiro: " + g, 400,400)


}





