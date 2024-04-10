export const headers = new Headers();
headers.append(
  "Authorization",
  `Bearer ${import.meta.env.VITE_API_ACCESS_TOKEN}`,
);
headers.append("accept", "application/json");
