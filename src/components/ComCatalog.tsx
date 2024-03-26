//import Productcard from '@/components/ProductCard';
import Link from 'next/link';


export default async function ComCatalog({ComJson}: {ComJson:Object}) {
    const ComJsonReady = await ComJson

    return (
        <>
            <div className='text-center'>there are {ComJsonReady.count} companies</div>
            <div style={{margin:"20px",display:"flex",flexDirection:"row", flexWrap:"wrap", justifyContent:"space-around", alignContent:"space-around", padding:"10px"}}>
                {
                    ComJsonReady.data.map((ComItem:object)=>(
                        <Link href={`/booking/admin`} className='w-1/5'>
                            {ComItem.name}
                            {/* <Productcard carName={carItem.model} imgSrc={carItem.picture}/> */}
                        </Link>
                    ))
                }
            </div>
        </>
    );
}