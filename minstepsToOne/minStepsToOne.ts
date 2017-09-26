/* 
    Dynamic Programming Day One. 
    this program really could have been done greedily
    whatever it was cool to learn
    yolo
*/

let memo:number[] = []
function getMinSteps(n: number): number{   
    if(memo.length<n){
        for(let i = memo.length; i < n; i++){
            memo.push(-1)
        }    
    }
    if(n==1){
        return 0;
    }
    else if(memo[n] && memo[n] != -1){
        return memo[n]
    }else{
        let r:number = 1 + getMinSteps( n - 1 );  // '-1' step .  'r' will contain the optimal answer 
        if(n%2==0){
            r = Math.min(r, 1 + getMinSteps(n/2))
        }
        if(n%3==0){
            r = Math.min(r, 1 + getMinSteps(n/3))
        }   
        memo[n] = r
        return r; 
    }
}



function main(){
    const readline:any = require('readline');
    const rl:any = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question('Enter a number: ', (number:number) => {
        console.log('result: ' + getMinSteps(number)) 
        rl.close()
    });
}


