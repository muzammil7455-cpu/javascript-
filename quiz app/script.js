const question =document.querySelector("#ques");
const next = document.querySelector("#nxt");
const opt =document.querySelectorAll(".box1");
const tryagn =document.querySelector(".btn");


const ques = [
  {
    Q: "HTML ka full form kya hai?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyper Tool Markup Language",
      "Home Text Markup Language"
    ]
  },
  {
    Q: "CSS ka use web page mein kis liye hota hai?",
    options: [
      "Structure banane ke liye",
      "Styling aur design ke liye",
      "Logic likhne ke liye",
      "Database ke liye"
    ]
  },
  {
    Q: "JavaScript kis type ki language hai?",
    options: [
      "Markup language",
      "Styling language",
      "Programming language",
      "Query language"
    ]
  },
  {
    Q: "HTML mein heading ke liye kaunsa tag use hota hai?",
    options: [
      "<p>",
      "<h1>",
      "<div>",
      "<span>"
    ]
  },
  {
    Q: "CSS mein color change karne ke liye kaunsi property use hoti hai?",
    options: [
      "background",
      "font-color",
      "color",
      "text-style"
    ]
  },
  {
    Q: "JavaScript mein variable declare karne ke liye kaunsa keyword use hota hai?",
    options: [
      "var",
      "int",
      "string",
      "define"
    ]
  },
  {
    Q: "HTML mein image add karne ke liye kaunsa tag use hota hai?",
    options: [
      "<image>",
      "<img>",
      "<pic>",
      "<src>"
    ]
  },
  {
    Q: "CSS mein external stylesheet kaise link ki jati hai?",
    options: [
      "<style>",
      "<css>",
      "<link>",
      "<script>"
    ]
  },
  {
    Q: "JavaScript mein function kaise banaya jata hai?",
    options: [
      "function myFunc() {}",
      "def myFunc()",
      "create myFunc()",
      "func myFunc()"
    ]
  },
  {
    Q: "HTML, CSS aur JavaScript ka role web development mein kya hai?",
    options: [
      "Sirf design",
      "Sirf structure",
      "Structure, design aur interactivity",
      "Sirf database"
    ]
  }
];
const ans = [
  "Hyper Text Markup Language",
  "Styling aur design ke liye",
  "Programming language",
  "<h1>",
  "color",
  "var",
  "<img>",
  "<link>",
  "function myFunc() {}",
  "Structure, design aur interactivity"
];

let m=0;

next.addEventListener("click",()=>{
    m+=1;
    quiz();
    if(m==ques.length-1){
        document.querySelector(".ans").style.display="none";
        next.style.display="none";
        document.querySelector(".hding").style.display="none";
    }

})

function quiz(){
    
    question.innerHTML = ques[m].Q;
     for(let i=0; i<opt.length; i++){
        opt[i].innerHTML = ques[m].options[i];
        opt[i].parentElement.style.backgroundColor="gray";
        next.style.display ="none";
     }
     for(item of opt){
        item.addEventListener("click",(e)=>{
            let value= e.target.innerText;

            if(value==ans[m]){
                e.parentElement.style.backgroundColor="green";
                next.style.display ="flex";
            }
            else{
                document.querySelector(".box").style.display="none";
                e.target.parentElement.style.backgroundColor ="red";
                document.querySelector(".win").style.display ="block";
                document.querySelector(".btn").style.display ="flex";
            }
        })
     }
}

tryagn.addEventListener("click",()=>{
    location.reload(true);
})

quiz();