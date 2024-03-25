import Link from "next/link"

export default function TopMenuItem ( {name, pageRef} : {name: string, pageRef: string}) {

    return (
        <Link href={pageRef}>
            {name}
        </Link>
    )
}