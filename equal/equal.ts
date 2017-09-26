/*
Day Three Dynamic Programming.

Christy is interning at HackerRank. One day she has to distribute some chocolates to her colleagues. She is biased towards her friends and may have distributed the chocolates unequally. One of the program managers gets to know this and orders Christy to make sure everyone gets equal number of chocolates.

But to make things difficult for the intern, she is ordered to equalize the number of chocolates for every colleague in the following manner,

For every operation, she can choose one of her colleagues and can do one of the three things.

She can give one chocolate to every colleague other than chosen one.
She can give two chocolates to every colleague other than chosen one.
She can give five chocolates to every colleague other than chosen one.
Calculate minimum number of such operations needed to ensure that every colleague has the same number of chocolates. 

*/

/* 

Take aways: this dynamic programming problem really seems more like
a multi part greedy problem
the only dynamic part seems to be understanding that we need to keep 
track of all the minimal possibilities: min-0 to min-4

another takeaway is that when im dealing with dynamic programming problems, i really need to be thinking about all the other dynamic programming problems ive done in the past

i.e. here, the coinchange problem was really important. except in this coinchange problem we did it greedily rather than dynamically

*/


const INT_MAX:number = 2000000000

function smallest(choco:number[]):number{
    let N:number=choco.length
    let smallest:number = INT_MAX
    let i:number
    for(i = 0; i < N; i++){
        if(choco[i]<smallest){
            smallest=choco[i]
        }
    }
    return smallest 
}

function coinChange(N:number):number{
    let x:number = 0
    if(N>=5){
        x=Math.floor(N/5)
        N=N%5
    }
    if(N>=2){
        x+=Math.floor(N/2)
        N=N%2
    }
    x+=N
    return x
}

function solve(N:number, choco:number[]):number[]{    
    const min:number = smallest(choco)
    const minMinusOne:number = min-1
    const minMinusTwo:number = min-2
    const minMinusThree:number = min-3
    const minMinusFour:number = min-4
    
    
   
    let stepsToMin:number = 0
    let stepsToMinMinusOne:number = 0
    let stepsToMinMinusTwo:number = 0
    let stepsToMinMinusThree:number = 0
    let stepsToMinMinusFour:number = 0
    
    choco.forEach(function(employee:number):void{
        stepsToMin+=coinChange(employee-min)
        stepsToMinMinusOne+=coinChange(employee-minMinusOne)
        stepsToMinMinusTwo+=coinChange(employee-minMinusTwo)
        stepsToMinMinusThree+=coinChange(employee-minMinusThree)
        stepsToMinMinusFour+=coinChange(employee-minMinusFour)
        
    })
    
    
    
    return [stepsToMin, stepsToMinMinusOne, stepsToMinMinusTwo, stepsToMinMinusThree, stepsToMinMinusFour]
}
