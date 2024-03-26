import Image from 'next/image'
import '../../interface'
import InteractiveCard from './InteractiveCard'

interface CompanyItem {
  name: string
  address: string
  website: string
  description: string
  tel: string
}

export default function Card ({CompanyItem} : { CompanyItem: CompanyItem}) {
  return (
    // <InteractiveCard contentName={CompanyName}>
    //         <Image src={imgSrc}
    //         alt={hospitalName}
    //         width={600}
    //         height={400}
    //         className='object-cover rounded-t-lg'
    //         />
    //         <div className='flex flex-col items-center justify-center'>
    //             <div className="pt-5 mb-3">
    //                 <h5 className=" text-xl font-bold tracking-tight text-white">{hospitalName}</h5>
    //             </div>
    //             {
    //                 onRating?
    //                 <Rating
    //                     className='mb-5'
    //                     id={hospitalName + " Rating"}
    //                     name={hospitalName + " Rating"}
    //                     data-testid={hospitalName + " Rating"}
    //                     value={rating}
    //                     precision={0.5}
    //                     onChange={(event, newValue) => {
    //                         event.stopPropagation(); event.nativeEvent.stopImmediatePropagation(); handleRatingChange(newValue as number)
    //                     }}
    //                     onClick={(event) => event.stopPropagation()}
    //                     emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
    //                 />: ''
    //             }
    //         </div>
    //     </InteractiveCard>
  )
}