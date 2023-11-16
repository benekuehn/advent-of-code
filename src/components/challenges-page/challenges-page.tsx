import { FunctionComponent } from "react"

type ChallengePageProps = {
    challengeId: string;
}

export const ChallengesPage: FunctionComponent<ChallengePageProps> = ({ challengeId }) => {
    return (
        <h1 style={{ color: "#fff" }}>Challenges page for challenge {challengeId}</h1>
    )
}
