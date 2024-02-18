let boxes = document.querySelectorAll(".box");
// console.log(boxes);
let msg = document.querySelector(".msg");
let rstBtn = document.querySelector("#rst-btn");

let turnX=true;

let winPattern=[
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
]

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnX){
            box.innerText="X";
            turnX=false
        }
        else{
            box.innerText="O";
            turnX=true
        }
        checkWinner();
        box.disabled=true;
    })
});

rstBtn.addEventListener("click",()=>{
    window.location.reload();
})

let checkWinner=()=>{
    for(pattern of winPattern){
        // console.log(pattern[0], pattern[1], pattern[2]);
        // console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText);

        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val){
                console.log("Winner", pos1val);
                msg.innerHTML=`<b>Winner ${pos1val}!!</b>`;
            }
        }
    }
}