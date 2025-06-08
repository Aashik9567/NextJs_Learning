import Link from 'next/link';
export default function F1() {
    return (
        <>
        <div className='text-3xl font-bold'>
            F1 Page
        </div>
        <Link href="/f1/f2" className='text-blue-500 hover:underline'>
            Go to F2 Page
        </Link>
        </>
    );
}