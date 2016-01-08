var planet = function() {
  //this function includes all necessary js files for the application
  function include(file){
    var script  = document.createElement('script');
    script.src  = file;
    script.type = 'text/javascript';
    script.defer = true;
    document.getElementsByTagName('head').item(0).appendChild(script);
  }
  //which planet to render based on data
  {% if planet.surface_temp >= 273 and planet.surface_temp <= 373 %}
    console.log('I am a habitableplanet planet');
    include('/static/js/planets/_habitableplanet.js')
  {% elif planet.planet_radius < 4 and planet.planet_radius >= 2 %}
    console.log('I am a blue gas planet');
    include('/static/js/planets/_gasblueplanet.js');
  {% elif planet.planet_radius > 4 %}
    console.log('I am a red gas planet');
    include('/static/js/planets/_gasredplanet.js');
  {% else %}
    console.log('I am a rocky planet');
    include('/static/js/planets/_rockyplanet.js');
  {% endif %}
});
