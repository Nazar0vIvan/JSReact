import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";
import "./app.css";

function App() {
  const employees = [
    { name: "John C.", salary: 800,   increase: false },
    { name: "Alex. M", salary: 3000,  increase: true },
    { name: "Carl W.", salary: 15000, increase: false },
  ];

  return (
    <div className="app">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>

      <EmployeesList data={employees} />
      <EmployeesAddForm />
    </div>
  );
}

export default App;