import { Card } from "@/app/components/card";
//these are slots for the dashboard
// import { Card } from "@/app/components/card";
import Link from "next/link";
export default function notification() {
    return (
        <>

        <Card>
      <div>  Notification Page</div>  </Card>
      <Link href="/dashboard/archive">Archieved notification</Link>
        </>
        
      
    );
}