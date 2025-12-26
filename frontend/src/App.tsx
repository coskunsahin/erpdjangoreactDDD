
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/admin/Products";
import Customers from "./pages/admin/Customers";
import Invoices from "./pages/admin/Invoices";
import AuditLogs from "./pages/admin/AuditLogs";

const user = { role: "admin", company: "Demo Ltd" };

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/admin/products" element={<Products />} />
        <Route path="/admin/customers" element={<Customers />} />
        <Route path="/admin/invoices" element={<Invoices />} />
        <Route path="/admin/audit" element={<AuditLogs />} />
      </Routes>
    </BrowserRouter>
  );
}
