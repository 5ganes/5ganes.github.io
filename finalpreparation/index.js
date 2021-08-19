class Tree {

    constructor(height, location) {
        this.height = height;
        this.location = location;
    }

    about() {
        return 'Height: ' + this.height + ', Location: ' + this.location;
    }

}

class DeciduousTree extends Tree {
    constructor(height, location, leafColor) {
        super(height, location);
        this.leafColor = leafColor;
    }

    about() {
        return super.about() + ', Leaf Color: ' + this.leafColor;
    }

}

let tree = new Tree(20, 'Fairfield');
console.log(tree.about());

let treeWithLeaf = new DeciduousTree(20, 'Fairfield', 'Green');
console.log(treeWithLeaf.about());
