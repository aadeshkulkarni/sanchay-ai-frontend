import React from "react";

const Projects = () => {
  return (
    <div className="flex justify-center items-center mt-12">
      <div className="w-[600px] min-w-[400px] border border-gray-100 shadow-lg">
        <Table />
      </div>
    </div>
  );
};
/* TODO: Put in a separate file and accept data as props, make the component presentational */
const Table = () => (
  <table className="text-gray-700 border-collapse border border-slate-400 w-full">
    <thead>
      <tr className="p-2">
        <th className="border border-slate-300 p-2">Project</th>
        <th className="border border-slate-300">Video URL</th>
        <th className="border border-slate-300">Transcription</th>
        <th className="border border-slate-300">Subtitles</th>
        <th className="border border-slate-300">Thumbnail</th>
      </tr>
    </thead>
    <tbody className="text-sm">
      <tr>
        <td className="border border-slate-300 p-2">Tech 2024</td>
        <td className="border border-slate-300">https://google.com</td>
        <td className="border border-slate-300">transcription.txt</td>
        <td className="border border-slate-300">subtitle.vtt</td>
        <td className="border border-slate-300">thumbnail.png</td>
      </tr>
      <tr>
        <td className="border border-slate-300 p-2">Tech 2024</td>
        <td className="border border-slate-300">https://google.com</td>
        <td className="border border-slate-300">transcription.txt</td>
        <td className="border border-slate-300">subtitle.vtt</td>
        <td className="border border-slate-300">thumbnail.png</td>
      </tr>
      <tr>
        <td className="border border-slate-300 p-2">Tech 2024</td>
        <td className="border border-slate-300">https://google.com</td>
        <td className="border border-slate-300">transcription.txt</td>
        <td className="border border-slate-300">subtitle.vtt</td>
        <td className="border border-slate-300">thumbnail.png</td>
      </tr>
      <tr>
        <td className="border border-slate-300 p-2">Tech 2024</td>
        <td className="border border-slate-300">https://google.com</td>
        <td className="border border-slate-300">transcription.txt</td>
        <td className="border border-slate-300">subtitle.vtt</td>
        <td className="border border-slate-300">thumbnail.png</td>
      </tr>
      <tr>
        <td className="border border-slate-300 p-2">Tech 2024</td>
        <td className="border border-slate-300">https://google.com</td>
        <td className="border border-slate-300">transcription.txt</td>
        <td className="border border-slate-300">subtitle.vtt</td>
        <td className="border border-slate-300">thumbnail.png</td>
      </tr>
      <tr>
        <td className="border border-slate-300 p-2">Tech 2024</td>
        <td className="border border-slate-300">https://google.com</td>
        <td className="border border-slate-300">transcription.txt</td>
        <td className="border border-slate-300">subtitle.vtt</td>
        <td className="border border-slate-300">thumbnail.png</td>
      </tr>
      <tr>
        <td className="border border-slate-300 p-2">Tech 2024</td>
        <td className="border border-slate-300">https://google.com</td>
        <td className="border border-slate-300">transcription.txt</td>
        <td className="border border-slate-300">subtitle.vtt</td>
        <td className="border border-slate-300">thumbnail.png</td>
      </tr>
      <tr>
        <td className="border border-slate-300 p-2">Tech 2024</td>
        <td className="border border-slate-300">https://google.com</td>
        <td className="border border-slate-300">transcription.txt</td>
        <td className="border border-slate-300">subtitle.vtt</td>
        <td className="border border-slate-300">thumbnail.png</td>
      </tr>
      <tr>
        <td className="border border-slate-300 p-2">Tech 2024</td>
        <td className="border border-slate-300">https://google.com</td>
        <td className="border border-slate-300">transcription.txt</td>
        <td className="border border-slate-300">subtitle.vtt</td>
        <td className="border border-slate-300">thumbnail.png</td>
      </tr>
      <tr>
        <td className="border border-slate-300 p-2">Tech 2024</td>
        <td className="border border-slate-300">https://google.com</td>
        <td className="border border-slate-300">transcription.txt</td>
        <td className="border border-slate-300">subtitle.vtt</td>
        <td className="border border-slate-300">thumbnail.png</td>
      </tr>
    </tbody>
  </table>
);

export default Projects;
