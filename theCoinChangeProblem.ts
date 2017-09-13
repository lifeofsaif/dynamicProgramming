/*
    Dynamic Programming Day Two.
    
    You have  types of coins available in infinite quantities where the
    value of each coin is given in the array . Can you determine the
    number of ways of making change for  units using the given types of
    coins? For example, if , and , we can make change for  units in
    three ways: , , and .

    Given , , and , print the number of ways to make change for  units
    using any number of coins having the values given in .
*/

/*
    Notes: This one was a really dynamic programming - ish problem. 
    -A good way to approach these recursion problems is to make tree 
    work first, and then move on to memoizing it.
    -its weird how we had to minimize the change, and use up the coins, 
    which was the effect of dealing with two variables. It is important 
    to recognize when two or more variables are at play in terms of 
    memoizing. 
    - once recognizing the variables at play, and drawing out and 
    implementing the recursion tree functionally, we can move on to 
    memoizing/optimizing


*/

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

