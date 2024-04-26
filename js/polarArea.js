document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('polarChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'polarArea',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
            datasets: [{
                label: 'My Dataset',
                data: [11, 16, 7, 3, 14],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 205, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(153, 102, 255, 0.5)'
                ]
            }]
        },
        options: {
            responsive: true,
            scales: {
                r: {
                    angleLines: {
                        display: false
                    },
                    suggestedMin: 0,
                    suggestedMax: 10
                }
            }
        }
    });
});
