//import Productcard from '@/components/ProductCard';
import Link from 'next/link';


export default async function ApptCatalog({ApptJson}: {ApptJson:Object}) {
    const ApptJsonReady = await ApptJson

    return (
        <>
            there are {ApptJsonReady.count} ... appointments
            <div style={{margin:"20px",display:"flex",flexDirection:"row", flexWrap:"wrap", justifyContent:"space-around", alignContent:"space-around", padding:"10px"}}>
                {
                    ApptJsonReady.data.map((ApptItem:object)=>(
                        <Link href={`/booking/admin`} className='w-1/5'>
                            {ApptItem.user}
                            {/* <Productcard carName={carItem.model} imgSrc={carItem.picture}/> */}
                        </Link>
                    ))
                }
            </div>
        </>
    );
}