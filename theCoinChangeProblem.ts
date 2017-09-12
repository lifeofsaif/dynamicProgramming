




function solve(c:number[], n:number, memo:number[][]):number{
    
    if(n==0){    
        memo[c.length][n] = 1
        return 1
    }else if(c.length == 0){
        memo[c.length][n] = 0
        return 0
    }
    if(memo[c.length][n]>=0 )
        return memo[c.length][n]
    
    let popped:number = c.pop()
    let i:number = 0
    let r = 0
    while((i*popped)<=n){
        r += solve(c.slice(),n-i*popped, memo)
        i++      
    }
    
    memo[c.length + 1 ][n] = r
    return r   
}

function coinChallenge(c:number[], n:number):number{
    let memo:number[][] = []
    for(let i:number = 0; i <= c.length; i++){
        memo.push([])    
        for(let j:number = 0; j < n; j++){
            memo[i].push(-1)
        }
    }
    
    return solve(c,n,memo)
}



console.log(coinChallenge([2,3,5,6],10))

