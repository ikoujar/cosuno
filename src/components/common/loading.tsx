import { Box, Card, CardContent, Typography, CircularProgress } from '@mui/material';

type Props = {
    show: boolean
}
/**
 * Empty results component.
 * @param show
 */
export default function Loading({ show }: Props) {
    if (!show) return <></>;
    return (
        <Card sx={{ my: 1 }} variant={'outlined'}>
            <CardContent>
                <Box display='flex' flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                    <CircularProgress color="secondary" sx={{ my: 3 }}/>
                    <Typography variant={'body1'}>
                        Fetching data, please wait
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}
