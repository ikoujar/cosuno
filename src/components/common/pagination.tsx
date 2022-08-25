import { useRouter } from 'next/router';
import { cleanQueryParams } from '../../../utils/helpers';
import { Box, Pagination } from "@mui/material";

type Props = {
    count: number,
}
/**
 * Pagination component.
 * @param count
 * @constructor
 */
export default function MyPagination({ count }: Props) {

    const router = useRouter();
    const active = parseInt((router.query.page || 1).toString());
    const onChange = (page: number) => {
        router.push({
            query: cleanQueryParams({ ...router.query, page })
        });
    };

    if (count <= 1) return <></>;

    return (
        <Box display={'flex'} justifyContent={'center'} mb={2}>
            <Pagination
                count={count}
                variant="outlined"
                color="primary"
                page={active}
                onChange={(_, value) => onChange(value)}
            />
        </Box>
    );
}
