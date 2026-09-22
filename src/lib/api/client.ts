import "server-only";

export async function backendRequest<T>(path: string, accessToken: string): Promise<T> {
  const baseUrl = process.env.BACKEND_API_URL;
  if (!baseUrl) throw new Error("BACKEND_API_URL belum dikonfigurasi.");
  if (!path.startsWith("/api/v1/") || path.includes("..")) throw new Error("Path API tidak valid.");
  const response = await fetch(baseUrl + path, {
    headers: { Authorization: `Bearer ${accessToken}` },
    cache: "no-store",
    signal: AbortSignal.timeout(10000),
  });
  if (!response.ok) throw new Error(`Backend mengembalikan status ${response.status}.`);
  return response.json() as Promise<T>;
}
