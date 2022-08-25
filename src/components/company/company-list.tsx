import * as React from 'react';
import { Grid } from '@mui/material';
import { useApi } from '../../hooks/useApi';
import { Company } from '../../../interfaces';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../contexts/app.context';
import { Loading, Empty, Error, Pagination } from '../common';
import { useRouter } from 'next/router';
import { cleanQueryParams } from '../../../utils/helpers';
import SpecialitiesFilter from './company-specialities-fitler';
import CompanyItem from './company-item';

export default function List() {

    const { search } = useContext(AppContext);
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
                    <Grid key={e.id} item xs={12} md={6} lg={3}>
                        <CompanyItem item={e} />
                    </Grid>
                )
            }
            <Grid item md={12}>
                <Empty show={!error && !loading && !data?.items?.length} />
                <Loading show={loading} />
                <Error show={!!error} />
            </Grid>
            <Grid item md={12}>
                <Pagination
                    count={pages}
                />
            </Grid>
        </Grid>
    );
}
