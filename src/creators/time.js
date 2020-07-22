import moment from 'moment';
import { country } from '../settings/moment';

export default moment().locale(country);
