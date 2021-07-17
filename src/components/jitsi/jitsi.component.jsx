import React, { Component } from "react";
//import "./jitsi.component.css";

class JitsiComponent extends Component {
    domain = "meet.jit.si";
    api = {};

    constructor(props) {
        super(props);
        this.state = {
            room: "arcadex",
            user: {
                name: "username",
            },
            //Defaults
            isAudioMuted: true,
            isVideoMuted: true,
        };
    }

    startMeet = () => {
        const options = {
            roomName: this.state.room,
            width: 415,
            height: 415,
            // For Nikhil's Suggestions : Remove Screen Share option

            configOverwrite: {
                SHOW_WATERMARK_FOR_GUESTS: false,
                startWithAudioMuted: true,
                prejoinPageEnabled: false,
                toolbarButtons: [
                    "microphone",
                    "camera",
                    "closedcaptions",
                    "hangup",
                    "profile",
                    "settings",
                    "chat",
                    "raisehand",
                    "videoquality",
                    "tileview",
                    "select-background",
                    "mute-everyone",
                    "mute-video-everyone",
                    "security",
                ],
            },
            interfaceConfigOverwrite: {
                // overwrite interface properties
                DISABLE_DOMINANT_SPEAKER_INDICATOR: true,
                SHOW_JITSI_WATERMARK: false,
                HIDE_DEEP_LINKING_LOGO: true,
                SHOW_BRAND_WATERMARK: false,
                SHOW_WATERMARK_FOR_GUESTS: false,
                SHOW_BRAND_WATERMARK: false,
                SHOW_WATERMARK_FOR_GUESTS: false,
                APP_NAME: "ArcadeX",
                DEFAULT_BACKGROUND: "#23293d",
                DEFAULT_LOGO_URL: 0,
                JITSI_WATERMARK_LINK: "https://github.com/pranjalbareth",
                SHOW_JITSI_WATERMARK: false,
            },

            parentNode: document.querySelector("#jitsi-iframe"),
            userInfo: {
                displayName: this.state.user.name,
            },
        };
        this.api = new window.JitsiMeetExternalAPI(this.domain, options);

        this.api.addEventListeners({
            readyToClose: this.handleClose,
            participantLeft: this.handleParticipantLeft,
            participantJoined: this.handleParticipantJoined,
            videoConferenceJoined: this.handleVideoConferenceJoined,
            videoConferenceLeft: this.handleVideoConferenceLeft,
            audioMuteStatusChanged: this.handleMuteStatus,
            videoMuteStatusChanged: this.handleVideoStatus,
        });
    };

    handleClose = () => {
        console.log("handleClose");
    };

    handleParticipantLeft = async (participant) => {
        console.log("handleParticipantLeft", participant); // { id: "5fc04ce5" }
        const data = await this.getParticipants();
    };

    handleParticipantJoined = async (participant) => {
        console.log("handleParticipantJoined", participant); // { id: "1cc4670a", displayName: "otherusername", formattedDisplayName: "otherusername" }
        const data = await this.getParticipants();
    };

    handleVideoConferenceJoined = async (participant) => {
        console.log("handleVideoConferenceJoined", participant); // { roomName: "arcadex", id: "1a7e19e3", displayName: "username", formattedDisplayName: "username (me)" }
        const data = await this.getParticipants();
    };

    handleVideoConferenceLeft = () => {
        console.log("handleVideoConferenceLeft");
        return this.props.history.push("/thank-you");
    };

    handleMuteStatus = (audio) => {
        console.log("handleMuteStatus", audio); // { muted: true }
    };

    handleVideoStatus = (video) => {
        console.log("handleVideoStatus", video); // { muted: true }
    };

    getParticipants() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.api.getParticipantsInfo()); // get all participants
            }, 500);
        });
    }

    componentDidMount() {
        if (window.JitsiMeetExternalAPI) {
            this.startMeet();
        } else {
            alert("Error: JitsiMeetExternalAPI not loaded \n");
        }
    }

    render() {
        return (
            <>
                
                <div id="jitsi-iframe"></div>
            </>
        );
    }
}

export default JitsiComponent;
