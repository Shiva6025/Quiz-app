window.onload=showQ;
            var i=0;
            function showQ(){
            var ul=document.getElementsByTagName('ul')[0];
            var li=ul.getElementsByTagName('li');
            for(var j=0; j<=li.length-1; j++){
                if(i == j){
                    li[j].style.display='block';
                    //now get the answer value from li tag and store it in button as true or false
                    var ans=li[j].getAttribute('answer-no');
                    var btn=li[j].getElementsByTagName('button');
                    for(var k=0; k<=btn.length-1; k++){
                        if(k+1 == ans){
                            //if it matches the answer, then it is true otherwise false
                            btn[k].setAttribute('answer', true);
                            //also make a function for clicking answer button
                            btn[k].setAttribute('onClick',"clickAns("+i+",this)");
                            //we will make a function clickAns later and pass parameter of i and this
                        }else{
                            btn[k].setAttribute('answer', false);
                            btn[k].setAttribute('onClick',"clickAns("+i+",this)");
                        }
                    }
                }else{
                    li[j].style.display='none';
                }
            }
            //now add total questions and current question number
            document.getElementsByClassName('total-Q')[0].innerHTML=i+1 +"/"+ li.length;
            //changing progress bar length
            document.getElementsByClassName('progress-bar')[0].style.width=(i/li.length)*100 + '%';
            if(i==li.length-1){
                i=0;
                //on last question the submit should show
                document.getElementById("showQ").style.display='none';
                document.getElementById("result").style.display='block';
            }else{
                i++;
            }
            // disable show next question until not answered
            document.getElementById('showQ').disabled = true;
        }
        //make a fuction for answer
        function clickAns(i,e){
            var ul=document.getElementsByTagName('ul')[0];
            var li=ul.getElementsByTagName('li');
            var btn= li[i].getElementsByTagName('button');
            //get answer from the button
            var v=e.getAttribute('answer');
            for(var j=0; j<=btn.length-1; j++){
                if(v == 'true'){
                    e.className='correct';
                    result(false)
                }else{
                    e.className='wrong';
                    //also show the currect answer
                    for(var k=0; k<=btn.length-1; k++){
                        if(btn[k].getAttribute('answer') == 'true')
                        btn[k].className = 'correct';
                    }
                }
                // disable button after first click
                btn[j].disabled = true;
            }
            //enable next question button
            document.getElementById('showQ').disabled = false; 
        }
        //now get the result
        var numPerQ=5;
        var correctAns=0;
        //we ran the function from the two sides 1, just add correct answer number 2, will show answer
        function result(showAns){
            var ul=document.getElementsByTagName('ul')[0];
            var li=ul.getElementsByTagName('li');
            if(showAns == false){
                //it will add answer
                correctAns++;
            }else{
                //it will show result
                var result = (correctAns/4)*numPerQ;
                var totalNumb = li.length*numPerQ;
                document.getElementsByClassName('time')[0].innerHTML='You scored:'+ result + '/' + totalNumb;
                document.getElementsByClassName('progress-bar')[0].style.width='99.25%';
            }
        }