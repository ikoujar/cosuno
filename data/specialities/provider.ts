import { Speciality } from '../../interfaces';
import specialities from './specialities.json';


/**
 * Get all specialities.
 */
export async function all(): Promise<Speciality[]> {
  return specialities;
}
