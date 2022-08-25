import { Box, Card, CardContent, Typography } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

type Props = {
    show: boolean
}
/**
 * Empty results component.
 * @param show
 */
export default function Empty({ show }: Props) {
    if (!show) return <></>;
    return (
        <Card sx={{ my: 1 }} variant={'outlined'}>
            <CardContent>
                <Box display='flex' flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                    <SearchIcon sx={{ fontSize: 120 }} />
                    <Typography variant={'body1'}>
                        {'Sorry we couldn\'t find any results'}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}
