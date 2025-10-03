import { AdminDetailsProperty } from '@/src/features/property/admin/interfaces';
import { Description, Header, Main, Services } from './components';

export default function DetailsProperty({ data }: { data: AdminDetailsProperty }) {

    return (
        <article
            role="dialog"
            aria-labelledby="property-title"
            aria-modal="true"
            className="w-[95%] mx-auto my-6 bg-gray-50 min-h-screen rounded-3xl"
        >

            <Header data={data} />
            <Main data={data} />
            {data.services && <Services data={data} /> }
            <Description data={data} />
            
        </article>
    );
}
