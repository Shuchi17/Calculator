let display=document.getElementById('display');
let buttons=Array.from(document.getElementsByClassName('button'));
let degrad = document.getElementById('degrad');
let theme = document.getElementById('theme');
let ans="";
let history="";
let c=0;
buttons.map( button =>
  { 
    button.addEventListener("click", function() 
    {
        if (button.textContent >='0' && button.textContent <='9' ||button.textContent==="."|| button.textContent==="(" ||button.textContent===")") 
        {
          display.innerText += button.textContent;
          ans+=button.textContent;
        }
        else if (button.textContent === "=") 
        {
          equals();
        }
        else if (button.textContent === "C") 
        {
          clear();
        }
        else if (button.textContent === "x") 
        {
          multiply();
        }
        else if (button.textContent === "÷") 
        {
          divide();
        } 
        else if (button.textContent === "+") 
        {
          plus();
        }
        else if(button.textContent==="-")
        {
          Minus();
        } 
        else if (button.textContent === "←") 
        {
          backspace();
        } 
        else if (button.textContent === "sin") 
        {
          sin();
        } 
        else if (button.textContent === "cos") 
        {
          cos();
        } 
        else if (button.textContent === "tan") 
        {
          tan();
        } 
        else if (button.textContent === "log") 
        {
          log();
        } 
        else if (button.textContent === "ln") 
        {
          ln();
        } 
        else if(button.textContent==="exp")
        {
          exp();
        } 
        else if (button.textContent === "square") 
        {
          sq();
        } 
        else if (button.textContent === "rad") 
        {
          radians();
        } 
        else if (button.textContent === "deg") 
        {
          degrees();
        }
        else if (button.textContent === "theme") 
        {
          toggle();
          c++;
        }
      });
    });
    function checkLength() 
    {
      if (display.innerText.length >= 23) 
      {
        display.innerText= "Overload Error";
      }
    }
    function syntaxError() 
    {
      if (eval(ans) == SyntaxError) 
      {
        display.innerText = "Syntax Error";
      }
    }
    function equals() 
    {
      let y=eval(ans);
      history+=display.innerText+" = "+y+"\n";
      addtohistory();
      display.innerText = y;
      ans=y;
        //display.innerText = eval(display.innerText);
        checkLength();
        syntaxError();
    }
    function clear() 
    {
      display.innerText= "";
      ans="";
    }
    function backspace() 
    {
      if(display.innerText)
      {
        display.innerText= display.innerText.slice(0,- 1);
        ans=ans.slice(0,-1);
      }
      
    }
    function plus()
    {
      display.innerText=display.innerText + "+";
      ans+="+";
    }
    function Minus()
    {
      display.innerText=display.innerText + "-";
      ans+="-";
    }
    function multiply() 
    {
      display.innerText = display.innerText + "*";
      ans+="*";
    }
    function divide() 
    {
      display.innerText = display.innerText + "/";
      ans+="/";
    }
    function sin() 
    {
      display.innerText = display.innerText + "sin(";
      if(degrad.checked==true)
      {
        ans+="Math.sin((3.14/180)*";
      }
      else
      {
        ans+="Math.sin(";
      }
     
    }
    function cos() 
    {
      display.innerText = display.innerText + "cos(";
      if(degrad.checked==true)
      {
        ans+="Math.cos((3.14/180)*";
      }
      else
      {
        ans+="Math.cos(";
      }
       
    }
    function tan() 
    {
      display.innerText = display.innerText + "tan(";
      if(degrad.checked==true)
      {
        ans+="Math.tan((3.14/180)*";
      }
      else
      {
        ans+="Math.tan(";
      }
    }
    function log() 
    {
      display.innerText+="log10(";
      ans+="Math.log10(";
    }
    function ln() 
    {
      display.innerText+="ln(";
      ans+="Math.log(";
    }
    function sq() 
    {
      let cur=eval(ans);
      cur*=cur;
      display.innerText=cur;
      ans=cur;
    }
    function exp() 
    {
      let cur=eval(ans);
      let y=Math.exp(cur);
      display.innerText=y;
      ans=y;
    }
    function rad() 
    {
      display.innerText = display.innerText * (Math.PI / 180);
    }
    function deg() 
    {
      display.innerText = display.innerText * (180 / Math.PI);
    }
    function addtohistory()
    {
      document.getElementById('history').innerText=history;
    }
    function toggle() {
      var element = document.body;
      element.classList.toggle("dark-mode");
      var x = document.querySelector('.container');
      x.classList.toggle("cdark");
      if(c%2==0)
      {
        document.getElementById('equal').style.background = "#323330";
        document.getElementById('display').style.background = "#323330";
        document.getElementById('display').style.color = "white";
      }
      else
      {
         document.getElementById('equal').style.background = "cadetblue";
        document.getElementById('display').style.background = "cadetblue";
        document.getElementById('display').style.color = "black";
      }
    }
    function myFunction() {
      document.getElementById("myDropdown").classList.toggle("show");
    }
    
    window.onclick = function(event) {
      addtohistory();
    }