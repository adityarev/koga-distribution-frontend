import { format as momentFormat } from '../settings/moment';
import moment from '../creators/time';

export const currentTime = moment.format(momentFormat);
