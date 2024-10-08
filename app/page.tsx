import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { auth } from "@/auth";
export const runtime = 'edge';


export default async function Home() {
  const session = await auth();
  return (
    <div>
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 sm:pb-30 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52 ">
          <div>
            <pre>{JSON.stringify(session?.user?.email)}</pre>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}