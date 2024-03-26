"use client"
import ComCatalog from "@/components/ComCatalog";
// import userbookslot from "@/components/userbookslot";
import getcoms from "@/libs/getcoms";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";

const coms = getcoms()

export default function adminApptpage(){
    return (
        <main>
            <Suspense fallback={<p>Loading ... <LinearProgress/></p>}>
                <ComCatalog ComJson={coms}/>
            </Suspense>
        </main>
    )
}