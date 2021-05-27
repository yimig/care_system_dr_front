<template>
  <div id="login_mask" class="absolute h-full w-full z-80 flex justify-center items-center" v-if="is_show">
    <div class="login h-96 w-72 bg-blue-dark relative z-100 rounded-2xl text-white flex flex-col items-center">
      <h2 class="my-6 text-4xl">Login System</h2>
      <div class="input_area w-60 flex justify-center items-center flex-col">
        <el-input v-model="uname" placeholder="请输入用户名" class="my-2"></el-input>
        <el-input v-model="password" placeholder="请输入密码" class="my-2" show-password></el-input>
        <el-button @click="verify" class="my-8">进入系统</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import * as THREE from 'three';
import axios from 'axios';
export default {
  name: "Login",
  data(){
    return{
      is_show:true,
      uname:'',
      password:''
    }
 },
  methods:{
    verify(){
      var __this = this;
      axios.post('http://localhost:3000/staffLogin',{
        sname:this.uname,
        password:this.password
      })
      .then(function (response) {
        console.log(this)
        if(response.data.result){
          __this.$emit('pass',response.data.sid);
          __this.$data.is_show=false;
        }
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
    }
  },
  mounted() {
    const SEPARATION = 100, AMOUNTX = 50, AMOUNTY = 50;
    let container;
    let camera, scene, renderer;
    let particles, count = 0;
    let windowHalfX = window.innerWidth / 2;
    let windowHalfY = window.innerHeight / 2;

    var __this = this;
    init();
    animate();

    function init() {
      container=document.getElementById('login_mask');
      camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
      camera.position.z = 1000;
      scene = new THREE.Scene();

      const numParticles = AMOUNTX * AMOUNTY;
      const positions = new Float32Array( numParticles * 3 );
      const scales = new Float32Array( numParticles );

      let i = 0, j = 0;

      for ( let ix = 0; ix < AMOUNTX; ix ++ ) {
        for ( let iy = 0; iy < AMOUNTY; iy ++ ) {
          positions[ i ] = ix * SEPARATION - ( ( AMOUNTX * SEPARATION ) / 2 ); // x
          positions[ i + 1 ] = 0; // y
          positions[ i + 2 ] = iy * SEPARATION - ( ( AMOUNTY * SEPARATION ) / 2 ); // z
          scales[ j ] = 1;
          i += 3;
          j ++;
        }
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute( 'position', new THREE.BufferAttribute( positions, 3 ) );
      geometry.setAttribute( 'scale', new THREE.BufferAttribute( scales, 1 ) );

      const material = new THREE.ShaderMaterial( {
        uniforms: {
          color: { value: new THREE.Color( 0xE5F0FF ) },
        },
        vertexShader: 'attribute float scale;void main() {vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );gl_PointSize = scale * ( 300.0 / - mvPosition.z );gl_Position = projectionMatrix * mvPosition;}',
        fragmentShader: 'uniform vec3 color;void main() {if ( length( gl_PointCoord - vec2( 0.5, 0.5 ) ) > 0.475 ) discard;gl_FragColor = vec4( color, 1.0 );}'
      } );

      particles = new THREE.Points( geometry, material );
      scene.add( particles );

      renderer = new THREE.WebGLRenderer( { antialias: true } );
      renderer.setPixelRatio( window.devicePixelRatio );
      renderer.setSize( window.innerWidth, window.innerHeight );
      renderer.setClearColor('#ffffff',1.0);
      let canvas = renderer.domElement;
      console.log(canvas)
      canvas.style.position='absolute';
      container.appendChild( canvas );
      container.style.touchAction = 'none';
      window.addEventListener( 'resize', onWindowResize );
    }

    function onWindowResize() {
      windowHalfX = window.innerWidth / 2;
      windowHalfY = window.innerHeight / 2;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize( window.innerWidth, window.innerHeight );
    }

    function animate() {
      if(__this)
      {
        requestAnimationFrame( animate );
        render();
      }
    }

    function render() {
      camera.position.x = 0;
      camera.position.y = 200;
      camera.lookAt( scene.position );
      const positions = particles.geometry.attributes.position.array;
      const scales = particles.geometry.attributes.scale.array;
      let i = 0, j = 0;
      for ( let ix = 0; ix < AMOUNTX; ix ++ ) {
        for ( let iy = 0; iy < AMOUNTY; iy ++ ) {
          positions[ i + 1 ] = ( Math.sin( ( ix + count ) * 0.3 ) * 50 ) +
              ( Math.sin( ( iy + count ) * 0.5 ) * 50 );
          scales[ j ] = ( Math.sin( ( ix + count ) * 0.3 ) + 1 ) * 20 +
              ( Math.sin( ( iy + count ) * 0.5 ) + 1 ) * 20;
          i += 3;
          j ++;
        }
      }
      particles.geometry.attributes.position.needsUpdate = true;
      particles.geometry.attributes.scale.needsUpdate = true;
      renderer.render( scene, camera );
      count += 0.1;
    }
  }
}
</script>

<style scoped>
.login{
  background: rgba(91,162,255,0.8);
}
</style>