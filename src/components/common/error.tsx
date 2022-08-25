import { Box, Card, CardContent, Typography } from '@mui/material';
import { Error as ErrorIcon } from '@mui/icons-material';

type Props = {
    show: boolean
}
/**
 * Empty results component.
 * @param show
 */
export default function Error({ show }: Props) {
    if (!show) return <></>;
    return (
        <Card sx={{ my: 1 }} variant={'outlined'}>
            <CardContent>
                <Box display='flex' flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                    <ErrorIcon sx={{ fontSize: 120 }} />
                    <Typography variant={'body1'}>
                        Something went wrong! please try again later.
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}
