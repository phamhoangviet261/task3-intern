const dataSample = [
    {
        'name': 'ABE SIMPSON',
        'id': 0,
        'yearOfBirth': 1960,
        'sex': 'male',
        'wife': 1,
        'husband': null,
        'father': null,
        'mother': null,
        'children': [4, 5],
    },
    {
        'name': 'MONA SIMPSON',
        'id': 1,
        'yearOfBirth': 1962,
        'sex': 'female',
        'wife': null,
        'husband': 0,
        'father': null,
        'mother': null,
        'children': [4, 5],
    },
    {
        'name': 'CLANCY BOUVIER',
        'id': 2,
        'yearOfBirth': 1964,
        'sex': 'male',
        'wife': 3,
        'husband': null,
        'father': null,
        'mother': null,
        'children': [6, 7, 8],
    },
    {
        'name': 'JACHQUELINE BOUVIER',
        'id': 3,
        'yearOfBirth': 1968,
        'sex': 'female',
        'wife': null,
        'husband': 2,
        'father': null,
        'mother': null,
        'children': [6, 7, 8],
    },
    {
        'name': 'HERB SIMPSON',
        'id': 4,
        'yearOfBirth': 1985,
        'sex': 'male',
        'wife': null,
        'husband': null,
        'father': 0,
        'mother': 1,
        'children': [],
    },
    {
        'name': 'HOMER SIMPSON',
        'id': 5,
        'yearOfBirth': 1990,
        'sex': 'male',
        'wife': 6,
        'husband': null,
        'father': 0,
        'mother': 1,
        'children': [9, 10, 11],
    },
    {
        'name': 'MARGE BOUVIER',
        'id': 6,
        'yearOfBirth': 1995,
        'sex': 'female',
        'wife': null,
        'husband': 5,
        'father': 2,
        'mother': 3,
        'children': [9, 10, 11],
    },
    {
        'name': 'PATTY BOUVIER',
        'id': 7,
        'yearOfBirth': 1997,
        'sex': 'female',
        'wife': null,
        'husband': null,
        'father': 2,
        'mother': 3,
        'children': [],
    },
    {
        'name': 'SELMA BOUVIER',
        'id': 8,
        'yearOfBirth': 2000,
        'sex': 'female',
        'wife': null,
        'husband': null,
        'father': 2,
        'mother': 3,
        'children': [12],
    },
    {
        'name': 'BART SIMPSON',
        'id': 9,
        'yearOfBirth': 2017,
        'sex': 'male',
        'wife': null,
        'husband': null,
        'father': 5,
        'mother': 6,
        'children': [],
    },
    {
        'name': 'LISA SIMPSON',
        'id': 10,
        'yearOfBirth': 2019,
        'sex': 'female',
        'wife': null,
        'husband': null,
        'father': 5,
        'mother': 6,
        'children': [],
    },
    {
        'name': 'MAGGIE SIMPSON',
        'id': 11,
        'yearOfBirth': 2021,
        'sex': 'female',
        'wife': null,
        'husband': null,
        'father': 5,
        'mother': 6,
        'children': [],
    },
    {
        'name': 'LING BOUVIER',
        'id': 12,
        'yearOfBirth': 2022,
        'sex': 'male',
        'wife': null,
        'husband': null,
        'father': null,
        'mother': 8,
        'children': [],
    },
]

module.exports.parseData = (data) => {
    const gen1 = data.filter((item) => item.father === null && item.mother === null)
    return gen1;
}

// tach data -> array index
const changeData = (data) => {
    let result = []
    for(let i = 0; i < data.length; i++){
        let temp = []
        if(typeof data[i].wife == 'number') temp.push(data[i].wife)
        if(typeof data[i].husband == 'number') temp.push(data[i].husband)
        if(typeof data[i].father == 'number') temp.push(data[i].father)
        if(typeof data[i].mother == 'number') temp.push(data[i].mother)
        // console.log("data[i].children", data[i].children)
        temp = data[i].children ? temp.concat(data[i].children): temp
        // console.log("temp", temp)
        result.push({id: i, next: temp})
    }

    // console.log("result", result)
    return result;
}
let newData = changeData(dataSample)
// console.log("newData", newData)

module.exports.jsonToGraph = newData;

// data structure
const LinkedList = require('./LinkedList.js');
const Node = require('./Node.js');

class Graph {
  constructor(vertices) {
    //Total number of vertices in the graph
    this.vertices = vertices;
    //Array that holds linked lists equal to the number of vertices in the graph
    this.list = [];
    //Creating a new linked list for each vertice of the graph
    let it;
    for (it = 0; it < vertices; it++) {
      let temp = new LinkedList();
      this.list.push(temp);
    }
  }

  addEdge(source, destination) {
    if (source < this.vertices && destination < this.vertices)
    //Since we are implementing a directed list, (0,1) is not the same as (1,0)
    this.list[source].insertAtHead(destination);
    //If we were to implement an undirected graph where (0,1)==(1,0), 
    //we would create an additional edge from destination to source too:
    //this.list[destination].insertAtHead(source);
  }

  printGraph() {
    console.log(">> Adjacency List of Directed Graph <<");
    let i;
    for (i = 0; i < this.list.length; i++) {
      process.stdout.write("|" + String(i) + "| => ");
      let temp = this.list[i].getHead();
      while (temp != null) {
        process.stdout.write("[" + String(temp.data) + "] -> ");
        temp = temp.nextElement;
      }
      console.log("null ");
    }
  }

  getGraph(index){
    let i;
    let result = []
    for (i = 0; i < this.list.length; i++) {
    //   process.stdout.write("|" + String(i) + "| => ");
      let temp = this.list[i].getHead();
      while (temp != null) {
        // process.stdout.write("[" + String(temp.data) + "] -> ");   
        if(i == index) result.push(temp.data)     
        temp = temp.nextElement;
      }
    //   console.log("null ");
    }
    return result;
  }
}

let g = new Graph(13);
// g.addEdge(0, 1);
// g.addEdge(0, 4);
// g.addEdge(0, 5);

// g.addEdge(1, 0);
// g.addEdge(1, 4);
// g.addEdge(1, 5);

// g.addEdge(2, 3);
// g.addEdge(2, 6);
// g.addEdge(2, 7);
// g.addEdge(2, 8);

// g.addEdge(3, 2);
// g.addEdge(3, 6);
// g.addEdge(3, 7);
// g.addEdge(3, 8);

// g.addEdge(4, 0);
// g.addEdge(4, 1);

// g.addEdge(5, 0);
// g.addEdge(5, 1);
// g.addEdge(5, 6);
// g.addEdge(5, 9);
// g.addEdge(5, 10);
// g.addEdge(5, 11);

// g.addEdge(6, 2);
// g.addEdge(6, 3);
// g.addEdge(6, 5);
// g.addEdge(6, 9);
// g.addEdge(6, 10);
// g.addEdge(6, 11);

// g.addEdge(7, 2);
// g.addEdge(7, 3);

// g.addEdge(8, 2);
// g.addEdge(8, 3);
// g.addEdge(8, 12);

// g.addEdge(9, 5);
// g.addEdge(9, 6);

// g.addEdge(10, 5);
// g.addEdge(10, 6);

// g.addEdge(11, 5);
// g.addEdge(11, 6);

// g.addEdge(12, 8);

const addDataToGraph = (data) => {
    for(let i = 0; i < data.length; i++){
        for(let j = 0; j < data[i].next.length; j++){
            g.addEdge(data[i].id, data[i].next[j])
        }
    }
}
addDataToGraph(newData)
// g.printGraph();



// dem xem co bao nhieu the he trong Graph
const gengen = (genBefore) => {
    // const genAfter = []
    let setChildren = new Set()
    for(const p of genBefore){
        if(p.children && p.children.length > 0){
            // console.log(p)
            for(const c of p.children){
                setChildren.add(c)
            }
        }
    }
    // console.log(setChildren)
    let genAfter = [...dataSample]
    genAfter = genAfter.filter(item => setChildren.has(item.id))
    // console.log(genAfter)
    // console.log("-------------------------")
    return genAfter;
}

const countGeneration = (data = dataSample) => {
    let count = 0;
    let gen = [...dataSample]
    let result = []
    let listGen = []
    do {
        result = gengen(gen)
        count++;
        gen = [...result]
        if(result.length > 0) listGen.push(result)
    } while (result.length > 0);
    
    // console.log(listGen)
    return count;
}

module.exports.generation = countGeneration()

const parseGeneration = (data = dataSample) => {
    const countGen = countGeneration()
    // let data = [...dataSample]
    
    let resultgen = []
    let listGen = []
    let gen1 = data.filter(item => item.father === null && item.mother === null)
    listGen.push(gen1)
    // console.log("GEN 1 ---------->", gen1)   
    
    
    do {
        resultgen = gengen(gen1)
        gen1 = [...resultgen]
        if(resultgen.length > 0) listGen.push(resultgen)
    } while (resultgen.length > 0);

    // console.log("GEN ALL ----->", listGen)
    // console.log("result list gen: ", result)
    return listGen;
}

module.exports.parseGeneration = (data = dataSample) => {
    // const countGen = countGeneration()
    // let data = [...dataSample]
    
    console.log("data ------------------------------>", data)
    let resultgen = []
    let listGen = []
    let gen1 = data.filter(item => item.father === null && item.mother === null)
    listGen.push(gen1)
    console.log("GEN 1 ---------->", gen1)   
    
    
    do {
        resultgen = gengen(gen1)
        console.log("resultgen", resultgen)
        gen1 = [...resultgen]
        if(resultgen.length > 0) listGen.push(resultgen)
    } while (resultgen.length > 0);

    console.log("GEN ALL ----->", listGen)
    // console.log("result list gen: ", result)
    return listGen;
}

// ----------------------------------------------
const findPersonFromYOB = (data = dataSample, yob) => {
    for(let i = 0; i < dataSample.length; i++){
        console.log("dataSample[i].yearOfBirth", dataSample[i].yearOfBirth, yob)
        if(dataSample[i].yearOfBirth == parseInt(yob)) return i;
    }
}

module.exports.parseGenerationByYOB = (yob) => {
    g.printGraph();
    let index = findPersonFromYOB(dataSample, yob)
    console.log("index", index)
    let bfs = g.getGraph(index)
    let s = new Set(bfs)
    let dataAfterBFS = []
    for(let i = 0; i < dataSample.length; i++){
        // console.log(dataSample[i])
        // console.log("-------------------")
        if(s.has(i)) dataAfterBFS.push(dataSample[i])
    }
    let pG = parseGeneration(dataAfterBFS)
    return pG;
}



