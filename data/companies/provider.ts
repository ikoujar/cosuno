import { Company } from '../../interfaces';
import companies from './companies.json';


/**
 * Companies Pagination with search
 * @param page
 * @param search
 * @param specialities
 * @return Company[]
 */
export async function pagination(
    page: number = 1,
    search?: string,
    specialities?: string[]
): Promise<{ page: number, pages: number, items: Company[] }> {
  let data = companies
  if (search) {
    const filter = (e: Company) => e.name.toLowerCase().includes(search.toLowerCase());
    data = data.filter(filter);
  }
  if (specialities) {
    const filter = (e: Company) => e.specialities.some(r => specialities.includes(r));
    data = data.filter(filter);
  }
  // Maximum page size by default is 20 records per page.
  const pageSize = 8;
  const sliceFrom = (page - 1) * pageSize;
  const sliceTo = sliceFrom + pageSize;
  return {
    page,
    pages: Math.ceil(data.length / pageSize),
    items: data.slice(sliceFrom, sliceTo)
  };
}
