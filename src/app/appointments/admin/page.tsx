"use client"
import ApptCatalog from "@/components/ApptCatalog";
// import userbookslot from "@/components/userbookslot";
import getadminAppts from "@/libs/getadminAppts";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";


const adminappt = getadminAppts()


export default function adminApptpage(){

    return (
        <main>
            <Suspense fallback={<p>Loading ... <LinearProgress/></p>}>
                <ApptCatalog ApptJson={adminappt}/>
            </Suspense>
        </main>
    )
}