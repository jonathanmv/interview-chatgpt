type AudioData = {
    audioBlob: Blob
    audioUrl: string
};
export type AudioRecorderType = {
    start: () => void;
    stop: () => Promise<AudioData>;
}
const AudioRecorder = {
    async record() {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            const mediaType = "audio/webm";
            if (!MediaRecorder.isTypeSupported(mediaType)) {
                throw new Error(`Media type "${mediaType}" is not supported`);
            }
            const mediaRecorder = new MediaRecorder(stream);
            const audioChunks: Blob[] = [];

            mediaRecorder.addEventListener('dataavailable', event => audioChunks.push(event.data))

            const start = () => mediaRecorder.start();

            const stop = (): Promise<AudioData> => new Promise(resolve => {
                mediaRecorder.addEventListener('stop', () => {
                    // BUG New audio is appended. The 4th recording contains the other 3.
                    const audioBlob = new Blob(audioChunks, { type: mediaType });
                    const audioUrl = URL.createObjectURL(audioBlob);
                    resolve({ audioBlob, audioUrl });
                });

                mediaRecorder.stop();
            });

            return { start, stop }
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}

export default AudioRecorder;