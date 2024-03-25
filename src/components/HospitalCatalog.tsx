import Link from 'next/link'
import '../../interface'
import Card from './Card'

export default async function HospitalCatalog ({ hospitalsJson } : { hospitalsJson: HospitalJson}) {
  return (
    <div className='m-[15px] flex flex-row gap-x-[15px]'>
           {
            hospitalsJson && hospitalsJson.data ? (
            hospitalsJson.data.map(( hospitalItem: HospitalItem) => (
                <Link href={`/hospital/${hospitalItem.id}`} key={hospitalItem.id}>
                    <Card
                        hospitalItem={hospitalItem}
                    />
                </Link>
            ))
            ) : (
                <p>No data available.</p>
            )
           }
    </div>
  )
}