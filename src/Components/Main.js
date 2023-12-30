import React from "react";

const Main = () => {
  return (
    <div className="flex justify-center items-center mt-12">
      <form onSubmit={e=>e.preventDefault()} className="w-[600px] min-w-[400px] border border-gray-100 p-16 shadow-lg">
        <h3 className="p-4 text-xl">Video Information:</h3>
        <div className="px-4 py-2">
          <input type="text" className="border border-gray-100 w-full p-2" placeholder="Project name" />
        </div>
        <div className="px-4 py-2">
          <input type="text" className="border border-gray-100 w-full p-2" placeholder="Video URL" />
        </div>
        <div className="px-4 py-2 grid grid-cols-12">
          <input type="checkbox" name="transcription" value="transcription" /> <label>Transcription</label>
        </div>
        <div className="px-4 py-2 grid grid-cols-12">
          <input type="checkbox" name="subtitles" value="subtitles" /> <label>Subtitles</label>
        </div>
        <div className="px-4 py-2 grid grid-cols-12">
          <input type="checkbox" name="thumbnail" value="thumbnail" /> <label>Thumbnail</label>
        </div>
        <div className="px-4 py-2 w-full">
          <button className="bg-blue-500 text-white font-bold rounded-lg px-4 py-2">Generate</button>
        </div>
      </form>
    </div>
  );
};

export default Main;
