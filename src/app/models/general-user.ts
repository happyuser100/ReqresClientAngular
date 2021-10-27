import { Datum } from "./datum";
import { Support } from "./support";

export interface GeneralUser {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Datum[];
  support: Support;
}
