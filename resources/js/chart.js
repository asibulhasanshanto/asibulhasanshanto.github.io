    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['2013', '2014', '2015', '2016', '2017', '2018','2019','2020'],
        datasets: [{
            label: 'first',
            
            backgroundColor: 'rgba(255, 255, 255, 0)',
            borderColor: '#000',
            data: [50, 55, 58, 60, 70, 59, 60,70],
        },
        {
            label: 'second',
            backgroundColor: 'rgba(255, 255, 255, 0)',
            borderColor: 'rgb(255, 99, 132)',
            data:  [50, 55, 65, 62, 58, 65, 60,70]
        }]
    },

    // Configuration options go here
    options: {
       title: {
            display: true,
            text: 'Sales report',
            position:'top',
            marginLeft:0,
            fontSize:20,
        }
    }
});