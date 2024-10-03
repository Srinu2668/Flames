let container=document.querySelector(".container");
let name1=document.querySelector(".name1 input");
let name2=document.querySelector(".name2 input");
let button=document.querySelector(".press button");
let container1=document.querySelector(".container1");
let dis1=document.querySelector("#person1 p");
let dis2=document.querySelector("#person2 p");
let score=document.querySelector("#score span");
let middle=document.querySelector(".middle");

let result=["friends","lover","affection","marriage","enemy","sister"];
let person1;
let person2;
let pos=0;
let count=0;
let arr1;
let arr2;
let errormes=document.createElement("p");
let URL="https://www.mymathtables.com/calculator/fun/img/";//+xxx.gif

let flamesArray=(num)=>
{   
    // console.log(num);
    for(let i=6;i>1;i--)
    {
        pos=num%i;
        // console.log(pos);
        if(pos==0)
        {
            result.splice((result.length)-1,1);
            var str1=result.slice(0,i);
            result="";
            result=str1;

            // console.log(result);
        }
        else
        {
            var str1=result.slice(0,pos-1);
            var str2=result.slice(pos);
            result="";
            result=str2.concat(str1);

            // console.log(result);
        }
    }
    result=result.toString();
    // console.log(result);
    let resultImg=document.createElement("img");
    resultImg.src=`${URL}${result}.gif`;
    resultImg.style.height="127px";
    resultImg.style.width="300px";
    resultImg.style.position="relative";
    resultImg.style.top="150px";
    resultImg.style.left="83px";
    resultImg.style.border="3px solid  rgb(65, 17, 17)";

    middle.appendChild(resultImg);

    score.innerText=num;
};

let countFlamesNumber=()=>
{
    let remSpacePerson1=person1.replaceAll(" ", "");
    let remSpacePerson2=person2.replaceAll(" ", "");
    
    arr1 = remSpacePerson1.split("");
    arr2 = remSpacePerson2.split("");
    // console.log(arr1," ",arr2);
    

    for(let i=0;i<arr1.length;i++)
    {
        for(let j=0;j<arr2.length;j++)
        {
            if(arr1[i]===arr2[j])
            {
                arr1[i]="";
                arr2[j]="";
                break;
            }
        }
    }
    // dis1.innerText=arr1;
    // dis2.innerText=arr2;
    for(let i=0;i<arr1.length;i++)
    {
        if(arr1 [i]!="")
            count++;
    }
    for(let i=0;i<arr2.length;i++)
    {
        if(arr2[i]!="")
            count++;
    }
    // console.log(arr1," ",arr2);
    // console.log("lenght of flames is = ",count); 
    flamesArray(count);
};

let action=()=>
{
    dis1.innerText=person1;
    dis2.innerText=person2;
    countFlamesNumber();
};

button.addEventListener("click",(event)=>
{
    event.preventDefault();
    person1=(name1.value).toUpperCase();
    person2=(name2.value).toUpperCase();
    
    if(person1==="" || person2==="")
    {
        if(errormes.innerText!="")
            errormes.innerText="";

        if(person1==="" && person2==="")
            errormes.innerText="*please enter two names";
        else if(person1==="")
            errormes.innerText="*please enter the person1 name";
        else
            errormes.innerText="*please enter person2 name";

        errormes.style.color="red";
        errormes.style.fontSize="1.2rem";
        errormes.style.backgroundColor="rgba(0, 0, 0, 0.6)";
        errormes.style.padding="3px 8px 3px 8px";
        errormes.style.borderRadius="20px";
        container.append(errormes);
    }
    else
    {
        container.style.display="none";
        container1.style.display="flex";
        action();
    }
});

