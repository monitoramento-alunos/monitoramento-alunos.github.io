// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
var ctx = document.getElementById("myPieChart-frontal");
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['bravo', 'nojo', 'medo', 'feliz', 'neutro', 'triste', 'surpreso'],
    datasets: [{
      data: [  Math.round((443*100)/3422),   Math.round((25*100)/3422) ,   Math.round((335*100)/3422), Math.round((1720*100)/3422),  Math.round((311*100)/3422),   Math.round((572*100)/3422),   Math.round((16*100)/3422)],
      backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc', '#A020F0', '#FA8072', '#FF8C00','#FFD700'],
      hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: true,
      position: 'right'
    },


    cutoutPercentage: 0,
  },
});


var ctx1 = document.getElementById("myPieChart-frontal1");
var myPieChart = new Chart(ctx1, {
  type: 'pie',
  data: {
    labels: ['bravo', 'nojo', 'medo', 'feliz', 'neutro', 'triste', 'surpreso'],
    datasets: [{
      data: [  Math.round((443*100)/3422),   Math.round((25*100)/3422) ,   Math.round((335*100)/3422), Math.round((1720*100)/3422),  Math.round((311*100)/3422),   Math.round((572*100)/3422),   Math.round((16*100)/3422)],
      backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc', '#A020F0', '#FA8072', '#FF8C00','#FFD700'],
      hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: true,
      position: 'right'
    },


    cutoutPercentage: 0,
  },
});

var ctx2 = document.getElementById("myPieChart-frontal2");
var myPieChart = new Chart(ctx2, {
  type: 'pie',
  data: {
    labels: ['bravo', 'nojo', 'medo', 'feliz', 'neutro', 'triste', 'surpreso'],
    datasets: [{
      data: [  Math.round((443*100)/3422),   Math.round((25*100)/3422) ,   Math.round((335*100)/3422), Math.round((1720*100)/3422),  Math.round((311*100)/3422),   Math.round((572*100)/3422),   Math.round((16*100)/3422)],
      backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc', '#A020F0', '#FA8072', '#FF8C00','#FFD700'],
      hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: true,
      position: 'right'
    },


    cutoutPercentage: 0,
  },
});

var ctx3 = document.getElementById("myPieChart-frontal3");
var myPieChart = new Chart(ctx3, {
  type: 'pie',
  data: {
    labels: ['bravo', 'nojo', 'medo', 'feliz', 'neutro', 'triste', 'surpreso'],
    datasets: [{
      data: [  Math.round((443*100)/3422),   Math.round((25*100)/3422) ,   Math.round((335*100)/3422), Math.round((1720*100)/3422),  Math.round((311*100)/3422),   Math.round((572*100)/3422),   Math.round((16*100)/3422)],
      backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc', '#A020F0', '#FA8072', '#FF8C00','#FFD700'],
      hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: true,
      position: 'right'
    },


    cutoutPercentage: 0,
  },
});
