export class Graph{
    constructor(isDirected = false){
        this.isDirected = isDirected;
        this.vertices = [];
        this.adjacencyList = new Map();
    }

    addVertex(vertex){
        if(!this.vertices.includes(vertex)){
            this.vertices.push(vertex);
            this.adjacencyList.set(vertex, []);
        }
    }

    addEdge(vertex1, vertex2){
        if(!this.adjacencyList.get(vertex1)){
            this.addVertex(vertex1);
        }
        if(!this.adjacencyList.get(vertex2)){
            this.addVertex(vertex2);
        }
        this.adjacencyList.get(vertex1).push(vertex2);
        if(!this.isDirected){
            this.adjacencyList.get(vertex2).push(vertex1);
        }
    }

    getNeighbors(vertex){
        return this.adjacencyList.get(vertex);
    }

    getAllVertices(){
        return this.vertices;
    }

    getAdjacencyList(){
        return this.adjacencyList;
    }
}

