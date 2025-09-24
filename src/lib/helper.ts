import type { BuildError } from "./builder";

export function errorsToMarkers(
  errors: BuildError[],
  monaco: any,
  model: any,
  currentFile: string,
) {
  const relativeFile = currentFile.replace(`/${window.projectId}/`, "");

  const markers: any[] = [];
  for (let e = 0; e < errors.length; e++) {
    const err = errors[e];
    if (relativeFile !== err.file) continue;

    const lineContent = model.getLineContent(err.line);
    const whitespaceMatch = lineContent.match(/^\s*/);

    const whitespaceLength: number = whitespaceMatch
      ? whitespaceMatch[0].length
      : 0;

    const m = {
      startLineNumber: err.line,
      endLineNumber: err.line,
      startColumn: whitespaceLength + 1,
      endColumn: lineContent.length + 1,
      message: err.message,
      severity: monaco.MarkerSeverity.Error,
    };
    console.log(err);
    markers.push(m);
  }
  return markers;
}
