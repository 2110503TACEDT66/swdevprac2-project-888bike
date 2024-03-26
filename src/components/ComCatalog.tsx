//import Productcard from '@/components/ProductCard';
import Link from 'next/link';

interface Company {
    id: string;
    name: string;
    address: string;
    website: string;
    description: string;
    tel: string;
}

interface CompanyData {
    count: number;
    data: Company[];
}

export default async function ComCatalog({ ComJson }: { ComJson: Promise<CompanyData> }) {
    const ComJsonReady = await ComJson

    return (
        <>
            <div className='text-center'>there are {ComJsonReady.count} companies</div>
            <div style={{ margin: "20px", display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around", alignContent: "space-around", padding: "10px" }}>
                {
                    ComJsonReady.data.map((ComItem: Company) => (
                        <Link href={`/booking?cid=${ComItem.id}&company=${ComItem.name}`} className='w-1/5'>
                            <div className='flex flex-col items-start justify-center bg-slate-600 rounded-lg p-5 m-5'>
                                <div className="">
                                    <h5 className=" text-xl font-bold tracking-tight text-white">
                                        {ComItem.name}
                                    </h5>
                                    <span className='text-gray-300'>Address: </span>
                                    <span className='text-blue-300'>{ComItem.address}</span>
                                    <br></br>
                                    <span className='text-gray-300'>Website: </span>
                                    <span className='text-blue-300'>{ComItem.website}</span>
                                    <br></br>
                                    <span className='text-gray-300'>Description: </span>
                                    <span className='text-blue-300'>{ComItem.description}</span>
                                    <br></br>
                                    <span className='text-gray-300'>Tel: </span>
                                    <span className='text-blue-300'>{ComItem.tel}</span>
                                    
                                    
                                    
                                </div>
                            </div>
                            {/* <Productcard carName={carItem.model} imgSrc={carItem.picture}/> */}
                        </Link>
                    ))
                }
            </div>
        </>
    );
}