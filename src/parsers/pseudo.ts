import { css } from '../css';
import { pseudo as pseudoMapper } from '../pseudo';

export const pseudo = (p: any) => css(pseudoMapper(p))(p);
