const material = new THREE.MeshPhongMaterial({ color: 'gray', shininess: 100 });

const zPosition = 0;
const thickness = 5;

const boxMesh = function (a, b, x, y) {
    let mesh = new THREE.Mesh(new THREE.BoxGeometry(a, b, thickness));
    mesh.position.set(x, y, zPosition);
    return mesh;
}

const triangleMesh = function (x1, y1, x2, y2, x3, y3) {
    let geometry = new THREE.Geometry();

    geometry.vertices.push(
        new THREE.Vector3(10, 0, 0),
        new THREE.Vector3(0, 10, 0),
        new THREE.Vector3(0, 0, 10),
    );

    geometry.faces.push(new THREE.Face3(0, 1, 2));

    let mesh = new THREE.Mesh(geometry);
    let x = (x1 + x2 + x3) / 3, y = (y1 + y2 + y3) / 3;
    mesh.position.set(x, y, zPosition);
    return mesh;
}

const draw = function (part, definition) {
    const meshes = definition.boxGeometries;
    for (let i = 0; i < meshes.length; i++) {
        const mesh = meshes[i];
        part.add(mesh);
    }
};

const topRightGeometries = {
    boxGeometries: [
        boxMesh(1.67, 1.26, -2.025, 9.03),
        boxMesh(1.67, 1.26, +2.455, 9.03),

        boxMesh(14.56, 1.55, 0.43, 7.625),
        boxMesh(0.4, 1.15, -7.05, 7.825),


        boxMesh(1.67, 0.85, -2.025, 6.425),
        boxMesh(1.61, 0.85, 2.455, 6.425),

        boxMesh(13.37, 1.5, 1.025, 5.25),

        boxMesh(1.67, 0.9, -2.025, 4.05),
        boxMesh(1.61, 0.9, +2.455, 4.05),

        boxMesh(10.57, 1.55, 2.425, 2.825),


    ]
};

const bottomLeftGeometries = {
    boxGeometries: [
        boxMesh(1.59, 3.95, -6.455, 4.025),

        boxMesh(2.8, 1.55, -4.26, 2.825)
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

        triangleMesh(0, 0, 0, 10, 10, 0)
    ]
};
if (true) {
    draw(part1, debugGeometries);
};