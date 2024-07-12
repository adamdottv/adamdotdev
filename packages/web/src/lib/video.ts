import { FaceLandmarksDetector } from "@tensorflow-models/face-landmarks-detection";

export async function hasFace(
  camera: MediaDeviceInfo,
  video: HTMLVideoElement,
  detector: FaceLandmarksDetector,
) {
  return new Promise<boolean>(async (resolve) => {
    try {
      const userMedia = await navigator.mediaDevices.getUserMedia({
        video: { deviceId: { exact: camera.deviceId } },
      });

      video.srcObject = userMedia;
      video.onloadeddata = async () => {
        setTimeout(async () => {
          const faces = await detector.estimateFaces(video, {
            flipHorizontal: true,
            staticImageMode: false,
          });
          resolve(faces.length > 0);
        }, 2000);
      };
      setTimeout(async () => {
        await video.play();
      }, 100);
    } catch (error) {
      console.error(error);
      resolve(false);
    }
  });
}
