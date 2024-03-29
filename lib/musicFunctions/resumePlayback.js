const latentFunctionPrecheck = require("./latentFunctionPrecheck");

module.exports = {
    name: "resumePlayback",

    async execute(interaction) {
        const guardCheckResponse = await latentFunctionPrecheck.execute(interaction);
        if (!guardCheckResponse.inVoiceChannel || !guardCheckResponse.loudspeakerClient)
            return;

        //collect loudspeaker
        const loudspeakerClient = guardCheckResponse.loudspeakerClient;

        //start a response to the user
        let response = "";

        //don't do anything if the queue is empty
        if (loudspeakerClient.queue.length == 0) {
            response = "The queue is empty, playback not resumed.";
            //if (!interaction.replied && !interaction.deferred)
                //await interaction.followUp("The queue is empty, playback not resumed.");
            await interaction.editReply("The queue is empty, playback not resumed.");
            return response;
        }

        switch (loudspeakerClient.player.state.status) {
            case "playing":
                response = "Already playing.";
                break;
            case "idle":
                interaction.client.functions.get("startNextSong").execute(loudspeakerClient);
                response = "Beginning playback.";
                break;
            case "paused":
                loudspeakerClient.player.unpause();
                response = "Playback resumed.";
                break;
            case "buffering":
                response = "The current song is still buffering. Please wait a moment."
                break;
            default:
                response = "I have no idea what's going on. Send this to Ena: ";
                response += `loudspeakerClient.player.state.status = ${loudspeakerClient.player.state.status} on resumePlayback.js:26`;
                break;
        }

        await interaction.editReply(response);
        return response;
    }
}