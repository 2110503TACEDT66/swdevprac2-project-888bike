"use client"
import ApptCatalog from "@/components/ApptCatalog";
import getAppts from "@/libs/getAppts";
import { Suspense, useState, useEffect } from "react";
import { LinearProgress } from "@mui/material";

export default function ApptsPage() {
    const [appts, setAppts] = useState(null); // Initialize appts state

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            getAppts(token)
                .then(data => {
                    setAppts(data); // Set the fetched data to the appts state
                })
                .catch(error => {
                    console.error('Error fetching appointments:', error);
                });
        }
    }, []); // Run once on component mount

    return (
        <main>
            <Suspense fallback={<p>Loading ... <LinearProgress /></p>}>
                {appts !== null ? ( // Render ApptCatalog only when appts data is available
                    <ApptCatalog ApptJson={appts} />
                ) : (
                    null // Render nothing while data is being fetched
                )}
            </Suspense>
        </main>
    )
}