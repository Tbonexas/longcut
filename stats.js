window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        title:{
            text: "Customer Satisfaction Based on Reviews"
        },
        axisY: {
            title: "Satisfied Customers",
            includeZero: true,
            suffix: "%"
        },
        data: [{
            type: "stepArea",
            markerSize: 5,
            xValueFormatString: "YYYY",
            yValueFormatString: "#,##0.##\"%\"",
            dataPoints: [
                { x: new Date(2013, 0), y: 34 },
                { x: new Date(2014, 0), y: 73 },
                { x: new Date(2015, 0), y: 78 },
                { x: new Date(2016, 0), y: 82 },
                { x: new Date(2017, 0), y: 70 },
                { x: new Date(2018, 0), y: 86 },
                { x: new Date(2019, 0), y: 80 }
            ]
        }]
    });
    chart.render();
    
    }

 