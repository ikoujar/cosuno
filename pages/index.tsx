import type { NextPage } from 'next';
import Main from '../src/layouts/main';
import { CompanyList } from '../src/components/company';

const Home: NextPage = () => {
    return (
        <Main title='Cosuno - Companies'>
            <CompanyList />
        </Main>
    );
};

export default Home;
