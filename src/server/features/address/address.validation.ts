import { z } from 'zod';

export const createAddressSchema = z.object({
    label: z
        .string()
        .max(50, { message: 'Label must not exceed 50 characters.' })
        .nonempty({ message: 'Label is required.' }),
    street: z
        .string()
        .max(100, { message: 'Street must not exceed 100 characters.' })
        .nonempty({ message: 'Street is required.' }),
    village_id: z
        .bigint({ message: 'Village ID must be a valid BigInt.' })
        .nonnegative({ message: 'Village ID must be a positive number.' }),
    district_id: z
        .bigint({ message: 'District ID must be a valid BigInt.' })
        .nonnegative({ message: 'District ID must be a positive number.' }),
    city_id: z
        .bigint({ message: 'City ID must be a valid BigInt.' })
        .nonnegative({ message: 'City ID must be a positive number.' }),
    province_id: z
        .bigint({ message: 'Province ID must be a valid BigInt.' })
        .nonnegative({ message: 'Province ID must be a positive number.' }),
    country: z
        .string()
        .max(100, { message: 'Country must not exceed 100 characters.' })
        .optional(),
    postal_code: z
        .string()
        .max(10, { message: 'Postal code must not exceed 10 characters.' })
        .optional(),
    description: z
        .string()
        .max(150, { message: 'Description must not exceed 150 characters.' })
        .optional(),
    is_default: z
        .boolean({ message: 'Is default must be a boolean.' })
        .default(false),
    user_id: z
        .string({ message: 'User ID must be a valid string.' })
        .optional(),
    latitude: z
        .number({ message: 'Latitude must be a valid number.' })
        .optional(),
    longitude: z
        .number({ message: 'Longitude must be a valid number.' })
        .optional(),
});

export const updateAddressSchema = createAddressSchema.partial();
