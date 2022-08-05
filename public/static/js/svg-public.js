
$(document).ready(function(){
  let iframe_type = window.parent.document.getElementById('pmt-iframe').attributes['data-type'].nodeValue
  console.log(iframe_type)
  window.svgPanZoom('#svg-template', {
    viewportSelector: '.svg-pan-zoom_viewport',
    zoomEnabled: true,
    controlIconsEnabled: true,
    fit: true,
    center: true,
    minZoom: 1,
    eventsListenerElement: document.querySelector('#svg-template')
  })
  $('.svg-template').bind('contextmenu',function(e){return false})
  $('.close').click(function(){
    window.parent.postMessage('close', '*');
  })
  window.addEventListener('message', function(e){
    console.log(e.data)
  })
})
