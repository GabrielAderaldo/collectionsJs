import { Graph } from "./graph/graph.js";

export default function app(){

    const graph = new Graph();
    let vertice = ["A", "B", "C", "D", "E", "F"];

    for(let i = 0; i < vertice.length; i++){
        graph.addVertex(vertice[i]);
    }

    graph.addEdge("A", "B");
    graph.addEdge("A", "C");
    graph.addEdge("B", "D");
    graph.addEdge("C", "E");
    graph.addEdge("D", "E");
    graph.addEdge("D", "F");
    graph.addEdge("E", "F");

}