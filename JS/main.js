const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera(-2, 2, 2, -2, 0.1, 10);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(1920, 1080);
document.body.appendChild(renderer.domElement);

// Floor
const floorGeometry = new THREE.BoxGeometry(2, 0.2, 2);
const textureLoader = new THREE.TextureLoader();
const floorTexture = textureLoader.load('https://cdn.architextures.org/textures/20/05/oak-stretcher-5ec11d400a353-1200.jpg'); 
floorTexture.wrapS = THREE.RepeatWrapping;
floorTexture.wrapT = THREE.RepeatWrapping;
floorTexture.repeat.set(4, 4); 
const floorMaterial = new THREE.MeshStandardMaterial({ map: floorTexture, color: 0xf3b17f });
const floorMesh = new THREE.Mesh(floorGeometry, floorMaterial);
floorMesh.castShadow = true; 
floorMesh.receiveShadow = true; 
floorMesh.position.set(0, -0.5, 0);
scene.add(floorMesh);

// Poster 1
const poster1Geom = new THREE.BoxGeometry(0.12, 0.6, 0.003);
const poster1Texture = textureLoader.load('https://static.wikia.nocookie.net/daughtersofcain/images/4/4d/PD_Alt_Cover_2.jpg');
const poster1Material = new THREE.MeshStandardMaterial({ map: poster1Texture });
const poster1 = new THREE.Mesh(poster1Geom, poster1Material);
poster1.position.set(-0.7, 1, -0.9);
scene.add(poster1);

// Poster 2
const poster2Texture = textureLoader.load('https://upload.wikimedia.org/wikipedia/en/d/d5/Bronco_orville_peck.jpeg');
const poster2Material = new THREE.MeshStandardMaterial({ map: poster2Texture });
const poster2 = new THREE.Mesh(poster1Geom, poster2Material);
poster2.position.set(-0.5, 1, -0.9);
scene.add(poster2);

// Poster 3
const poster3Texture = textureLoader.load('https://upload.wikimedia.org/wikipedia/en/d/d3/Paramore_-_This_Is_Why.png');
const poster3Material = new THREE.MeshStandardMaterial({ map: poster3Texture });
const poster3 = new THREE.Mesh(poster1Geom, poster3Material);
poster3.position.set(-0.3, 1, -0.9);
scene.add(poster3);

// Poster 4
const poster4Texture = textureLoader.load('https://upload.wikimedia.org/wikipedia/en/8/89/Dragon_Age_Origins_cover.png');
const poster4Material = new THREE.MeshStandardMaterial({ map: poster4Texture });
const poster4 = new THREE.Mesh(poster1Geom, poster4Material);
poster4.position.set(0.8, 1, -0.9);
scene.add(poster4);

// BED

// Bed Base
const bedBaseGeometry = new THREE.BoxGeometry(0.5, 0.2, 1);
const bedBaseTexture = textureLoader.load('https://cdn.architextures.org/textures/20/11/oak-5fc4cb29cb8cc-1200.jpg'); 
bedBaseTexture.wrapS = THREE.RepeatWrapping;
bedBaseTexture.wrapT = THREE.RepeatWrapping;
bedBaseTexture.repeat.set(2, 1); 
const bedBaseMaterial = new THREE.MeshStandardMaterial({ map: bedBaseTexture, color: 0x633b3b });
const bedCube1 = new THREE.Mesh(bedBaseGeometry, bedBaseMaterial);
bedCube1.position.set(-0.5, -0.2, -0.4);
scene.add(bedCube1);

// Bed Foam
const bedProperGeometry = new THREE.BoxGeometry(0.5, 0.2, 1);
const bedProperTexture = textureLoader.load('https://cdn.architextures.org/textures/24/1/plain-natural-sheer-twinbru-textiles-hcvced.jpg');
bedProperTexture.wrapS = THREE.RepeatWrapping;
bedProperTexture.wrapT = THREE.RepeatWrapping;
bedProperTexture.repeat.set(0.5, 0.5); 
const bedProperMaterial = new THREE.MeshStandardMaterial({ map: bedProperTexture, color: 0xf1dfdd });
const bedProperCube1 = new THREE.Mesh(bedProperGeometry, bedProperMaterial);
bedProperCube1.position.set(-0.5, 0, -0.4);
scene.add(bedProperCube1);

// Pillow
const pillowGeom = new THREE.BoxGeometry(0.35, 0.1, 0.2);
bedProperTexture.repeat.set(2, 1);
const pillowMaterial = new THREE.MeshStandardMaterial({ map: bedProperTexture, color: 0x89CFF0 });
const pillow1 = new THREE.Mesh(pillowGeom, pillowMaterial);
pillow1.position.set(-0.5, 0.2, -0.7);
scene.add(pillow1);

// Blanket
const blanketGeom = new THREE.BoxGeometry(0.5, 0.01, 0.65);
bedProperTexture.repeat.set(2, 1);
const blanket1 = new THREE.Mesh(blanketGeom, pillowMaterial);
blanket1.position.set(-0.5, 0.1, -0.25);
scene.add(blanket1);

// Bed Frame (Head)
const bedBaseGeometry2 = new THREE.BoxGeometry(0.51, 1.5, 0.05);
const bedBaseTexture2 = textureLoader.load('https://cdn.architextures.org/textures/20/11/oak-5fc4cb29cb8cc-1200.jpg');
bedBaseTexture2.wrapS = THREE.RepeatWrapping;
bedBaseTexture2.wrapT = THREE.RepeatWrapping;
bedBaseTexture2.repeat.set(1, 1);
const bedBaseMaterial2 = new THREE.MeshStandardMaterial({ map: bedBaseTexture, color: 0x633b3b });
const bedCube3 = new THREE.Mesh(bedBaseGeometry2, bedBaseMaterial2);
bedCube3.position.set(-0.5, -0.2, -0.9);
scene.add(bedCube3);

// Bed Frame (End)
const bedBaseGeometry3 = new THREE.BoxGeometry(0.5, 0.5, 0.05);
const bedBaseTexture3 = textureLoader.load('https://cdn.architextures.org/textures/20/11/oak-5fc4cb29cb8cc-1200.jpg');
bedBaseTexture3.wrapS = THREE.RepeatWrapping;
bedBaseTexture3.wrapT = THREE.RepeatWrapping;
bedBaseTexture3.repeat.set(2, 1);
const bedBaseMaterial3 = new THREE.MeshStandardMaterial({ map: bedBaseTexture, color: 0x633b3b });
const bedCube4 = new THREE.Mesh(bedBaseGeometry3, bedBaseMaterial3);
bedCube4.position.set(-0.5, -0.35, 0.08);
scene.add(bedCube4);


// Door Frame 1
const doorFrame1Geom = new THREE.BoxGeometry(0.03, 2, 0.03);
const doorFrameMaterial = new THREE.MeshStandardMaterial({ map: bedBaseTexture, color: 0x633b3b });
const doorFrame1 = new THREE.Mesh(doorFrame1Geom, bedBaseMaterial3);
doorFrame1.position.set(0, 0.5, 0.95);
scene.add(doorFrame1);

// Door Frame 2
const doorFrame2Geom = new THREE.BoxGeometry(0.03, 2, 0.03);
const doorFrame2 = new THREE.Mesh(doorFrame2Geom, bedBaseMaterial3);
doorFrame2.position.set(0.3, 0.5, 0.95);
scene.add(doorFrame2);

// Door Frame 2
const doorFrame3Geom = new THREE.BoxGeometry(0.33, 0.03, 0.03);
const doorFrame3 = new THREE.Mesh(doorFrame3Geom, bedBaseMaterial3);
doorFrame3.position.set(0.15, 1.5, 0.95);
scene.add(doorFrame3);

// STUDY TABLE

// Table cube 1 (Top)
const tableGeometry1 = new THREE.BoxGeometry(0.7, 0.1, 0.3);
const tableBaseTexture1 = textureLoader.load('https://cdn.architextures.org/textures/20/11/oak-5fc4cb29cb8cc-1200.jpg');
tableBaseTexture1.wrapS = THREE.RepeatWrapping;
tableBaseTexture1.wrapT = THREE.RepeatWrapping;
tableBaseTexture1.repeat.set(2, 1);
const tableBaseMaterial1 = new THREE.MeshStandardMaterial({ map: bedBaseTexture, color: 0x633b3b });
const table1 = new THREE.Mesh(tableGeometry1, tableBaseMaterial1);
table1.position.set(0.4, 0, -0.8);
scene.add(table1);

// Table cube 2 (Left)
const tableGeometry2 = new THREE.BoxGeometry(0.03, 0.7, 0.3);
const tableBaseTexture2 = textureLoader.load('https://cdn.architextures.org/textures/20/11/oak-5fc4cb29cb8cc-1200.jpg');
tableBaseTexture2.wrapS = THREE.RepeatWrapping;
tableBaseTexture2.wrapT = THREE.RepeatWrapping;
tableBaseTexture2.repeat.set(2, 1);
const tableBaseMaterial2 = new THREE.MeshStandardMaterial({ map: bedBaseTexture, color: 0x633b3b });
const table2 = new THREE.Mesh(tableGeometry2, tableBaseMaterial2);
table2.position.set(0.04, -0.3, -0.8);
scene.add(table2);

// Table cube 3 (Right)
const tableGeometry3 = new THREE.BoxGeometry(0.03, 0.7, 0.3);
const tableBaseTexture3 = textureLoader.load('https://cdn.architextures.org/textures/20/11/oak-5fc4cb29cb8cc-1200.jpg');
tableBaseTexture3.wrapS = THREE.RepeatWrapping;
tableBaseTexture3.wrapT = THREE.RepeatWrapping;
tableBaseTexture3.repeat.set(2, 1);
const tableBaseMaterial3 = new THREE.MeshStandardMaterial({ map: bedBaseTexture, color: 0x633b3b });
const table3 = new THREE.Mesh(tableGeometry3, tableBaseMaterial3);
table3.position.set(0.75, -0.3, -0.8);
scene.add(table3);

// Keyboard
const keyboardGeom = new THREE.BoxGeometry(0.25, 0.05, 0.1);
const keyboardTexture = textureLoader.load('https://cdn.architextures.org/textures/20/06/granite-stack-5ed7e8b109990-1200.jpg');
keyboardTexture.wrapS = THREE.RepeatWrapping;
keyboardTexture.wrapT = THREE.RepeatWrapping;
keyboardTexture.repeat.set(1, 1);
const keyboardMaterial = new THREE.MeshStandardMaterial({ map: keyboardTexture, color: 0x000000});
const keyboard = new THREE.Mesh(keyboardGeom, keyboardMaterial);
keyboard.position.set(0.45, 0.094, -0.7);
scene.add(keyboard);

// Mouse
const mouseGeom = new THREE.CapsuleGeometry( 0.025, 0.025, 16, 16 ); 
const mouse = new THREE.Mesh( mouseGeom, keyboardMaterial ); 
mouse.rotation.x = -Math.PI / 2;
scene.add( mouse );
mouse.position.set(0.7, 0.094, -0.7);

// BOOKSHELF

// Shelf
const shelfGeom = new THREE.BoxGeometry(0.13, 0.1, 0.5);
const shelf1 = new THREE.Mesh(shelfGeom, tableBaseMaterial1);
shelf1.position.set(-0.75, 0.2, 0.8);
scene.add(shelf1);

// Shelf 2
const shelf2 = new THREE.Mesh(shelfGeom, tableBaseMaterial1);
shelf2.position.set(-0.75, 0.8, 0.8);
scene.add(shelf2);

// Shelf 3
const shelfGeom3 = new THREE.BoxGeometry(0.13, 0.1, 0.5);
const shelf3 = new THREE.Mesh(shelfGeom3, tableBaseMaterial1);
shelf3.position.set(-0.75, 1.4, 0.8);
scene.add(shelf3);

// Shelf Beam 1
const beamGeometry = new THREE.BoxGeometry( 0.04, 0.1, 0.02 ); 
const beam1 = new THREE.Mesh(beamGeometry, tableBaseMaterial1 );
scene.add(beam1);
beam1.position.set(-0.8, 0.105, 1.036);

// Shelf Beam 2
const beam2 = new THREE.Mesh(beamGeometry, tableBaseMaterial1 );
scene.add(beam2);
beam2.position.set(-0.8, 0.705, 1.036);

// Shelf Beam 3
const beam3 = new THREE.Mesh(beamGeometry, tableBaseMaterial1 );
scene.add(beam3);
beam3.position.set(-0.8, 1.305, 1.036);

// SHELF 1 (HIGHEST)

// Book1
const bookGeom = new THREE.BoxGeometry( 0.06, 0.28, 0.03); 
const bookTexture1 = textureLoader.load('https://cdn.architextures.org/textures/21/07/leather-60ed62c94f911-1200.jpg');
bookTexture1.wrapS = THREE.RepeatWrapping;
bookTexture1.wrapT = THREE.RepeatWrapping;
bookTexture1.repeat.set(2, 1);
const bookMaterial1 = new THREE.MeshStandardMaterial({ map: bookTexture1, color: 0xADD8E6 });
const book1 = new THREE.Mesh(bookGeom, bookMaterial1 );
scene.add(book1);
book1.position.set(-0.78, 1.555, 1);

// Book 2
const bookMaterial2 = new THREE.MeshStandardMaterial({ map: bookTexture1, color: 0x8B0000 });
const book2 = new THREE.Mesh(bookGeom, bookMaterial2 );
scene.add(book2);
book2.position.set(-0.78, 1.555, 0.96);

// Book 3
const book3 = new THREE.Mesh(bookGeom, bookMaterial1 );
scene.add(book3);
book3.position.set(-0.78, 1.555, 0.92);

// Book 4
const book4 = new THREE.Mesh(bookGeom, bookMaterial2 );
scene.add(book4);
book4.position.set(-0.78, 1.555, 0.88);

// Book 5
const book5 = new THREE.Mesh(bookGeom, bookMaterial1 );
scene.add(book5);
book5.position.set(-0.78, 1.555, 0.84);

// Book 6
const book6 = new THREE.Mesh(bookGeom, bookMaterial2 );
scene.add(book6);
book6.position.set(-0.78, 1.555, 0.8);

// Book 7
const book7 = new THREE.Mesh(bookGeom, bookMaterial1 );
scene.add(book7);
book7.position.set(-0.78, 1.555, 0.76);

// Book 8
const book8 = new THREE.Mesh(bookGeom, bookMaterial2 );
scene.add(book8);
book8.position.set(-0.78, 1.555, 0.72);

// Book 9
const book9 = new THREE.Mesh(bookGeom, bookMaterial2 );
scene.add(book8);
book8.position.set(-0.78, 1.555, 0.72);

// Book 10
const book10 = new THREE.Mesh(bookGeom, bookMaterial1 );
scene.add(book10);
book10.position.set(-0.78, 1.555, 0.68);

// Book 11
const book11 = new THREE.Mesh(bookGeom, bookMaterial2 );
scene.add(book11);
book11.position.set(-0.78, 1.555, 0.64);

// Book 12
const book12 = new THREE.Mesh(bookGeom, bookMaterial1 );
scene.add(book12);
book12.position.set(-0.78, 1.555, 0.60);


// SHELF 2 (MIDDLE)

// Book 1
const book21 = new THREE.Mesh(bookGeom, bookMaterial1 );
scene.add(book21);
book21.position.set(-0.78, 0.955, 0.92)

// Book 2
const book22 = new THREE.Mesh(bookGeom, bookMaterial2 );
scene.add(book22);
book22.position.set(-0.78, 0.955, 0.88);

// Book 3
const book23 = new THREE.Mesh(bookGeom, bookMaterial1 );
scene.add(book23);
book23.position.set(-0.78, 0.955, 0.92);

// Book 4
const book24 = new THREE.Mesh(bookGeom, bookMaterial2 );
scene.add(book24);
book24.position.set(-0.78, 0.955, 0.88);

// Book 5
const book25 = new THREE.Mesh(bookGeom, bookMaterial1 );
scene.add(book25);
book25.position.set(-0.78, 0.955, 0.84);

// Book 6
const book26 = new THREE.Mesh(bookGeom, bookMaterial2 );
scene.add(book26);
book26.position.set(-0.78, 0.955, 0.8);

// Book 7
const book27 = new THREE.Mesh(bookGeom, bookMaterial1 );
scene.add(book27);
book27.position.set(-0.78, 0.955, 0.76);

// Book 8
const book28 = new THREE.Mesh(bookGeom, bookMaterial2 );
scene.add(book28);
book28.position.set(-0.78, 0.955, 0.72);

// Book 9
const book29 = new THREE.Mesh(bookGeom, bookMaterial2 );
scene.add(book29);
book29.position.set(-0.78, 0.955, 0.72);

// Book 10
const book210 = new THREE.Mesh(bookGeom, bookMaterial1 );
scene.add(book210);
book210.position.set(-0.78, 0.955, 0.68);

// Book 11
const book211 = new THREE.Mesh(bookGeom, bookMaterial2 );
scene.add(book211);
book211.position.set(-0.78, 0.955, 0.64);

// Book 12
const book212 = new THREE.Mesh(bookGeom, bookMaterial1 );
scene.add(book212);
book212.position.set(-0.78, 0.955, 0.60);


// SHELF 3 (LOWEST)

// Book 1
const book31 = new THREE.Mesh(bookGeom, bookMaterial1 );
scene.add(book31);
book31.position.set(-0.78, 0.355, 0.92)

// Book 2
const book32 = new THREE.Mesh(bookGeom, bookMaterial2 );
scene.add(book32);
book32.position.set(-0.78, 0.355, 0.88);

// Book 3
const book33 = new THREE.Mesh(bookGeom, bookMaterial1 );
scene.add(book23);
book23.position.set(-0.78, 0.355, 0.92);

// Book 4
const book34 = new THREE.Mesh(bookGeom, bookMaterial2 );
scene.add(book24);
book24.position.set(-0.78, 0.355, 0.88);

// Book 5
const book35 = new THREE.Mesh(bookGeom, bookMaterial1 );
scene.add(book35);
book35.position.set(-0.78, 0.355, 0.84);

// Book 6
const book36 = new THREE.Mesh(bookGeom, bookMaterial2 );
scene.add(book36);
book36.position.set(-0.78, 0.355, 0.8);

// Book 7
const book37 = new THREE.Mesh(bookGeom, bookMaterial1 );
scene.add(book37);
book37.position.set(-0.78, 0.355, 0.76);

// Book 8
const book38 = new THREE.Mesh(bookGeom, bookMaterial2 );
scene.add(book38);
book38.position.set(-0.78, 0.355, 0.72);

// Book 9
const book39 = new THREE.Mesh(bookGeom, bookMaterial2 );
scene.add(book39);
book39.position.set(-0.78, 0.355, 0.72);

// Book 10
const book310 = new THREE.Mesh(bookGeom, bookMaterial1 );
scene.add(book310);
book310.position.set(-0.78, 0.355, 0.68);

// Book 11
const book311 = new THREE.Mesh(bookGeom, bookMaterial2 );
scene.add(book311);
book311.position.set(-0.78, 0.355, 0.64);

// Book 12
const book312 = new THREE.Mesh(bookGeom, bookMaterial1 );
scene.add(book312);
book312.position.set(-0.78, 0.355, 0.60);


// CARPET
const carpetGeom = new THREE.CylinderGeometry( 0.6, 0, 0.008, 32 );
const carpetTexture = textureLoader.load('https://cdn.architextures.org/textures/22/01/blonde-carpet-61d5eba232e29-1200.jpg');
carpetTexture.wrapS = THREE.RepeatWrapping;
carpetTexture.wrapT = THREE.RepeatWrapping;
carpetTexture.repeat.set(5, 5);
const carpetMaterial = new THREE.MeshStandardMaterial( {map: carpetTexture, color: 0xC0C0C0} ); 
const carpet1 = new THREE.Mesh(carpetGeom, carpetMaterial);
carpet1.position.set(0, -0.4, 0);
scene.add( carpet1 );


// BAMBOO/SUCCULENT PLANT

// Pot for plant
const potGeom = new THREE.CylinderGeometry( 0.07, 0.05, 0.4, 32 );
const potTexture = textureLoader.load('https://cdn.architextures.org/textures/21/07/dense-rattan-60e5d38c5ef69-1200.jpg');
potTexture.wrapS = THREE.RepeatWrapping;
potTexture.wrapT = THREE.RepeatWrapping;
const potMaterial = new THREE.MeshStandardMaterial( {map: potTexture, color: 0xCFFE5B4} ); 
const pot1 = new THREE.Mesh(potGeom, potMaterial);
pot1.position.set(0.9, -0.2, -0.8);
scene.add( pot1 )

// Soil for Plant
const soilGeom = new THREE.CylinderGeometry( 0.06, 0.05, 0.01, 32 );
const soilTexture = textureLoader.load('https://cdn.architextures.org/textures/21/07/dense-rattan-60e5d38c5ef69-1200.jpg');
soilTexture.wrapS = THREE.RepeatWrapping;
soilTexture.wrapT = THREE.RepeatWrapping;
const soilMaterial = new THREE.MeshStandardMaterial( {map: soilTexture, color: 0x27221c} ); 
const soil1 = new THREE.Mesh(soilGeom, soilMaterial);
soil1.position.set(0.9, 0, -0.8);
scene.add( soil1 );

// Plant stem
const stemGeom = new THREE.CylinderGeometry( 0.02, 0.02, 1.3, 32 );
const stemTexture = textureLoader.load('https://cdn.architextures.org/textures/22/01/blonde-carpet-61d5eba232e29-1200.jpg');
stemTexture.wrapS = THREE.RepeatWrapping;
stemTexture.wrapT = THREE.RepeatWrapping;
const stemMaterial = new THREE.MeshStandardMaterial( {map: stemTexture, color: 0x377C07} ); 
const stem1 = new THREE.Mesh(stemGeom, stemMaterial);
stem1.position.set(0.88, 0.2, -0.8);
scene.add( stem1 );

// Plant stem
const stemGeom2 = new THREE.CylinderGeometry( 0.015, 0.015, 0.9, 32 );
const stem2 = new THREE.Mesh(stemGeom2, stemMaterial);
stem2.position.set(0.91, 0.2, -0.82);
scene.add( stem2 );

// Plant stem
const stemGeom3 = new THREE.CylinderGeometry( 0.011, 0.011, 0.5, 32 );
const stem3 = new THREE.Mesh(stemGeom3, stemMaterial);
stem3.position.set(0.91, 0.2, -0.80);
scene.add( stem3 );

// CHAIR

// chair
const chairGeom1 = new THREE.BoxGeometry(0.18, 0.8, 0.03);
const leatherTexture = textureLoader.load('https://cdn.architextures.org/textures/21/07/leather-60ed62c94f911-1200.jpg');
leatherTexture.wrapS = THREE.RepeatWrapping;
leatherTexture.wrapT = THREE.RepeatWrapping;
leatherTexture.repeat.set(2, 1);
const chairMaterial1 = new THREE.MeshStandardMaterial({ map: leatherTexture, color: 0x000000 });
const chair1 = new THREE.Mesh(chairGeom1, chairMaterial1);
chair1.position.set(0.80, 0.9, -0.12);
scene.add(chair1);

// chair 2
const chairGeom2 = new THREE.BoxGeometry(0.18, 0.1, 0.15);
leatherTexture.repeat.set(2, 1);
const chair2 = new THREE.Mesh(chairGeom2, chairMaterial1);
chair2.position.set(0.80, 0.45, -0.18);
scene.add(chair2);

// chair base 1
const chairBaseGeom = new THREE.CylinderGeometry( 0.03, 0.03, 0.4, 32 );
const aluminumTexture = textureLoader.load('https://cdn.architextures.org/textures/20/11/aluminium-5fc4d39fc6ca4-1200.jpg');
aluminumTexture.wrapS = THREE.RepeatWrapping;
aluminumTexture.wrapT = THREE.RepeatWrapping;
const chairBaseMaterial = new THREE.MeshStandardMaterial( {map: aluminumTexture, color: 0xC0C0C0} ); 
const cylinder = new THREE.Mesh(chairBaseGeom, chairBaseMaterial);
cylinder.position.set(0.7, 0, -0.28);
scene.add( cylinder );

// chair base 2
const chairBaseGeom2 = new THREE.CylinderGeometry( 0.08, 0.08, 0.01, 32 );
const cylinder2 = new THREE.Mesh(chairBaseGeom2, chairBaseMaterial);
cylinder2.position.set(0.7, -0.15, -0.28);
scene.add( cylinder2 );

// Monitor Base
const monitorBaseGeom = new THREE.CylinderGeometry( 0.02, 0.02, 0.4, 32 );
const monitorBaseMesh = new THREE.MeshStandardMaterial( {map: aluminumTexture, color: 0xC0C0C0} ); 
const monitorBase = new THREE.Mesh(monitorBaseGeom, chairBaseMaterial);
monitorBase.position.set(0.45, 0, -0.8);
scene.add( monitorBase );

// MONITOR
const monitorGeom = new THREE.BoxGeometry(0.28, 0.6, 0.01);
const monitorTexture = textureLoader.load('https://cdn.architextures.org/textures/20/11/oak-5fc4cb29cb8cc-1200.jpg');
monitorTexture.wrapS = THREE.RepeatWrapping;
monitorTexture.wrapT = THREE.RepeatWrapping;
monitorTexture.repeat.set(2, 1);
const monitorMaterial = new THREE.MeshStandardMaterial({ map: aluminumTexture, color: 0x000000 });
const monitor = new THREE.Mesh(monitorGeom, monitorMaterial);
monitor.position.set(0.5, 0.5, -0.75);
scene.add(monitor);

// LAMP

// Lamb Base
const lampBaseGeom = new THREE.CylinderGeometry( 0.02, 0.02, 0.7, 32);
const lampBase = new THREE.Mesh(lampBaseGeom, chairBaseMaterial);
lampBase.position.set(0.15, 0, -0.8);
scene.add( lampBase );

// Lampshade
const lampShadeGeom = new THREE.CylinderGeometry( 0.05, 0.07, 0.3, 32 );
const lampShadeTexture = textureLoader.load('https://cdn.architextures.org/textures/21/07/dense-rattan-60e5d38c5ef69-1200.jpg');
lampShadeTexture.wrapS = THREE.RepeatWrapping;
lampShadeTexture.wrapT = THREE.RepeatWrapping;
const lampShadeMaterial = new THREE.MeshStandardMaterial( {map: lampShadeTexture, color: 0xCFFE5B4} ); 
const lampShade = new THREE.Mesh(lampShadeGeom, lampShadeMaterial);
lampShade.position.set(0.15, 0.5, -0.8);
scene.add( lampShade );


// WALLS

// Define wall texture
const wallTexture = textureLoader.load('https://cdn.architextures.org/textures/21/07/reconstituted-stone-60e5d2a79de42-1200.jpg');
wallTexture.wrapS = THREE.RepeatWrapping;
wallTexture.wrapT = THREE.RepeatWrapping;
wallTexture.repeat.set(2, 2); 
const wallMaterial = new THREE.MeshStandardMaterial({ map: wallTexture, color: 0xf0f0db });

// Create walls
const wallGeometry1 = new THREE.BoxGeometry(0.1, 0.7, 2.0);
const wallGeometry2 = new THREE.BoxGeometry(0.1, 2, 2.0); 
const leftWall = new THREE.Mesh(wallGeometry1, wallMaterial);
const rightWall = new THREE.Mesh(wallGeometry2, wallMaterial);
leftWall.position.set(-1, -0.23, -0.05); 
rightWall.position.set(-0.05, 0.4, -1.02); 
rightWall.rotation.y = -Math.PI / 2; 
scene.add(leftWall);
scene.add(rightWall);

// WALL WITH WINDOW

// Wall Component 1
const wallGeometry3 = new THREE.BoxGeometry(0.1, 1.5, 0.5);
const wallComponent1 = new THREE.Mesh(wallGeometry3, wallMaterial);
wallComponent1.position.set(-1, 0.65, -0.8);
scene.add(wallComponent1);

// Wall Component 2
const wallGeometry4 = new THREE.BoxGeometry(0.1, 1.5, 0.8);
const wallComponent2 = new THREE.Mesh(wallGeometry4, wallMaterial);
wallComponent2.position.set(-1, 0.65, 0.55);
scene.add(wallComponent2);

// Wall Component 3
const wallGeometry5 = new THREE.BoxGeometry(0.1, 0.3, 0.9);
const wallComponent3 = new THREE.Mesh(wallGeometry5, wallMaterial);
wallComponent3.position.set(-1, 1.25, -0.15);
scene.add(wallComponent3);

// Window Glass
const windowWidth = 1;
const windowHeight = 0.7;
const windowDepth = 0.11; 
const windowGeometry = new THREE.BoxGeometry(windowWidth, windowHeight, windowDepth);
const windowPosition = new THREE.Vector3(-0.65, 1.5, 0.1);
const windowMesh = new THREE.Mesh(windowGeometry);
windowMesh.position.copy(windowPosition);

// Window mesh
const windowMaterial = new THREE.MeshStandardMaterial({ color: 0x87ceeb, transparent: true, opacity: 0.5 });
const windowMeshObject = new THREE.Mesh(windowGeometry, windowMaterial);
windowMeshObject.position.copy(windowPosition);

// Rotation
windowMeshObject.rotation.x = Math.PI / 2;
windowMeshObject.rotation.y = Math.PI / 2;

const wallGeometryNoWindow = new THREE.BoxGeometry(0.1, 2, 2.0 - windowDepth);
const wallMaterial2 = new THREE.MeshStandardMaterial({ map: wallTexture, color: 0xf0f0db });
const wallNoWindow = new THREE.Mesh(wallGeometryNoWindow, wallMaterial2);
wallNoWindow.position.set(leftWall.position.x, leftWall.position.y, leftWall.position.z);
windowMeshObject.position.z += windowDepth / 2;
scene.add(windowMeshObject);

// LIGHTING

// Sunset/Dawn light
const sunlight = new THREE.DirectionalLight(0xF48037 , 0.3);
sunlight.position.set(-0.75, 1.5, 0.1); // position sa light
sunlight.target.position.set(0.5, -0.3, -0.8); // target sa light
sunlight.intensity = 2;
scene.add(sunlight);
scene.add(sunlight.target);

// Light adjustmentsdasdasjdh
const ambientLight = new THREE.AmbientLight(0x404040); 
ambientLight.intensity = 0.5;

// Lampshade light
const lampLight = new THREE.PointLight(0xFFC0CB, 1, 60);
lampLight.position.set(0.15, 0.7, -0.8); // Position sa light
scene.add(lampLight);

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

// Camera shit
camera.position.set(2, 5, 2);
camera.lookAt(0, 0, 0);

// Animation shit
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();



