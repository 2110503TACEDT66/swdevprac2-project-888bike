import Link from "next/link"

export default function TopMenuItem ( {name, pageRef} : {name: string, pageRef: string}) {

    return (
        <Link href={pageRef}
        className="bg-slate-300 p-2 rounded-md hover:underline">
            {name}
        </Link>
    )
}