/////////////////////////////////
// CODING CHALLENGE

/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

*/

class Structure {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}

class Park extends Structure {

    constructor(name, buildYear, numberOfTress, parkArea) {
        super(name, buildYear);
        this.numberOfTress = numberOfTress;
        this.parkArea = parkArea
    }
    parkDensity = () =>  this.numberOfTress/this.parkArea;


    getAge = () => {
        let now = new Date().getFullYear();
        return now - this.buildYear;
    }

}

class Street extends Structure {
    constructor(name, buildYear, length) {
        super(name, buildYear);
        this.length = length;
    }
    getLength = () => {
        return this.length;
    }
}

let parks = [
    new Park('Eden Garden', 1950, 1200, 6000),

 new Park('Cubbon Park', 1960, 1300, 10000),

new Park('Laal Bagh', 1970, 900, 9000),
]

let street1 = new Street('Mosque Road', 1800, 2);

let street2 = new Street('Chruch Street', 2000, 3);

let street3 = new Street('M.G Road', 1900, 4);

let street4 = new Street('C.V Raman Road', 1950, 5);

for(let park of parks) {
    console.log('Park Density: ', park.parkDensity());
    if(park.numberOfTress > 1000) {
        console.log('more than thousand trees in',park.name);
    }
}

let age = 0;
for(let park of parks) {
    age = park.getAge() + age;
}

console.log('Park Avg Age: ', age/parks.length);


