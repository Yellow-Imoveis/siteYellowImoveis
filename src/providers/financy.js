import http from "../services/http";

export async function simulation(property_value, entry_percentage, tax_percentage, financing_years) {
  const res = await http.post('/financing/simulation', {
    property_value,
    entry_percentage,
    tax_percentage,
    financing_years
  });

  return res.data;
}

export async function totalPropertiesBySimulation(max_price) {
  const res = await http.get(`/financing/total-properties/${max_price}`);
  return res.data;
}

export function localSimulation(property_value, entry_percentage, tax_percentage, financing_years) {
  const TAX = 25.0;
  const SECURE = 64.00;

  const entry_value = property_value * (entry_percentage / 100);
  const real_value = property_value - entry_value;
  const amortization = real_value / (12 * financing_years);
  const tax_value = Math.pow(1 + (tax_percentage / 100), 1 / 12) - 1;
  const tax_month = real_value * tax_value;
  const installmentValue = amortization + tax_month + SECURE + TAX;
  const monthlyIncome = (installmentValue * 100) / 35;
  const taxAndSecure = SECURE + TAX;

  return {
    entry_value,
    real_value,
    amortization,
    tax_value,
    tax_month,
    installmentValue,
    monthlyIncome,
    taxAndSecure,
  };
}