var star = function() {
  var container, stats;
  var camera, scene, renderer, controls;
  var fov = 25;
<<<<<<< HEAD
=======
  var texloader = new THREE.TextureLoader();
  var explocolor = texloader.load('public/images/star.png');
>>>>>>> 50d2ff1a4cf932c26275540e4bdb5956a1e417b5
  var start = Date.now();

  init();

  function init(){
    //set up scene and camera
    container = document.getElementById( 'space_container' );
    scene = new THREE.Scene();
    renderer = new THREE.WebGLRenderer({alpha: true});
    renderer.setClearColor( 0xffffff, 0);
    renderer.setSize(1000, window.innerHeight);
    camera = new THREE.PerspectiveCamera(fov, 1000/ window.innerHeight, 50, 10000);
    camera.position.set(0, 0, 100);
    camera.target = new THREE.Vector3( -30, 0, 0 );
    scene.add( camera );
    //move the camera around
    controls = new THREE.OrbitControls( camera );
    controls.minDistance = 100;
    controls.maxDistance = 400;
    //light
    var amlight = new THREE.AmbientLight( 0x888888 )
    scene.add( amlight );
    var dirlight = new THREE.DirectionalLight( 0xcccccc, 1 )
    dirlight.position.set(10,3,5)
    scene.add( dirlight );
    //star
    starmaterial = new THREE.ShaderMaterial({
      uniforms: {
        tExplosion: {
          type: "t",
          value: Textures.sunexplocolor
        },
        time: { // float initialized to 0
          type: "f",
          value: 0.0
        }
      },
      vertexShader: $.getScript("public/js/partials/_starvertex.js"),
      fragmentShader: $.getScript("public/js/partials/_starfragment.js"),
    });
    var geometry = new THREE.IcosahedronGeometry( 20, 5 );
    var star = new THREE.Mesh( geometry, starmaterial );
    star.position.set(0,0,0)
    scene.add(star);

    var spriteMaterial = new THREE.SpriteMaterial({
        map: Textures.glow,
        color: 0xFF6600,
        transparent: false, blending: THREE.AdditiveBlending
    });
      sprite = new THREE.Sprite( spriteMaterial );
      sprite.scale.set(70, 70, 70);
      star.add(sprite);

    container.appendChild( renderer.domElement );
    animate();
  }

  window.addEventListener('resize', function() {
    width = window.innerWidth,
    height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  });

  function animate() {
    requestAnimationFrame(animate);
    starmaterial.uniforms[ 'time' ].value = .00025 * ( Date.now() - start );
    controls.update();
    renderer.render( scene, camera );
  }
};
