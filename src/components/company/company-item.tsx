import * as React from 'react';
import { Company } from '../../../interfaces';
import { Box, Card, CardContent, Chip, Typography } from '@mui/material';
import Image from 'next/image';

type Props = {
    item: Company
}

export default function CompanyItem({ item }: Props) {
    return (
        <Card variant={'outlined'}>
            <Image
                alt={item.name}
                src={item.image}
                layout={'responsive'}
                width={300}
                height={300}
                placeholder={'blur'}
                blurDataURL={'placeholder.png'}
            />
            <CardContent>
                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                    <Typography gutterBottom variant='h5' component='div'>
                        {item.name}
                    </Typography>
                    <Typography gutterBottom variant='subtitle2'>
                        {item.city}
                    </Typography>
                </Box>
                <Box>
                    {
                        item.specialities.map(
                            e => <Chip key={e} label={e} size='small' sx={{ mr: 1 }} />
                        )
                    }
                </Box>
            </CardContent>
        </Card>
    );
}
