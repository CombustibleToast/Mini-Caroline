const { client } = require('../../index')

module.exports = {
    name: "assignLoudspeaker",
    async execute() {
        /**
         * This function should:
         * Find out whether the user's vc needs a loudspeaker assigned to it. Return {status: "already assigned", loudspeakerid: loudspeakerid}
         * If it does, search the client.loudspeakers collection and find one that is unassigned.
         * If there are no vacancies, return {status: "no vacancies"}
         * Return {status: "new assignment", loudspeakerid}
         */

        //search for both a vacant loudspeaker and a loudspeaker that is already occupying the user's vc

        if (client.connection)
            return { status: "already assigned"}//, loudspeakerId: vacantLoudspeakerClient.user.id };

        return { status: "new assignment"}//, loudspeakerId: vacantLoudspeakerClient.user.id };
    }
}

