document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('multiAxisChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'Dataset 1',
                yAxisID: 'y',
                borderColor: 'rgb(255, 99, 132)',
                data: [10, 20, 15, 25, 10, 30, 15]
            }, {
                label: 'Dataset 2',
                yAxisID: 'y1',
                borderColor: 'rgb(54, 162, 235)',
                data: [28, 25, 32, 18, 40, 19, 35]
            }]
        },
        options: {
            scales: {
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left'
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    grid: {
                        drawOnChartArea: false
                    }
                }
            }
        }
    });
});
