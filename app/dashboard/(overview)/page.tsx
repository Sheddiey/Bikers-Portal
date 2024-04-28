import { lusitana } from '@/app/ui/font';
import POstTopic from '@/app/ui/post-topic/post-topic';
 
export default async function Page () {
    return (
        <main className='shadow-custom p-10 rounded-xl'>
            <h1 className={`${lusitana.className} mb-4 text-blue-500 font-semibold text-center text-xl md:text-2xl`}>Post Topic</h1>
            <POstTopic  />
        </main>
    );
}