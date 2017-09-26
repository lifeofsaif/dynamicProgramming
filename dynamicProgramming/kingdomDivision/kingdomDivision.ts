/* 
    https://www.hackerrank.com/challenges/kingdom-division

    King Arthur has a large kingdom that can be represented as a tree, where nodes correspond to cities 
    and edges correspond to the roads between cities. The kingdom has a total of cities numbered from  
    to .

    The King wants to divide his kingdom between his two children, Reggie and Betty, by giving each of 
    them  or more cities; however, they don't get along so he must divide the kingdom in such a way that 
    they will not invade each other's cities. The first sibling will invade the second sibling's city if 
    the second sibling has no other cities directly connected to it. For example, consider the kingdom 
    configurations below:

    Given a map of the kingdom's  cities, find and print the number of ways King Arthur can divide it 
    between his two children such that they will not invade each other. As this answer can be quite 
    large, it must be modulo .
*/

const UNVISITED:number  = 0
const RED:number = 1
const BLACK:number = 2



class KingdomDivision {
    private graph:number[][]
    constructor(input:string[]){
        this.graph = this.makeGraph(input)
    }
    
    get getGraph():number[][]{
        return this.graph
    }
    
    public solve(node:number):number{
        let children:number[] = this.graph[node]
        
        let total:number = 0
        let track:number[] = []    
        
        for(let i:number = 0; i < this.graph.length + 1; i++){
            track.push(UNVISITED)
        }
        track[0] = -1
        
        
        let redTrack:number[] = track.slice()
        let blackTrack:number[] = track.slice()
        
        redTrack[node] = RED
        blackTrack[node] = BLACK
        
        for(let i:number = 0; i < children.length; i++){   
            let child:number = children[i]    
            this.recurse(child, node, RED, redTrack)
            this.recurse(child, node, BLACK, blackTrack)
        }
        
        return total
    }   
    
    private recurse(node:number, parent:number, parentColor:number, track:number[]){
        let children:number[] = this.graph[node]
        
        
        
    }
    
    
    private makeGraph(input:string[]):number[][]{
        let n:number = parseInt(input[0])
        let graph:number[][] = []
        for(let i:number = 0; i <=n; i++){
            graph.push([])
        }
        for(let i:number = 1; i < n; i++){
            let parsed:string[] = input[i].split(" ")
            let a:number = parseInt(parsed[0])
            let b:number = parseInt(parsed[1])
            graph[a].push(b)
            graph[b].push(a)
        }
        return graph
    }
    
    
    
    
}

let saif:KingdomDivision = new KingdomDivision([ '5', '1 2', '1 3', '3 4', '3 5' ])
console.log(saif.getGraph)

console.log("final answer: " + saif.solve(1))




























