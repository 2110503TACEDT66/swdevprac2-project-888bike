import Image from 'next/image'
import '../../interface'
import InteractiveCard from './InteractiveCard'

export default function Card ({hospitalItem} : { hospitalItem: HospitalItem}) {
  return (
    <InteractiveCard>
        <div className='h-2/4 relative'>
            <Image 
                src={hospitalItem.picture} 
                alt='Product Picture'
                fill={true}
                objectFit='cover'
            />
        </div>
        <div className='flex flex-col items-center'>
            <h3 className='font-semibold mt-3'>{hospitalItem.name}</h3>
            <div className='text-gray-500 text-sm ml-2 mt-3'>
              <p>Address: {hospitalItem.address}</p>
              <p>District: {hospitalItem.district}</p>
              <p>Province: {hospitalItem.province}</p>
              <p>Postal Code: {hospitalItem.postalcode}</p>
              <p>Tel: {hospitalItem.tel}</p>
              <p>ID: {hospitalItem.id}</p>
              <p>_ID: {hospitalItem._id}</p>
              <p>__V: {hospitalItem.__v}</p>
            </div>
        </div>
    </InteractiveCard>
  )
}