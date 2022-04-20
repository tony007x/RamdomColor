const color = [
    ['Black','ดำ','สีดำ'],
    ['Red','แดง','สีแดง'],
    ['Green','เขียว','สีเขียว'],
    ['Pink','ชมพู','สีชมพู'],
    ['Blue','น้ำเงิน','สีน้ำเงิน'],
    ['Brown','น้ำตาล','สีน้ำตาล'],
    ['Purple','ม่วง','สีม่วง'],
    ['White','ขาว','สีขาว'],
    ['Yellow','เหลือง','สีเหลือง'],
    ['Orange','ส้ม','สีส้ม']
]
alert("กดปุ่ม RamdomColor")
let countplay = (prompt("จำนวนที่ต้องการเล่น"))
console.log(countplay)
var i = 0
var countrandom = 0
var wrongans = 0
const rd = Math.floor(Math.random()*color.length)  
function random()
    {
        countrandom +=1
         
        if(countrandom == 1){         
            document.getElementById("showCL").innerHTML = rd;
            console.log(rd)
         }
        while(i < countplay){
            const guess = prompt("Guess");
            const guess1 = guess.charAt(0).toUpperCase()+guess.slice(1);
            console.log(guess1)
            var ok = false
            for(var j=0;j<3;j++)
            {
                if(color[rd][j]==guess1){
                    ok=true
                }                 
            }
            if(color[rd][j]!=guess1){
                wrongans+=1
            }  
            if (ok){
                correct()
                break
            }
            else{
                incorrect()
            }    
            i++;
        }         
    }
function correct(){
    alert("ถูกต้องแล้วค้าบ")
    alert("จำนวนครั้งที่เล่น:")
    alert(wrongans)
    document.getElementById("showCL").innerHTML = color[rd];
}
function incorrect(){
    alert("ผิดค้าบ ลองใหม่น้ำ")
    alert("จำนวนครั้งที่เล่น:")
    alert(wrongans)
    document.getElementById("showCL").innerHTML = color[rd];
}    

