import * as React from 'react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useApi } from '../../hooks/useApi';
import { Speciality } from '../../../interfaces';
import { cleanQueryParams } from '../../../utils/helpers';
import { Box, Button, Chip, Grid } from '@mui/material';

export default function SpecialitiesFilter() {

    const router = useRouter();
    const [selected, setSelected] = useState<String[]>([]);
    const { data } = useApi(`specialities`);

    const toggle = (speciality: Speciality) => {
        if (selected.includes(speciality.name)) {
            setSelected(selected.filter(e => e !== speciality.name));
        } else {
            setSelected([...selected, speciality.name]);
        }
    };

    useEffect(() => {
        router.push({
            query: cleanQueryParams({ ...router.query, specialities: selected.join(','), page: undefined })
        });
    }, [selected]);

    return (
        <Grid item md={12} display={'flex'}>
            <Box flexGrow={1}>
                {
                    data?.map((speciality: Speciality) => (
                        <Chip
                            key={speciality.name}
                            label={speciality.name}
                            onClick={() => toggle(speciality)}
                            sx={{ mr: 1 }}
                            color={selected.includes(speciality.name) ? 'primary' : 'default'}
                        />
                    ))
                }
            </Box>
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <Button variant='outlined' color='warning' size='small' onClick={() => setSelected([])}>
                Clear
            </Button>
        </Grid>
    );
}
