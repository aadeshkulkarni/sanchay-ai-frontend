export const Table = ({ projects }) => (
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
      {projects.map(
        ({
          projectName,
          projectLink,
          transcriptionFile,
          subtitleFile,
          thumbailImg,
          id
        }) => (
          <tr key={id}>
            <td className="border border-slate-300 p-2">{projectName}</td>
            <td className="border border-slate-300">{projectLink}</td>
            <td className="border border-slate-300">{transcriptionFile}</td>
            <td className="border border-slate-300">{subtitleFile}</td>
            <td className="border border-slate-300">{thumbailImg}</td>
          </tr>
        )
      )}
    </tbody>
  </table>
);
