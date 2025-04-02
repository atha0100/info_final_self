'use client';

import Link from "next/link";

interface Transaction {
  id: number;
  date: string;
  description: string;
  amount: number;
  type: "income" | "expense";
  category: string;
}

interface BudgetItem {
  category: string;
  allocated: number;
  spent: number;
  remaining: number;
}

const recentTransactions: Transaction[] = [
  {
    id: 1,
    date: "2025-04-02",
    description: "Maintenance Fee Payment",
    amount: 1500,
    type: "expense",
    category: "Maintenance"
  },
  {
    id: 2,
    date: "2025-04-01",
    description: "Common Area Cleaning",
    amount: 800,
    type: "expense",
    category: "Cleaning"
  },
  {
    id: 3,
    date: "2025-03-31",
    description: "Monthly Income",
    amount: 12500,
    type: "income",
    category: "Income"
  },
  {
    id: 4,
    date: "2025-03-30",
    description: "Electricity Bill",
    amount: 3200,
    type: "expense",
    category: "Utilities"
  },
];

const budgetItems: BudgetItem[] = [
  {
    category: "Maintenance",
    allocated: 5000,
    spent: 3500,
    remaining: 1500
  },
  {
    category: "Cleaning",
    allocated: 2000,
    spent: 1200,
    remaining: 800
  },
  {
    category: "Utilities",
    allocated: 4000,
    spent: 3200,
    remaining: 800
  },
  {
    category: "Insurance",
    allocated: 2500,
    spent: 1800,
    remaining: 700
  },
];

const financialStats = {
  totalRevenue: 125000,
  totalExpenses: 85000,
  balance: 40000,
  monthlyFee: 1500,
  reserveFund: 25000,
  annualBudget: 150000,
};

export default function FinancePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="py-8 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-800">Financial Overview</h1>
            <Link
              href="/finances/reports"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Generate Report
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-8 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Total Revenue */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Total Revenue</h3>
              <p className="text-3xl font-bold text-green-600">${financialStats.totalRevenue.toLocaleString()}</p>
              <p className="text-sm text-gray-600 mt-2">Year-to-date income</p>
            </div>

            {/* Total Expenses */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Total Expenses</h3>
              <p className="text-3xl font-bold text-red-600">${financialStats.totalExpenses.toLocaleString()}</p>
              <p className="text-sm text-gray-600 mt-2">Year-to-date expenses</p>
            </div>

            {/* Current Balance */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Current Balance</h3>
              <p className="text-3xl font-bold text-blue-600">${financialStats.balance.toLocaleString()}</p>
              <p className="text-sm text-gray-600 mt-2">Available funds</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Transactions */}
      <section className="py-8 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Recent Transactions</h2>
          <div className="bg-white rounded-xl shadow-md">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Description
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Amount
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Category
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {recentTransactions.map((transaction) => (
                    <tr key={transaction.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {new Date(transaction.date).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {transaction.description}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        ${transaction.amount.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          transaction.type === "income" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                        }`}>
                          {transaction.type}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {transaction.category}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Budget Overview */}
      <section className="py-8 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Budget Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {budgetItems.map((item) => (
              <div key={item.category} className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.category}</h3>
                <div className="flex items-center mb-2">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{ width: `${(item.spent / item.allocated) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <p>Spent: ${item.spent.toLocaleString()}</p>
                  <p>Remaining: ${item.remaining.toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monthly Fee Details */}
      <section className="py-8 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Monthly Fee Details</h2>
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Current Monthly Fee</h3>
                <p className="text-2xl font-bold">${financialStats.monthlyFee.toLocaleString()}</p>
                <p className="text-sm text-gray-600 mt-2">Effective from April 2025</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Reserve Fund</h3>
                <p className="text-2xl font-bold">${financialStats.reserveFund.toLocaleString()}</p>
                <p className="text-sm text-gray-600 mt-2">Current reserve balance</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
