<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <style>
        body {
            font-family: 'Poppins', sans-serif;
            background-color: #f8f9fa;
        }

        .jumbotron {
            background-color: #007bff;
            color: #ffffff;
            overflow: hidden;
            position: relative;
            border-radius: 10px;
            padding: 20px;
        }

        .moving-text {
            white-space: nowrap;
            animation: continuousMovement 10s linear infinite;
        }

        @keyframes continuousMovement {
            0% {
                transform: translateX(0);
            }

            100% {
                transform: translateX(100%);
            }
        }

        .card {
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
            border: none;
        }

        #totalExpenses {
            font-weight: 600;
            color: #007bff;
        }

        .list-group-item {
            background-color: #ffffff;
            color: #495057;
            border: 1px solid #dee2e6;
            margin-bottom: 8px;
        }
    </style>
    <title>Stylish Expense Tracker</title>
</head>

<body>

    <div class="container mt-5">
        <div class="jumbotron text-center">
            <h1 class="display-4">Expense Tracker</h1>
            <p class="lead moving-text">
                Track your expenses and stay on budget.
                Manage your financial goals efficiently with our stylish expense tracker.
                Analyze your spending patterns and make informed financial decisions.
            </p>
        </div>

        <div class="card">
            <div class="card-body">

                <h4 class="card-title text-center mb-4">Total Expenses: $<span id="totalExpenses">0.00</span></h4>

                <h5 class="text-center mb-3">Expense List</h5>

                <div id="expenseList" class="list-group">
                    <!-- Stylish list goes here -->
                </div>

                <form id="expenseForm" class="mt-3">
                    <div class="form-group">
                        <label for="title">Title:</label>
                        <input type="text" id="title" class="form-control" required>
                    </div>

                    <div class="form-group">
                        <label for="amount">Amount:</label>
                        <input type="number" id="amount" class="form-control" step="0.01" required>
                    </div>

                    <button type="button" onclick="addExpense()" class="btn btn-primary btn-block">Add Expense</button>
                </form>

            </div>
        </div>

    </div>

    <script>
        let expenses = [];

        // Load expenses from localStorage
        if (localStorage.getItem('expenses')) {
            expenses = JSON.parse(localStorage.getItem('expenses'));
        }

        function updateUI() {
            const totalExpensesElement = document.getElementById('totalExpenses');
            const expenseListElement = document.getElementById('expenseList');

            // Calculate total expenses
            const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0).toFixed(2);
            totalExpensesElement.textContent = totalExpenses;

            // Update the expense list
            expenseListElement.innerHTML = '';
            expenses.forEach(expense => {
                const listItem = document.createElement('li');
                listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
                listItem.innerHTML = `
                    <span>${expense.title}</span>
                    <span class="badge badge-primary badge-pill">$${expense.amount.toFixed(2)}</span>
                    <div>
                        <button onclick="editExpense(${expense.id})" class="btn btn-info btn-sm mr-2">Edit</button>
                        <button onclick="deleteExpense(${expense.id})" class="btn btn-danger btn-sm">Delete</button>
                    </div>
                `;
                expenseListElement.appendChild(listItem);
            });

            // Save expenses to localStorage
            saveExpensesToLocalStorage();
        }

        function saveExpensesToLocalStorage() {
            localStorage.setItem('expenses', JSON.stringify(expenses));
        }

        function addExpense() {
            const titleInput = document.getElementById('title');
            const amountInput = document.getElementById('amount');

            const title = titleInput.value.trim();
            const amount = parseFloat(amountInput.value);

            if (title && !isNaN(amount) && amount > 0) {
                // Add the new expense
                const newExpense = { id: Date.now(), title, amount };
                expenses.push(newExpense);

                // Update the UI
                updateUI();

                // Clear the form
                titleInput.value = '';
                amountInput.value = '';
            } else {
                alert('Please enter a valid title and amount.');
            }
        }

        function editExpense(id) {
            const expense = expenses.find(exp => exp.id === id);
            if (expense) {
                const title = prompt('Enter new title:', expense.title);
                const amount = prompt('Enter new amount:', expense.amount);

                if (title !== null && amount !== null) {
                    expense.title = title.trim();
                    expense.amount = parseFloat(amount);
                    updateUI();
                }
            }
        }

        function deleteExpense(id) {
            expenses = expenses.filter(exp => exp.id !== id);
            updateUI();
        }

        document.addEventListener('DOMContentLoaded', () => {
            // Initial UI update
            updateUI();
        });
    </script>

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>

</html>