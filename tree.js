function dijkstra(graph, start) {
    const distances = {};
    const visited = {};
    const priorityQueue = new PriorityQueue();

    // Initialize distances
    for (const vertex in graph) {
        distances[vertex] = Infinity;
    }
    distances[start] = 0;
    priorityQueue.enqueue(start, 0);

    // Dijkstra's Algorithm
    while (!priorityQueue.isEmpty()) {
        const currentVertex = priorityQueue.dequeue().element;

        if (visited[currentVertex]) continue;
        visited[currentVertex] = true;

        for (const neighbor in graph[currentVertex]) {
            const distance = distances[currentVertex] + graph[currentVertex][neighbor];
            if (distance < distances[neighbor]) {
                distances[neighbor] = distance;
                priorityQueue.enqueue(neighbor, distance);
            }
        }
    }

    return distances;
}

// Priority Queue implementation (Min Heap)
class PriorityQueue {
    constructor() {
        this.queue = [];
    }

    enqueue(element, priority) {
        this.queue.push({ element, priority });
        this.queue.sort((a, b) => a.priority - b.priority);
    }

    dequeue() {
        if (this.isEmpty()) return 'Queue is empty';
        return this.queue.shift();
    }

    isEmpty() {
        return this.queue.length === 0;
    }
}
const graph = {
    'A': { 'B': 4, 'C': 2 },
    'B': { 'A': 4, 'C': 5, 'D': 10 },
    'C': { 'A': 2, 'B': 5, 'D': 3 },
    'D': { 'B': 10, 'C': 3 }
};
console.log(shortestDistances);