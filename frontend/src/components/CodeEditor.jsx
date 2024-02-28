import React, { useState, useRef } from 'react';
import Editor from "@monaco-editor/react";
import Navbar from './Navbar';

const files = {
  "script.py": {
    name: "script.py",
    language: "python",
    value: "print('Hello, Python!')"
  },
  "script.java": {
    name: "script.java",
    language: "java",
    value: "public class Main {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println(\"Hello, Java!\");\n\t}\n}"
  },
  "script.cpp": {
    name: "script.cpp",
    language: "cpp",
    value: "#include <iostream>\nusing namespace std;\n\nint main() {\n\tcout << \"Hello, C++!\" << endl;\n\treturn 0;\n}"
  }
};

export default function App() {
  const [fileName, setFileName] = useState("script.py");
  const [selectedLanguage, setSelectedLanguage] = useState("python");
  const [output, setOutput] = useState("");
  const editorRef = useRef(null);
  const outputEditorRef = useRef(null);
  const file = files[fileName];

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  function handleOutputEditorDidMount(editor, monaco) {
    outputEditorRef.current = editor;
  }

  function getEditorValue() {
    if (editorRef.current) {
      const editorValue = editorRef.current.getValue();
      setOutput(editorValue);
    }
  }

  function handleLanguageChange(language) {
    setSelectedLanguage(language);
    const newFileName = `script.${language}`;
    setFileName(newFileName);
  }

  return (
    <div>

    <div className="flex flex-row h-screen">
      

      <div className="w-1/2 border-r border-gray-200">
        <div className="flex justify-between p-4 bg-gray-100 border-b">
          <div className="relative inline-flex">
            <select
              value={selectedLanguage}
              onChange={(e) => handleLanguageChange(e.target.value)}
              className="block appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            >
              <option value="python">Python</option>
              <option value="java">Java</option>
              <option value="cpp">C++</option>
            </select>
          </div>
          <button onClick={() => getEditorValue()} className="px-4 py-2 bg-blue-500 text-white rounded-lg">
            Get Editor Value
          </button>
        </div>
        <div className="flex-grow">
          <Editor
            height="calc(100vh - 48px)"
            theme="vs-dark"
            onMount={handleEditorDidMount}
            path={file.name}
            defaultLanguage={file.language}
            defaultValue={file.value}
          />
        </div>
      </div>
      <div className="w-1/2">
        <div className="flex flex-col h-full">
          <div className="p-4 bg-gray-100 border-b">
            Output
          </div>
          <div className="flex-grow">
            <Editor
              height="calc(100vh - 40px)"
              theme="vs-dark"
              onMount={handleOutputEditorDidMount}
              language="plaintext"
              value={output}
              options={{ readOnly: true }}
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
