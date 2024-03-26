//import Productcard from '@/components/ProductCard';
import Link from 'next/link';


export default async function ApptCatalog({ ApptJson }: { ApptJson: Object }) {
    const ApptJsonReady = await ApptJson

    return (
        <>
            there are {ApptJsonReady.count} appointments
            <div style={{ margin: "20px", display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around", alignContent: "space-around", padding: "10px" }}>
                {
                    ApptJsonReady.data.map((ApptItem: object) => (
                        <Link href={`/appointments/manage?&aid=${ApptItem.id}&company=${ApptItem.company.name}`} className='w-1/3'>
                            {/* {JSON.stringify(ApptItem)}  */}
                            <div className='flex flex-col items-start justify-center bg-slate-600 rounded-lg p-5 m-5'>
                                <div className="">
                                    <h5 className=" text-xl font-bold tracking-tight text-white">
                                        {ApptItem.company.name}
                                    </h5>
                                    <span className='text-gray-300'>Address: </span>
                                    <span className='text-blue-300'>{ApptItem.company.address}</span>
                                    <br></br>
                                    <span className='text-gray-300'>Description: </span>
                                    <span className='text-blue-300'>{ApptItem.company.description}</span>
                                    <br></br>
                                    <span className='text-gray-300'>Tel: </span>
                                    <span className='text-blue-300'>{ApptItem.company.tel}</span>
                                    <br></br>
                                    <span className='text-gray-300'>Website: </span>
                                    <span className='text-blue-300'>{ApptItem.company.website}</span>
                                    <br></br>
                                    <span className='text-gray-300'>Date: </span>
                                    <span className='text-blue-300'>{ApptItem.apptDate}</span>
                                    <br></br>
                                    <span className='text-gray-300'>User: </span>
                                    <span className='text-blue-300'>{ApptItem.user}</span>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </>
    );
}