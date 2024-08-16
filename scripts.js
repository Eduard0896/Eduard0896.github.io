document.addEventListener('DOMContentLoaded', function() {
    // Extract data from the table
    const labels = [];
    const data = [];

    const rows = document.querySelectorAll('tbody tr');
    rows.forEach(row => {
        const cols = row.querySelectorAll('td');
        labels.push(cols[0].innerText);  // Month
        data.push(parseInt(cols[1].innerText));  // Sales
    });

    // Create the chart
    const ctx = document.getElementById('salesChart').getContext('2d');
    const salesChart = new Chart(ctx, {
        type: 'bar', // Change to 'line', 'pie', etc. for different types of charts
        data: {
            labels: labels,
            datasets: [{
                label: 'Monthly Sales',
                data: data,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});