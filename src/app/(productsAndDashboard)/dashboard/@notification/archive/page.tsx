import { Card } from "@/app/components/card";
//these are slots for the dashboard
// import { Card } from "@/app/components/card";
import Link from "next/link";
export default function ArchiveNotification() {
    return (
        <>

        <Card>
      <div> Archive Notification Page</div>  </Card>
      <Link href="/dashboard">default</Link>
        </>
        
      
    );
}