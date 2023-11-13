import { ChallengesPage } from "@/components/challenges-page";

export const Page = ({ params }: { params: { id: string } }) => {
    return <ChallengesPage challengeId={params.id} />
};

export default Page