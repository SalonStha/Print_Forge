import Models3DPage from "@/components/3d_models";
import { Suspense } from "react";

export default function ModlesPage() {
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <Models3DPage/>
            </Suspense>
        </>
    )
}