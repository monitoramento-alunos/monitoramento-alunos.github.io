var
  canvas = document.getElementById('gradient'),
  context = canvas.getContext('2d'),
  gradient = context.createLinearGradient(0, 0, 0, 140);

//   {0:'#14078a',1:'#6a01a6',2:'#ae2891',3:'#e06363', 4:'#fba636', 5:'#f1f522'}
gradient.addColorStop(1, '#14078a');
gradient.addColorStop(0.8, '#6a01a6');    
gradient.addColorStop(0.6, '#ae2891');
gradient.addColorStop(0.5, '#e06363');
gradient.addColorStop(0.3, '#fba636');
gradient.addColorStop(0, '#f1f522');

context.fillStyle = gradient;
context.fillRect(0, 0, 20, 200);