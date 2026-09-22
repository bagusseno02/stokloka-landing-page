export interface ApiResponse<T> {
  data: T;
  request_id?: string;
}
