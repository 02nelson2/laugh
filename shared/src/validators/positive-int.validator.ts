import { z } from 'zod';

export let IsPosInt = () => z.number().int().nonnegative();
