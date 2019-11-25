const material = new THREE.MeshPhongMaterial({ color: 'gray', shininess: 100 });

const boxMesh = function (a, b, x, y) {
    let box = new THREE.Mesh(new THREE.BoxGeometry(a, b, 1));
    box.position.set(x, y, 0);
    return box;
}

const draw = function (part, definition) {
    const boxes = definition.boxGeometries;
    for (let i = 0; i < boxes.length; i++) {
        const box = boxes[i];
        part.add(box);
    }
};

const topRightGeometries = {
    boxGeometries: [
        boxMesh(14.92, 1.2, -0.07465, 7.68555),
        boxMesh(1.6, 1.3, -2.05052, 8.99837),
        boxMesh(1.6, 1.3, 2.46627, 9.02775),

        boxMesh(1.6, 0.9, -2.05687, 6.49582),
        boxMesh(1.6, 0.9, -2, 4),

        boxMesh(1.6, 0.9, 2.46627, 6.49582),
        boxMesh(1.6, 0.9, 2.46627, 4),


    ]
};

const bottomLeftGeometries = {
    boxGeometries: [

    ]
};

draw(part1, topRightGeometries);
draw(part2, bottomLeftGeometries);

const debugGeometries = {
    boxGeometries: [
        boxMesh(0.1, 0.1, 0, 0),
        boxMesh(0.1, 0.1, -10, -10),
        boxMesh(0.1, 0.1, -10, 0),
        boxMesh(0.1, 0.1, -10, 10),
        boxMesh(0.1, 0.1, 10, -10),
        boxMesh(0.1, 0.1, 10, 0),
        boxMesh(0.1, 0.1, 10, 10),
        boxMesh(0.1, 0.1, 0, -10),
        boxMesh(0.1, 0.1, 0, 0),
        boxMesh(0.1, 0.1, 0, 10),
    ]
};
if (true) {
    draw(part1, debugGeometries);
};