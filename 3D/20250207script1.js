let scene, camera, renderer, controls;
let selectedObject = null,allObjects = [];
// Gestion du clic sur un objet
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
const objects = [];
// Variables pour gérer la sélection
let originalColor = new THREE.Color();
const speed = 0.02;

function init() {
    scene = new THREE.Scene();            
    camera = new THREE.PerspectiveCamera(75,
					 window.innerWidth / window.innerHeight,
					 1.0, 5000);
    camera.position.set(0, 0, 1500);            
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight-100);
    document.getElementById('container').appendChild(renderer.domElement);
            
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.screenSpacePanning = false;
    controls.maxPolarAngle = Math.PI;

    const loadingScreen = document.getElementById('loading-screen');  
    const loader = new THREE.GLTFLoader();
    loader.load('nd-v0.gltf', function(gltf) {
        scene.add(gltf.scene);
	loadingScreen.style.display = 'none';
	gh1a = gltf.scene.getObjectByName("GH1a");
	gh1b = gltf.scene.getObjectByName("GH1b");
	gk1a = gltf.scene.getObjectByName("GK1a");
	gk1b = gltf.scene.getObjectByName("GK1b");
	gl1a = gltf.scene.getObjectByName("GL1a");
	gl1b = gltf.scene.getObjectByName("GL1b");
	ge1 = gltf.scene.getObjectByName("GE1");
	gf1 = gltf.scene.getObjectByName("GF1");
	
        allObjects = gltf.scene.children; // Stocker tous les objets du modèle	
	
        // Récupérer les objets cliquables	
        gltf.scene.traverse((child) => {	    
            if (child.isMesh) {		
                objects.push(child);
		// Sauvegarder la couleur initiale de chaque objet		
                child.userData.originalColor = child.material.color.clone();
            }
        });
    });

	    
    let lightFront = new THREE.DirectionalLight(0xffffff, 0.5);
    lightFront.position.set(10, 500, 2000);
    scene.add(lightFront);
            
    let lightBack = new THREE.DirectionalLight(0xffffff, 0.5);
    lightBack.position.set(0, 1000, -1000);
    scene.add(lightBack);
            
    let lightRight = new THREE.DirectionalLight(0xffffff, 0.5);
    lightRight.position.set(1100, 1000, 0);
    scene.add(lightRight);
            
    let lightLeft = new THREE.DirectionalLight(0xffffff, 0.5);
    lightLeft.position.set(-1100, 1000, 0);
    scene.add(lightLeft);

    let lightBottom = new THREE.DirectionalLight(0xffffff, 0.5);
    lightBottom.position.set(0, -2000, 0);
    scene.add(lightBottom);

    window.addEventListener('click', onClick);    
    window.addEventListener('touchstart', onTouch, { passive: false });
    // Écouter les événements du clavier
    window.addEventListener('keydown', onKeyDown, false);

}; // end init function


function onClick(event) {
    const rect = container.getBoundingClientRect();
    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    //mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    //mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    console.log("Mouse position:", event.clientX,event.clientY);
    selectObject();
}
        
function onTouch(event) {
    if (event.touches.length > 0) {
	const rect = container.getBoundingClientRect();
        mouse.x = ((event.touches[0].clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((event.touches[0].clientY - rect.top) / rect.height) * 2 + 1;
        //mouse.x = (event.touches[0].clientX / window.innerWidth) * 2 - 1;
        //mouse.y = -(event.touches[0].clientY / window.innerHeight) * 2 + 1;
        selectObject();
    }
}

// Fonction pour gérer les événements du clavier
function onKeyDown(event) {
    if (!selectedObject) return;
    switch (event.key) {
        case 'd':
        case 'D':
          // Rendre l'objet sélectionné invisible
          selectedObject.visible = false;
          break;

        case 's':
        case 'S':
          // Rendre visible uniquement l'objet sélectionné
          allObjects.forEach((obj) => obj.visible = false); // Cache tous les objets
          selectedObject.visible = true; // Affiche uniquement l'objet sélectionné
          break;

        case 'a':
        case 'A':
          // Rendre tous les objets visibles
          allObjects.forEach((obj) => obj.visible = true);
          break;
        }
}

function selectObject() {
    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects(objects);
    //const intersects = raycaster.intersectObjects(scene.children,true);    
    if (intersects.length > 0) { // 1 begin	
        const obj = intersects[0].object;
        if (selectedObject === obj) {
            // Désélection : remettre la couleur d'origine	    
            obj.material.color.copy(originalColor);
            selectedObject = null;
            document.getElementById('bottom-bar').innerText = "Click on a part";
        } else { // 2 begin	    		    
            // Désélectionner l'ancien objet	    
            if (selectedObject) {
                selectedObject.material.color.copy(originalColor);
            }
            // Sauvegarder le nouvel objet sélectionné et sa couleur d'origine	    
	    selectedObject = obj;
	    originalColor.copy(obj.userData.originalColor);

            // Calculer la couleur complémentaire	    
	    const complementaryColor = new THREE.Color(		
                1 - originalColor.r,
                1 - originalColor.g,
                1 - originalColor.b		
	    );
	    obj.material.color.copy(complementaryColor);

	    // Affichage du nom et de N si disponible	    
	    let infoText = `Selected part: ${obj.name || "No name"}`;
	    if (obj.userData.N !== undefined) {
                infoText += ` (number of teeth: ${obj.userData.N})`;
            }
	    document.getElementById('bottom-bar').innerText = infoText;
	} // 2 end	
    } // end 1    
    else { // else of 1	
        // Si on clique dans le vide, on désélectionne l'objet actuel	
        if (selectedObject) {
            selectedObject.material.color.copy(originalColor);
            selectedObject = null;
            document.getElementById('bottom-bar').innerText = "Click on a part";
        }
    } // end of 1    
}

function adjustLayout() {
    const topBar = document.getElementById('top-bar');
    const bottomBar = document.getElementById('bottom-bar');
    const container = document.getElementById('container');

    if (topBar && bottomBar && container) {
        const topBarHeight = topBar.offsetHeight;
        const bottomBarHeight = bottomBar.offsetHeight;
	
        // Ajuster la position du container dans <body>
        container.style.top = `${topBarHeight}px`;
        container.style.bottom = `${bottomBarHeight}px`;
    }

    // Ajuster la caméra et le rendu Three.js
    if (typeof camera !== 'undefined' && typeof renderer !== 'undefined') {
	const availableHeight
	      = window.innerHeight - topBar.offsetHeight - bottomBar.offsetHeight;
        camera.aspect = window.innerWidth / availableHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, availableHeight);
	
    }
}


      
function animate() {
    requestAnimationFrame(animate);

    const delta = speed;
    gh1a.rotation.z += -delta;
    gh1b.rotation.z = gh1a.rotation.z;
    gk1a.rotation.z = gh1a.rotation.z;
    gk1b.rotation.z = gh1a.rotation.z;
    gl1a.rotation.z = gh1a.rotation.z;
    gl1b.rotation.z = gh1a.rotation.z;
    ge1.rotation.z = gh1a.rotation.z;
    gf1.rotation.z = gh1a.rotation.z;
 
    controls.update();
    renderer.render(scene, camera);
}
        
init();
// Exécuter lors du chargement, du redimensionnement et du changement d’orientation
window.addEventListener('resize', adjustLayout);
window.addEventListener('orientationchange', adjustLayout);
document.addEventListener('DOMContentLoaded', adjustLayout);
animate();
