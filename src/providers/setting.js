import http from "../services/http";

export async function getSetting(slug) {
  const res = await http.get(`/settings/${slug}`);
  return res.data;
}