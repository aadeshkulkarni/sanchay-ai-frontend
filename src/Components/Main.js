import React, { useState } from "react";

const Main = () => {
  const [project, setProject] = useState("");
  const [videoURL, setVideoURL] = useState("");
  const [needsTranscoding, setTranscodingNeeds] = useState(false);
  const [needsSubtitles, setSubtitlesNeeds] = useState(false);
  const [needsThumbnail, setThumbailNeeds] = useState(false);

  const onGenerateBtnClicked = () => {
    /* 
    TODO:
    Validations
     */
    const data = {
      project,
      videoURL,
      needs: {
        transcoding: needsTranscoding,
        subtitles: needsSubtitles,
        thumbnails: needsThumbnail,
      },
    };
    console.log(data);
    /* 
    TODO:
    POST request to backend /generate-metadata with {data}
     */
  };
  return (
    <div className="flex justify-center items-center mt-12">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-[600px] min-w-[400px] border border-gray-100 p-16 shadow-lg"
      >
        <h3 className="p-4 text-xl">Video Information:</h3>
        <div className="px-4 py-2">
          <input
            type="text"
            value={project}
            onChange={(e) => setProject(e.target.value)}
            className="border border-gray-100 w-full p-2"
            placeholder="Project name"
          />
        </div>
        <div className="px-4 py-2">
          <input
            type="text"
            value={videoURL}
            onChange={(e) => setVideoURL(e.target.value)}
            className="border border-gray-100 w-full p-2"
            placeholder="Video URL"
          />
        </div>
        <div className="px-4 py-2 grid grid-cols-12">
          <input
            id="transcription"
            type="checkbox"
            checked={needsTranscoding}
            onChange={() => setTranscodingNeeds(!needsTranscoding)}
            name="transcription"
            value="transcription"
          />{" "}
          <label for="transcription">Transcription</label>
        </div>
        <div className="px-4 py-2 grid grid-cols-12">
          <input
            id="subtitles"
            type="checkbox"
            checked={needsSubtitles}
            onChange={() => setSubtitlesNeeds(!needsSubtitles)}
            name="subtitles"
            value="subtitles"
          />{" "}
          <label for="subtitles">Subtitles</label>
        </div>
        <div className="px-4 py-2 grid grid-cols-12">
          <input
            type="checkbox"
            id="thumbnail"
            checked={needsThumbnail}
            onChange={() => setThumbailNeeds(!needsThumbnail)}
            name="thumbnail"
            value="thumbnail"
          />{" "}
          <label for="thumbnail">Thumbnail</label>
        </div>
        <div className="px-4 py-2 w-full">
          <button
            onClick={onGenerateBtnClicked}
            className="bg-blue-500 text-white font-bold rounded-lg px-4 py-2"
          >
            Generate
          </button>
        </div>
      </form>
    </div>
  );
};

export default Main;

/* 
TODO: Add loader after user clicks on generate button and a toast with notifcation (Lightweight third party library that has a good support)
TODO: Implement an Error Boundary component for all errors
TODO: 
*/
