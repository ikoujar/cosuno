import * as React from 'react';
import { Card, CardContent, Typography, Grid, Chip, Box } from '@mui/material';
import { useApi } from "../../hooks/useApi";
import { Company, Speciality } from "../../../interfaces";
import Image from 'next/image';
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../contexts/app.context";
import { Loading, Empty, Error, Pagination } from '../common';
import { useRouter } from "next/router";
import { cleanQueryParams } from "../../../utils/helpers";
import { Button } from "@mui/material";

type ItemProps = {
    item: Company
}
function CompanyItem({ item }: ItemProps) {
    return (
        <Card variant={'outlined'}>
            <Image
                alt={item.name}
                src={item.image}
                layout={"responsive"}
                width={300}
                height={300}
                placeholder={'blur'}
                blurDataURL={'placeholder.png'}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    { item.name }
                </Typography>
                <Box>
                    {
                        item.specialities.map(
                            e => <Chip key={e} label={e} size="small" sx={{ mr: 1, mb: 1 }}/>
                        )
                    }
                </Box>
            </CardContent>
        </Card>
    );
}

function SpecialitiesFilter() {

    const router = useRouter();
    const [selected, setSelected] = useState<String[]>([]);
    const { data } = useApi(`specialities`);

    const toggle = (speciality: Speciality) => {
        if (selected.includes(speciality.name)) {
            setSelected(selected.filter(e => e !== speciality.name));
        } else {
            setSelected([...selected, speciality.name])
        }
    }

    useEffect(() => {
        router.push({
            query: cleanQueryParams({ ...router.query, specialities: selected.join(','), page: undefined })
        });
    }, [selected])

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
                            color={selected.includes(speciality.name) ? 'primary': 'default'}
                        />
                    ))
                }
            </Box>
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <Button variant='outlined' color='warning' size='small' onClick={() => setSelected([])}>
                Clear
            </Button>
        </Grid>
    )
}


export default function List() {

    const { search } = useContext(AppContext)
    const router = useRouter();
    const { page, specialities } = router.query;

    const { data, loading, error } = useApi(`companies`, { q: search, page, specialities });
    const [pages, setPages] = useState<number>(0);

    useEffect(() => {
        setPages(data?.pages || 0);
    }, [data]);

    useEffect(() => {
        // Rest the current page to 1 when the user performs searching.
        router.push({
            query: cleanQueryParams({ ...router.query, page: undefined })
        });
    }, [search]);

    return (
        <Grid container spacing={2}>
            <SpecialitiesFilter />
            {
                data?.items.map((e: Company) =>
                    <Grid key={e.id} item md={3}>
                        <CompanyItem item={e} />
                    </Grid>
                )
            }
            <Grid item md={12}>
                <Empty show={!error && !loading && !data?.items?.length} />
                <Loading show={loading} />
                <Error show={!!error} />
            </Grid>
            <Grid item md={12} >
                <Pagination
                    count={pages}
                />
            </Grid>
        </Grid>
    );
}
