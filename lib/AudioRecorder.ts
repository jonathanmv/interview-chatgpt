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
            const mediaRecorder = new MediaRecorder(stream);
            const audioChunks: Blob[] = [];

            mediaRecorder.addEventListener('dataavailable', event => audioChunks.push(event.data))

            const start = () => mediaRecorder.start();

            const stop = (): Promise<AudioData> => new Promise(resolve => {
                mediaRecorder.addEventListener('stop', () => {
                    const audioBlob = new Blob(audioChunks);
                    const audioUrl = URL.createObjectURL(audioBlob);
                    resolve({ audioBlob, audioUrl });
                });

                mediaRecorder.stop();
            });

            return { start, stop }
        } catch (error) {
            console.error(error);
        }
    }
}

export default AudioRecorder;